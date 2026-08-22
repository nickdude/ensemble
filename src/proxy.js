import { NextResponse } from "next/server";
import { SESSION_COOKIE, verifySession } from "@/lib/admin/auth";

// Paths that must be reachable without a session (the login page and its API).
const PUBLIC_ADMIN_PATHS = ["/admin/login", "/api/admin/login"];

function isProtectedAdminPath(pathname) {
  if (PUBLIC_ADMIN_PATHS.includes(pathname)) return false;
  return pathname.startsWith("/admin") || pathname.startsWith("/api/admin");
}

// Next.js 16 proxy (formerly "middleware"). Two responsibilities:
//   1. Expose the current pathname to Server Components as the `x-pathname`
//      request header, read by <StructuredData/> to emit page-specific JSON-LD.
//   2. Gate the admin panel (/admin/*) and its API (/api/admin/*) behind a
//      valid signed session cookie.
export async function proxy(request) {
  const { pathname } = request.nextUrl;

  if (isProtectedAdminPath(pathname)) {
    const token = request.cookies.get(SESSION_COOKIE)?.value;
    const authed = await verifySession(token);
    if (!authed) {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  // Run on real page routes only — skip Next internals, static assets and any
  // path that looks like a file (contains a dot), e.g. images, fonts, sitemap.
  matcher: [
    "/((?!_next/static|_next/image|_next/data|favicon.ico|sitemap.xml|robots.txt|assets/|.*\\.[^/]+$).*)",
  ],
};
