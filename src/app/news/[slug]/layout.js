import newsData from "@/data/home/newsData";
import { buildMetadata } from "@/lib/seo";
import { newsDescription } from "@/lib/seo/descriptions";

// The news cards on /news link out to external publications, so internal
// /news/[slug] pages only render for slugs present in newsData.newsDetail.
// Real entries get a self-referencing canonical and are indexable; any other
// slug renders no content (DetailNews returns null), so it is marked noindex
// and canonicalised onto the /news listing to avoid empty/thin pages.
//
// Indexable items use a UNIQUE, manually-written meta description from
// lib/seo/descriptions (never auto-derived from the article body).
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = newsData.newsDetail?.[slug];
  const description = newsDescription(slug);

  if (!article || !description) {
    return buildMetadata({
      title: "News & Media",
      description:
        "Ensemble Infrastructure in the news — press coverage, media features and announcements.",
      path: `/news/${slug}`,
      canonicalPath: "/news",
      index: false,
    });
  }

  return buildMetadata({
    title: article.title,
    description,
    path: `/news/${slug}`,
  });
}

export default function NewsDetailLayout({ children }) {
  return children;
}
