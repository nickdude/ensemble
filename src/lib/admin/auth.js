// Admin session auth — single shared password, stateless signed cookie.
//
// A session is a short string `"<exp>.<hmac>"` where hmac = HMAC-SHA256 of the
// expiry over ADMIN_SESSION_SECRET. No database or session store needed. Uses
// the Web Crypto API only, so it runs in both the Edge proxy and Node route
// handlers.

export const SESSION_COOKIE = "admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 12; // 12 hours

const enc = new TextEncoder();

function toHex(buffer) {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function hmac(message) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not set");
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return toHex(sig);
}

/** Constant-time-ish string compare. */
function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Create a signed session token valid for SESSION_TTL_MS. */
export async function createSession() {
  const exp = String(Date.now() + SESSION_TTL_MS);
  const sig = await hmac(exp);
  return `${exp}.${sig}`;
}

/** Verify a session token: correct signature and not expired. */
export async function verifySession(token) {
  if (!token || typeof token !== "string") return false;
  const dot = token.indexOf(".");
  if (dot === -1) return false;
  const exp = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  if (!/^\d+$/.test(exp)) return false;
  const expected = await hmac(exp);
  if (!safeEqual(sig, expected)) return false;
  return Number(exp) > Date.now();
}

/** Verify the submitted password against ADMIN_PASSWORD. */
export function checkPassword(password) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) throw new Error("ADMIN_PASSWORD is not set");
  return typeof password === "string" && safeEqual(password, expected);
}

/** Options for the session cookie (used by route handlers). */
export function sessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: Math.floor(SESSION_TTL_MS / 1000),
  };
}
