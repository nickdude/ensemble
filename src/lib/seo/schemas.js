// Pure Schema.org node builders.
//
// Every function returns a plain object WITHOUT "@context" — they are designed
// to be assembled into a single "@graph" document (see components/seo) so that
// Organization / WebSite are declared once and referenced by @id everywhere,
// preventing duplicate top-level schemas.
import { seoConfig } from "./config";
import { absoluteUrl, ids, clean } from "./structuredData";

/* -------------------------------------------------------------------------- */
/* Site-wide identity                                                          */
/* -------------------------------------------------------------------------- */

export function organizationSchema() {
  const c = seoConfig;
  return clean({
    "@type": "Organization",
    "@id": ids.organization,
    name: c.name,
    legalName: c.legalName,
    url: `${c.siteUrl}/`,
    logo: {
      "@type": "ImageObject",
      "@id": ids.logo,
      url: absoluteUrl(c.logo),
    },
    image: { "@id": ids.logo },
    description: c.description,
    foundingDate: c.foundingDate,
    email: c.email,
    telephone: c.phone,
    address: { "@type": "PostalAddress", ...c.address },
    sameAs: c.sameAs,
    areaServed: c.areaServed,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: c.phone,
      email: c.email,
      contactType: "sales",
      areaServed: c.areaServed,
      availableLanguage: ["English", "Hindi"],
    },
  });
}

export function websiteSchema() {
  const c = seoConfig;
  return clean({
    "@type": "WebSite",
    "@id": ids.website,
    name: c.name,
    url: `${c.siteUrl}/`,
    description: c.description,
    inLanguage: c.locale,
    publisher: { "@id": ids.organization },
    // NOTE: no SearchAction — the site has no on-site search feature. Add a
    // `potentialAction` here if/when a `/search?q=` route is introduced.
  });
}

/* -------------------------------------------------------------------------- */
/* Generic page nodes                                                          */
/* -------------------------------------------------------------------------- */

/**
 * WebPage and its specialised subtypes (AboutPage, ContactPage, CollectionPage…).
 *
 * @param {Object} opts
 * @param {string} [opts.type="WebPage"]
 * @param {string} opts.path
 * @param {string} opts.name
 * @param {string} [opts.description]
 * @param {string} [opts.primaryImage]
 * @param {object} [opts.about]            e.g. { "@id": ids.organization }
 * @param {object} [opts.mainEntity]
 */
export function webPageSchema({
  type = "WebPage",
  path = "/",
  name,
  description,
  primaryImage,
  about,
  mainEntity,
}) {
  const url = absoluteUrl(path);
  return clean({
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": ids.website },
    inLanguage: seoConfig.locale,
    publisher: { "@id": ids.organization },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    primaryImageOfPage: primaryImage
      ? { "@type": "ImageObject", url: absoluteUrl(primaryImage) }
      : undefined,
    about,
    mainEntity,
  });
}

/**
 * CollectionPage with an embedded ItemList — used for listing routes
 * (projects, news, blogs index).
 *
 * @param {Object} opts
 * @param {string} opts.path
 * @param {string} opts.name
 * @param {string} [opts.description]
 * @param {Array<{name:string,url:string,image?:string}>} [opts.items]
 */
export function collectionPageSchema({ path, name, description, items = [] }) {
  const url = absoluteUrl(path);
  return clean({
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": ids.website },
    inLanguage: seoConfig.locale,
    publisher: { "@id": ids.organization },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    mainEntity: items.length
      ? {
          "@type": "ItemList",
          numberOfItems: items.length,
          itemListElement: items.map((it, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: it.name,
            url: it.url,
            image: it.image ? absoluteUrl(it.image) : undefined,
          })),
        }
      : undefined,
  });
}

/* -------------------------------------------------------------------------- */
/* Service                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * @param {Object} opts
 * @param {string} opts.name
 * @param {string} [opts.description]
 * @param {string} [opts.serviceType]
 * @param {string} [opts.path="/services"]
 * @param {string} [opts.image]
 */
export function serviceSchema({
  name,
  description,
  serviceType,
  path = "/services",
  image,
}) {
  return clean({
    "@type": "Service",
    name,
    serviceType: serviceType || name,
    description,
    provider: { "@id": ids.organization },
    areaServed: seoConfig.areaServed,
    image: image ? absoluteUrl(image) : undefined,
    url: absoluteUrl(path),
  });
}

/* -------------------------------------------------------------------------- */
/* Blog / Article                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Blog collection node for the /blogs index.
 *
 * @param {Object} opts
 * @param {string} [opts.path="/blogs"]
 * @param {string} [opts.description]
 * @param {Array<{slug:string,title:string,description?:string,img?:string}>} [opts.posts]
 */
export function blogSchema({ path = "/blogs", description, posts = [] }) {
  const url = absoluteUrl(path);
  return clean({
    "@type": "Blog",
    "@id": `${url}#blog`,
    url,
    name: `${seoConfig.name} Blog`,
    description,
    publisher: { "@id": ids.organization },
    inLanguage: seoConfig.locale,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      url: absoluteUrl(`/blogs/${p.slug}`),
      image: p.img ? absoluteUrl(p.img) : undefined,
    })),
  });
}

/**
 * Article / BlogPosting / NewsArticle detail node.
 *
 * @param {Object} opts
 * @param {string} [opts.type="Article"]
 * @param {string} opts.path
 * @param {string} opts.headline
 * @param {string} [opts.description]
 * @param {string} [opts.image]
 * @param {string} [opts.authorName]
 * @param {string} [opts.datePublished]   ISO 8601
 * @param {string} [opts.dateModified]    ISO 8601
 * @param {string} [opts.body]
 * @param {object} [opts.isPartOf]        e.g. { "@id": ".../blogs#blog" }
 */
export function articleSchema({
  type = "Article",
  path,
  headline,
  description,
  image,
  authorName,
  datePublished,
  dateModified,
  body,
  isPartOf,
}) {
  const url = absoluteUrl(path);
  return clean({
    "@type": type,
    "@id": `${url}#article`,
    headline,
    description,
    image: image ? absoluteUrl(image) : undefined,
    author: authorName
      ? { "@type": "Person", name: authorName }
      : { "@id": ids.organization },
    publisher: { "@id": ids.organization },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${url}#webpage`, url },
    isPartOf,
    articleBody: body,
    inLanguage: seoConfig.locale,
    url,
  });
}

/* -------------------------------------------------------------------------- */
/* Project (portfolio case study)                                              */
/* -------------------------------------------------------------------------- */

/**
 * A delivered design-and-build project, modelled as a CreativeWork created by
 * the organization (Schema.org has no dedicated construction-project type).
 *
 * @param {Object} opts
 * @param {string} opts.slug
 * @param {object} opts.project   Entry from projectsData.projectDetail.
 */
export function projectSchema({ slug, project }) {
  const url = absoluteUrl(`/projects/${slug}`);
  const d = project?.details || {};
  const name = project?.hero?.title || "Project";
  return clean({
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    name,
    headline: name,
    description: d.clientVision || project?.challenges,
    image: project?.hero?.image ? absoluteUrl(project.hero.image) : undefined,
    url,
    creator: { "@id": ids.organization },
    provider: { "@id": ids.organization },
    locationCreated: d.location
      ? { "@type": "Place", name: d.location }
      : undefined,
    about: d.category,
    keywords:
      [d.category, d.location, d.client].filter(Boolean).join(", ") || undefined,
    isPartOf: { "@id": `${absoluteUrl("/projects")}#webpage` },
  });
}

/* -------------------------------------------------------------------------- */
/* Reusable, not currently wired (no such content yet) — kept for scalability  */
/* -------------------------------------------------------------------------- */

/**
 * FAQPage — drop on any future page that renders a Q&A list.
 *
 * @param {Object} opts
 * @param {string} [opts.path="/"]
 * @param {Array<{question:string,answer:string}>} opts.faqs
 */
export function faqPageSchema({ path = "/", faqs = [] }) {
  const url = absoluteUrl(path);
  return clean({
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    isPartOf: { "@id": ids.website },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  });
}

/**
 * SearchResultsPage — for a future on-site search route (e.g. /search?q=).
 *
 * @param {Object} opts
 * @param {string} [opts.path="/search"]
 * @param {string} [opts.query]
 */
export function searchResultsPageSchema({ path = "/search", query }) {
  const url = absoluteUrl(path);
  return clean({
    "@type": "SearchResultsPage",
    "@id": `${url}#search`,
    url,
    name: query ? `Search results for “${query}”` : "Search results",
    isPartOf: { "@id": ids.website },
    inLanguage: seoConfig.locale,
  });
}
