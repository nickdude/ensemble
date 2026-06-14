import newsData from "@/data/home/newsData";
import { buildMetadata } from "@/lib/seo";

// The news cards on /news link out to external publications, so internal
// /news/[slug] pages only render for slugs present in newsData.newsDetail.
// Real entries get a self-referencing canonical and are indexable; any other
// slug renders no content (DetailNews returns null), so it is marked noindex
// and canonicalised onto the /news listing to avoid empty/thin pages.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = newsData.newsDetail?.[slug];

  if (!article) {
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
    description: article.subtitle,
    path: `/news/${slug}`,
  });
}

export default function NewsDetailLayout({ children }) {
  return children;
}
