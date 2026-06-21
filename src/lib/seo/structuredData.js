// Low-level helpers shared by every schema builder.
import { SITE_URL } from "@/lib/seo";

/**
 * Resolve any path or URL to an absolute URL against the production origin.
 * Already-absolute http(s) URLs (e.g. S3-hosted images) are returned untouched.
 *
 * @param {string} [pathOrUrl="/"]
 * @returns {string}
 */
export function absoluteUrl(pathOrUrl = "/") {
  if (!pathOrUrl) return SITE_URL;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

// Stable @id anchors so the whole document forms ONE connected graph and the
// Organization / WebSite are declared exactly once and referenced everywhere.
export const ids = {
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
  logo: `${SITE_URL}/#logo`,
};

/**
 * Best-effort parse of the human-readable dates used in the content data
 * (e.g. "Saturday, September 21, 2024" or "16 March 2025") into an ISO 8601
 * string. Returns undefined when the date can't be parsed, so we never emit an
 * invalid datePublished/dateModified.
 *
 * @param {string} input
 * @returns {string|undefined}
 */
export function parseDate(input) {
  if (!input) return undefined;
  const cleaned = String(input)
    .replace(/^[A-Za-z]+,\s*/, "") // drop a leading weekday like "Saturday, "
    .trim();
  const t = Date.parse(cleaned);
  if (Number.isNaN(t)) return undefined;
  return new Date(t).toISOString();
}

/**
 * Recursively strip undefined / null / empty values so the emitted JSON-LD is
 * compact and never carries empty properties that trip up validators.
 *
 * @template T
 * @param {T} value
 * @returns {T}
 */
export function clean(value) {
  if (Array.isArray(value)) {
    const arr = value.map(clean).filter((v) => v !== undefined && v !== null);
    return arr;
  }
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      const cv = clean(v);
      if (cv === undefined || cv === null) continue;
      if (Array.isArray(cv) && cv.length === 0) continue;
      if (typeof cv === "string" && cv.trim() === "") continue;
      out[k] = cv;
    }
    return out;
  }
  return value;
}
