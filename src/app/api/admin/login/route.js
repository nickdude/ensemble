import { NextResponse } from "next/server";
import { z } from "zod";
import {
  checkPassword,
  createSession,
  SESSION_COOKIE,
  sessionCookieOptions,
} from "@/lib/admin/auth";

const bodySchema = z.object({ password: z.string().min(1) });

export async function POST(request) {
  let parsed;
  try {
    parsed = bodySchema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: "Password required" }, { status: 400 });
  }

  if (!checkPassword(parsed.password)) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const token = await createSession();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, token, sessionCookieOptions());
  return res;
}
