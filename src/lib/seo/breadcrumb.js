// Dynamic BreadcrumbList generation from the request path.
//
// Home is always first. Each subsequent route segment becomes a crumb with an
// absolute URL. Labels come from a known-segment map, then any caller-supplied
// override (used to swap a slug for its real title), then a prettified slug.
import { absoluteUrl } from "./structuredData";

const SEGMENT_LABELS = {
  aboutus: "About Us",
  contactus: "Contact Us",
  services: "Services",
  projects: "Projects",
  blogs: "Blogs",
  news: "News",
  sustainability: "Sustainability",
};

/** Turn a slug like "metro-expansion-delhi" into "Metro Expansion Delhi". */
function prettify(slug) {
  try {
    slug = decodeURIComponent(slug);
  } catch {
    /* keep raw slug if it isn't valid percent-encoding */
  }
  return slug
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Build ordered breadcrumb items for a pathname.
 *
 * @param {string} pathname            e.g. "/blogs/blog1"
 * @param {Object<string,string>} [labelOverrides]
 *        Map keyed by full accumulated path ("/blogs/blog1") or bare segment
 *        ("blog1") → display label.
 * @returns {Array<{name:string,url:string}>}
 */
export function buildBreadcrumbItems(pathname, labelOverrides = {}) {
  const segments = pathname.split("/").filter(Boolean);
  const items = [{ name: "Home", url: absoluteUrl("/") }];
  let acc = "";
  for (const seg of segments) {
    acc += `/${seg}`;
    const name =
      labelOverrides[acc] ||
      labelOverrides[seg] ||
      SEGMENT_LABELS[seg] ||
      prettify(seg);
    items.push({ name, url: absoluteUrl(acc) });
  }
  return items;
}

/**
 * BreadcrumbList JSON-LD node for a pathname.
 *
 * @param {string} pathname
 * @param {Object<string,string>} [labelOverrides]
 */
export function breadcrumbListSchema(pathname, labelOverrides = {}) {
  const items = buildBreadcrumbItems(pathname, labelOverrides);
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(pathname)}#breadcrumb`,
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
