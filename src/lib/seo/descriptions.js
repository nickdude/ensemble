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
// ─────────────────────────────────────────────────────────────────────────────

/** Static, top-level routes keyed by pathname. */
export const STATIC_DESCRIPTIONS = {
  "/":
    "Ensemble Infrastructure is a Mumbai-based design and build firm creating future-ready offices and commercial workspaces across India. Explore our work today.",
  "/aboutus":
    "Discover Ensemble Infrastructure, a Mumbai design and build company delivering future-ready workplaces across India since 2001. Learn more about our journey.",
  "/contactus":
    "Contact Ensemble Infrastructure to plan your next office design and build project. Share your workspace requirements and our team will get back to you shortly.",
  "/services":
    "Explore Ensemble Infrastructure services: design and build, general contracting, design consultancy and base build for offices and commercial spaces in India.",
  "/sustainability":
    "See how Ensemble Infrastructure builds sustainable workplaces through energy efficiency, responsible materials and our 2029 roadmap. Learn more about our goals.",
  "/projects":
    "Browse Ensemble Infrastructure's design and build portfolio of offices and commercial workspaces delivered across India. Explore our featured projects below.",
  "/blogs":
    "Read the Ensemble blog for insights on workplace design, interiors, construction and sustainable building trends in India. Explore our latest articles today.",
  "/news":
    "Catch the latest Ensemble Infrastructure news, press coverage and media features on our workplace projects and industry milestones across India. Read more here.",
};

/** Blog detail pages keyed by slug (indexable posts only). */
export const BLOG_DESCRIPTIONS = {
  blog1:
    "Building for the Future explores how an integrated design and build approach creates adaptable, sustainable, future-ready workspaces. Read the Ensemble blog.",
  blog2:
    "In this Ensemble blog, see why flexible layouts, smart systems and sustainable design help workplaces evolve with business needs. Read the full article here.",
};

/** News detail pages keyed by slug (internally-rendered, indexable items). */
export const NEWS_DESCRIPTIONS = {
  "bridge-project-chennai":
    "Ensemble Architectures is recognised for a Wellbeing Policy advancing employee wellbeing and gender equity in the workplace. Read more about this feature.",
  "metro-expansion-delhi":
    "See how Delhi Metro's latest network expansion brings innovative design and sustainable transit practices to the capital. Explore the full update here.",
};

/** Project case-study pages keyed by slug. */
export const PROJECT_DESCRIPTIONS = {
  "project-1":
    "Bridge+ in Chennai: a 25,000 sq ft office for Capitaland delivered by Ensemble through end-to-end general contracting. Explore this design and build case study.",
  "project-2":
    "Canon in Mumbai: a 30,000 sq ft workplace delivered by Ensemble as an integrated design and build project. Explore the case study behind this office space.",
  "project-3":
    "Zydus in Ahmedabad: a 9,00,000 sq ft pharmaceutical office delivered by Ensemble's general contracting team. Explore this design and build case study.",
  "project-4":
    "UST Global in Trivandrum: a 2,50,000 sq ft office delivered by Ensemble through general contracting. Explore this large-format workplace design and build.",
  "project-7":
    "RPSG in Kolkata: a 50,000 sq ft office delivered by Ensemble Infrastructure's design and build team. Explore the case study behind this workplace project.",
  "project-10":
    "Cowrks in Bengaluru: a flexible coworking office space delivered by Ensemble Infrastructure. Explore how our design and build team shaped this workplace.",
  "project-12":
    "Meenakshi Hospitals in Madurai: a corporate office space delivered by Ensemble Infrastructure's design and build team. Explore this workplace case study.",
};

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
