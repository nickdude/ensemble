// ─────────────────────────────────────────────────────────────────────────────
// Manually-maintained meta descriptions — single source of truth.
//
// Every indexable route has a UNIQUE, hand-written meta description, 150–160
// characters, written for the page's actual intent with a natural target
// keyword and a subtle call-to-action.
//
// IMPORTANT (maintenance rules):
//   • These are authored by hand — never auto-generate from titles/content/AI.
//   • Keep each between 150 and 160 characters.
//   • Keep each description unique across the whole site.
//   • When you add a new indexable route (static page, blog, news item or
//     project), add its description here. Helpers below fall back to undefined
//     for unknown/noindex routes, which is intentional.
//
// A test (lib/seo/__tests__ or the inline validator in the PR) enforces the
// length + uniqueness invariants.
//
// The description text is stored in src/content/seo.json so it can be edited
// through the admin panel; the maps below are re-exported from that JSON to
// keep the public API (STATIC_DESCRIPTIONS, helpers, …) unchanged.
// ─────────────────────────────────────────────────────────────────────────────

import seo from "@/content/seo.json";

/** Static, top-level routes keyed by pathname. */
export const STATIC_DESCRIPTIONS = seo.static;

/** Blog detail pages keyed by slug (indexable posts only). */
export const BLOG_DESCRIPTIONS = seo.blog;

/** News detail pages keyed by slug (internally-rendered, indexable items). */
export const NEWS_DESCRIPTIONS = seo.news;

/** Project case-study pages keyed by slug. */
export const PROJECT_DESCRIPTIONS = seo.project;

/* -------------------------------------------------------------------------- */
/* Resolver helpers                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Manual meta description for a static route.
 * @param {string} path  e.g. "/services"
 * @returns {string|undefined}
 */
export function staticDescription(path) {
  return STATIC_DESCRIPTIONS[path];
}

/**
 * Manual meta description for a blog detail page.
 * @param {string} slug
 * @returns {string|undefined}
 */
export function blogDescription(slug) {
  return BLOG_DESCRIPTIONS[slug];
}

/**
 * Manual meta description for a news detail page.
 * @param {string} slug
 * @returns {string|undefined}
 */
export function newsDescription(slug) {
  return NEWS_DESCRIPTIONS[slug];
}

/**
 * Manual meta description for a project detail page.
 * @param {string} slug
 * @returns {string|undefined}
 */
export function projectDescription(slug) {
  return PROJECT_DESCRIPTIONS[slug];
}
