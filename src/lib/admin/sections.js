// Registry of everything the admin panel can edit.
//
// Each section maps to one JSON file under src/content/. The admin UI renders a
// generic, recursive form from the JSON shape, so we don't hand-write a form per
// section — this registry only supplies metadata + which nested paths behave as
// "maps" (add/remove keyed entries, e.g. blog/news/project detail keyed by slug).

export const SECTIONS = {
  // ── Pages ──────────────────────────────────────────────────────────────
  home: {
    label: "Home",
    group: "Pages",
    path: "src/content/homeData.json",
    description: "Splash, sub-hero, counters and blueprint projects.",
  },
  aboutus: {
    label: "About Us",
    group: "Pages",
    path: "src/content/aboutUsData.json",
    description: "Hero, mission/vision, awards and team members.",
  },
  services: {
    label: "Services",
    group: "Pages",
    path: "src/content/servicesData.json",
    description: "Service hero and the four service offerings.",
  },
  sustainability: {
    label: "Sustainability",
    group: "Pages",
    path: "src/content/sustainabilityData.json",
    description: "Sustainability hero, initiatives and efficiency.",
  },
  contact: {
    label: "Contact",
    group: "Pages",
    path: "src/content/contactData.json",
    description: "Office locations and inquiry-form labels.",
  },

  // ── Collections (keyed by slug) ────────────────────────────────────────
  blogs: {
    label: "Blogs",
    group: "Collections",
    path: "src/content/blogsData.json",
    description: "Blog hero, listing cards and per-slug articles.",
    maps: ["blogDetail"],
    seoMap: "blog",
  },
  news: {
    label: "News",
    group: "Collections",
    path: "src/content/newsData.json",
    description: "News hero, gallery items and per-slug articles.",
    maps: ["newsDetail"],
    seoMap: "news",
  },
  projects: {
    label: "Projects",
    group: "Collections",
    path: "src/content/projectsData.json",
    description: "Project hero, gallery and per-slug case studies.",
    maps: ["projectDetail"],
    seoMap: "project",
  },

  // ── Global ─────────────────────────────────────────────────────────────
  footer: {
    label: "Footer",
    group: "Global",
    path: "src/content/footerData.json",
    description: "Navigation, social links, contact and copyright.",
  },
  faq: {
    label: "FAQs",
    group: "Global",
    path: "src/content/faqData.json",
    description: "FAQ groups for the Home and Services pages.",
    maps: [""],
  },
  seo: {
    label: "SEO / AEO",
    group: "Global",
    path: "src/content/seo.json",
    description: "Per-page and per-slug meta descriptions.",
    maps: ["static", "blog", "news", "project"],
    isSeo: true,
  },
};

export const SECTION_KEYS = Object.keys(SECTIONS);

export function getSection(key) {
  return SECTIONS[key] || null;
}

/** Sections grouped for the dashboard, in display order. */
export function groupedSections() {
  const order = ["Pages", "Collections", "Global"];
  const groups = {};
  for (const [key, s] of Object.entries(SECTIONS)) {
    (groups[s.group] ||= []).push({ key, ...s });
  }
  return order
    .filter((g) => groups[g])
    .map((g) => ({ group: g, items: groups[g] }));
}

// Keys treated as image URLs by the editor (rendered with an ImageField +
// alt-text). Matched case-insensitively against the JSON key.
export const IMAGE_KEYS = [
  "image",
  "img",
  "mainimage",
  "footerimage",
  "authorimage",
  "icon",
  "logo",
  "light",
  "dark",
  "src",
];

/** Recommended meta-description length window (soft guidance in the UI). */
export const SEO_MIN = 150;
export const SEO_MAX = 160;
