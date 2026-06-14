import { SITE_URL } from "@/lib/seo";
import projectsData from "@/data/home/projectsData";
import { blogsData } from "@/data/home/blogsData";

// Native Next.js sitemap. Served automatically at /sitemap.xml.
// New static routes are picked up by adding them to STATIC_ROUTES; new dynamic
// pages are generated from the same data the app renders from, so adding a
// project/blog entry with real content automatically extends the sitemap.
export default function sitemap() {
  const lastModified = new Date();

  // 1. Static, indexable pages.
  const STATIC_ROUTES = [
    { path: "/", changeFrequency: "monthly", priority: 1.0 },
    { path: "/aboutus", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services", changeFrequency: "monthly", priority: 0.8 },
    { path: "/sustainability", changeFrequency: "monthly", priority: 0.8 },
    { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
    { path: "/blogs", changeFrequency: "weekly", priority: 0.7 },
    { path: "/news", changeFrequency: "weekly", priority: 0.7 },
    { path: "/contactus", changeFrequency: "yearly", priority: 0.6 },
  ].map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // 2. Project detail pages — every slug in projectDetail has real content
  //    and is internally linked, so all are indexable.
  const projectRoutes = Object.keys(projectsData.projectDetail || {}).map(
    (slug) => ({
      url: `${SITE_URL}/projects/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  // 3. Blog detail pages — ONLY slugs that have a real blogDetail entry.
  //    blog3..blog8 fall back to blog1's content (duplicate) and are
  //    deliberately excluded here and marked noindex at the page level.
  const blogRoutes = Object.keys(blogsData.blogDetail || {}).map((slug) => ({
    url: `${SITE_URL}/blogs/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  // News detail pages are intentionally omitted: the news cards link to
  // external publications, so /news/[slug] pages are not part of the
  // public, internally-linked content graph.
  return [...STATIC_ROUTES, ...projectRoutes, ...blogRoutes];
}
