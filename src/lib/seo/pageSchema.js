// Route → structured-data resolver.
//
// Given the current pathname, returns the page-specific schema nodes plus a
// correctly-labelled BreadcrumbList. This is the single place that decides
// "what kind of page is this", so every route gets exactly one set of schemas
// with no duplication and no leakage between listing and detail routes.
import { seoConfig } from "./config";
import { absoluteUrl, ids, parseDate } from "./structuredData";
import {
  webPageSchema,
  collectionPageSchema,
  serviceSchema,
  blogSchema,
  articleSchema,
  projectSchema,
} from "./schemas";
import { breadcrumbListSchema } from "./breadcrumb";

import servicesData from "@/data/home/servicesData";
import { blogsData } from "@/data/home/blogsData";
import newsData from "@/data/home/newsData";
import projectsData from "@/data/home/projectsData";

/** Normalise to a clean pathname: strip query/hash and trailing slash. */
function normalizePath(raw) {
  if (!raw) return "/";
  let p = raw.split("?")[0].split("#")[0];
  if (p.length > 1) p = p.replace(/\/+$/, "");
  return p || "/";
}

/** Services index → one Service node per offering in the services data. */
function serviceNodes() {
  const join = (s) => [s?.title, s?.break].filter(Boolean).join(" ").trim();
  return ["design", "general", "build", "base"]
    .map((key) => servicesData?.[key])
    .filter(Boolean)
    .map((s) =>
      serviceSchema({
        name: join(s),
        serviceType: join(s),
        description: s.description,
        image: s.img,
      })
    );
}

/**
 * @param {string} rawPath
 * @returns {{ pageSchemas: object[], breadcrumb: object }}
 */
export function resolvePageStructuredData(rawPath) {
  const pathname = normalizePath(rawPath);
  const seg = pathname.split("/").filter(Boolean);
  const labelOverrides = {};
  const pageSchemas = [];

  if (pathname === "/") {
    pageSchemas.push(
      webPageSchema({
        type: "WebPage",
        path: "/",
        name: "Ensemble Infrastructure | Design & Build Construction",
        description: seoConfig.description,
        about: { "@id": ids.organization },
        mainEntity: { "@id": ids.organization },
      })
    );
  } else if (pathname === "/aboutus") {
    pageSchemas.push(
      webPageSchema({
        type: "AboutPage",
        path: pathname,
        name: "About Us",
        description:
          "Mumbai-based since 2001, Ensemble Infrastructure delivers design and build workplace solutions that create future-ready spaces for thriving businesses.",
        about: { "@id": ids.organization },
        mainEntity: { "@id": ids.organization },
      })
    );
  } else if (pathname === "/contactus") {
    pageSchemas.push(
      webPageSchema({
        type: "ContactPage",
        path: pathname,
        name: "Contact Us",
        description:
          "Get in touch with Ensemble Infrastructure to discuss your design and build workplace project.",
        about: { "@id": ids.organization },
        mainEntity: { "@id": ids.organization },
      })
    );
  } else if (pathname === "/services") {
    pageSchemas.push(
      webPageSchema({
        type: "WebPage",
        path: pathname,
        name: "Our Services",
        description:
          "Design, general contracting, build and base-build services — end-to-end design and build solutions for commercial spaces.",
      })
    );
    pageSchemas.push(...serviceNodes());
  } else if (pathname === "/sustainability") {
    pageSchemas.push(
      webPageSchema({
        type: "WebPage",
        path: pathname,
        name: "Sustainability",
        description:
          "Our commitment to sustainable design and build — energy efficiency, responsible initiatives and our journey to 2029.",
      })
    );
  } else if (seg[0] === "projects") {
    if (seg.length === 1) {
      const list = projectsData?.projectGallery?.projects || [];
      pageSchemas.push(
        collectionPageSchema({
          path: pathname,
          name: "Our Projects",
          description:
            "Explore Ensemble Infrastructure's portfolio of design and build projects delivering productivity-driven workplaces across India.",
          items: list
            .filter((p) => p.slug)
            .map((p) => ({
              name: p.title,
              url: absoluteUrl(`/projects/${p.slug}`),
              image: p.image,
            })),
        })
      );
    } else {
      const slug = seg[1];
      const project = projectsData?.projectDetail?.[slug];
      if (project) {
        labelOverrides[slug] = project.hero?.title || slug;
        pageSchemas.push(
          webPageSchema({
            type: "WebPage",
            path: pathname,
            name: project.hero?.title,
            description: project.details?.clientVision,
            primaryImage: project.hero?.image,
          })
        );
        pageSchemas.push(projectSchema({ slug, project }));
      }
    }
  } else if (seg[0] === "blogs") {
    if (seg.length === 1) {
      const indexable = (blogsData?.blogsCards || []).filter(
        (c) => blogsData?.blogDetail?.[c.slug]
      );
      pageSchemas.push(
        blogSchema({
          path: pathname,
          description:
            "Ideas, trends and insights on architecture, interior design and sustainable building from the Ensemble Infrastructure team.",
          posts: indexable,
        })
      );
    } else {
      const slug = seg[1];
      const post = blogsData?.blogDetail?.[slug];
      if (post) {
        labelOverrides[slug] = post.title;
        pageSchemas.push(
          articleSchema({
            type: "BlogPosting",
            path: pathname,
            headline: post.title,
            description: post.subtitle,
            image: post.mainImage,
            authorName: post.author,
            datePublished: parseDate(post.date),
            body: bodyOf(post.sections),
            isPartOf: { "@id": `${absoluteUrl("/blogs")}#blog` },
          })
        );
      }
    }
  } else if (seg[0] === "news") {
    if (seg.length === 1) {
      const list = newsData?.newsGallery?.newsItems || [];
      pageSchemas.push(
        collectionPageSchema({
          path: pathname,
          name: "News & Media",
          description:
            "Ensemble Infrastructure in the news — press coverage, media features and announcements.",
          items: list.map((n) => ({
            name: n.title || n.slug,
            url: n.link || absoluteUrl(`/news/${encodeURIComponent(n.slug)}`),
            image: n.image,
          })),
        })
      );
    } else {
      const slug = decodeURIComponent(seg[1]);
      const article = newsData?.newsDetail?.[slug];
      if (article) {
        labelOverrides[seg[1]] = article.title;
        labelOverrides[slug] = article.title;
        pageSchemas.push(
          articleSchema({
            type: "Article",
            path: pathname,
            headline: article.title,
            description: article.subtitle,
            image: article.mainImage,
            authorName: article.author,
            datePublished: parseDate(article.date),
            body: bodyOf(article.sections),
          })
        );
      }
    }
  } else {
    // Unknown route — still emit a minimal, valid WebPage so coverage is total.
    pageSchemas.push(
      webPageSchema({ type: "WebPage", path: pathname, name: seoConfig.name })
    );
  }

  return {
    pageSchemas,
    breadcrumb: breadcrumbListSchema(pathname, labelOverrides),
  };
}
function bodyOf(sections) {
  return (
    (sections || [])
      .map((s) => s.para)
      .filter(Boolean)
      .join("\n\n") || undefined
  );
}
