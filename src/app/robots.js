import { SITE_URL } from "@/lib/seo";

// Native Next.js robots. Served automatically at /robots.txt.
// The site has no admin/auth/internal routes, so all public content — including
// CSS, JS, images, fonts and other static assets — is fully crawlable.
// We only disallow Next.js internal build artifacts that carry no SEO value,
// and declare the sitemap + canonical host.
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // _next/static (CSS/JS/fonts/images) is intentionally NOT blocked so
        // Google can render the pages. Only non-content internals are excluded.
        disallow: ["/_next/data/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
