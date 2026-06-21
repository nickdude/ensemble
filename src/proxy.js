import { NextResponse } from "next/server";

// Next.js 16 proxy (formerly "middleware"). Exposes the current pathname to
// Server Components as the `x-pathname` request header, which the structured-
// data orchestrator (<StructuredData/>) reads to emit the correct page-specific
// JSON-LD. This is a pass-through — it does not redirect, rewrite or alter
// responses.
export function proxy(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  // Run on real page routes only — skip Next internals, static assets and any
  // path that looks like a file (contains a dot), e.g. images, fonts, sitemap.
  matcher: [
    "/((?!_next/static|_next/image|_next/data|favicon.ico|sitemap.xml|robots.txt|assets/|.*\\.[^/]+$).*)",
  ],
};
