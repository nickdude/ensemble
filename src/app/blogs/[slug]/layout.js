import { blogsData } from "@/data/home/blogsData";
import { buildMetadata } from "@/lib/seo";
import { blogDescription } from "@/lib/seo/descriptions";

// The blog detail page renders blogsData.blogDetail[slug], falling back to
// "blog1" for any unknown slug. Slugs without their own entry (e.g. blog3..blog8)
// therefore serve duplicate content, so we mark them noindex and point their
// canonical at the primary /blogs/blog1 URL to consolidate ranking signals.
// Slugs with real content get a self-referencing canonical and are indexable.
//
// Indexable posts use a UNIQUE, manually-written meta description from
// lib/seo/descriptions (never auto-derived from the post body). The noindex
// fallback below keeps a generic description since it is not indexed.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogsData.blogDetail?.[slug];
  const description = blogDescription(slug);

  if (!post || !description) {
    return buildMetadata({
      title: "Blogs",
      description:
        "Ideas, trends and insights on architecture, interior design and sustainable building from Ensemble Infrastructure.",
      path: `/blogs/${slug}`,
      canonicalPath: "/blogs/blog1",
      index: false,
    });
  }

  return buildMetadata({
    title: post.title,
    description,
    path: `/blogs/${slug}`,
  });
}

export default function BlogDetailLayout({ children }) {
  return children;
}
