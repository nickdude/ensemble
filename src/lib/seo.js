// Central SEO configuration — single source of truth for the production origin
// used by canonical tags, the XML sitemap and robots.txt.
//
// The origin is read from NEXT_PUBLIC_SITE_URL when present (e.g. set in Vercel),
// and falls back to the production domain. Any trailing slash is stripped so we
// never emit double-slash URLs.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.ensemble.co.in"
).replace(/\/+$/, "");

const SITE_NAME = "Ensemble Infrastructure";

/**
 * Build a Next.js Metadata object for a page with a self-referencing canonical.
 *
 * @param {Object}  opts
 * @param {string}  opts.title        Page title (merged into the root title template).
 * @param {string}  opts.description  Meta description.
 * @param {string}  opts.path         Absolute path for this page, e.g. "/aboutus".
 *                                    Resolved against metadataBase into a full canonical URL.
 * @param {boolean} [opts.index=true] When false, emits robots noindex (still follow).
 * @param {string}  [opts.canonicalPath] Override the canonical target (used to
 *                                    consolidate duplicate/fallback pages onto a primary URL).
 */
export function buildMetadata({
  title,
  description,
  path,
  index = true,
  canonicalPath,
}) {
  return {
    title,
    description,
    alternates: { canonical: canonicalPath || path },
    robots: index ? undefined : { index: false, follow: true },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
    },
  };
}
