import { blogsData } from "@/data/home/blogsData";
import { buildMetadata } from "@/lib/seo";
import { blogDescription } from "@/lib/seo/descriptions";

// The blog detail page renders blogsData.blogDetail[slug]. Every public blog
// slug has its own entry and a self-referencing canonical URL.
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
      title: "Blog",
      description:
        "Ideas, trends and insights on architecture, interior design and sustainable building from Ensemble Infrastructure.",
      path: `/blog/${slug}`,
      canonicalPath: "/blog/blog1",
      index: false,
    });
  }

  return buildMetadata({
    title: post.title,
    description,
    path: `/blog/${slug}`,
  });
}

export default function BlogDetailLayout({ children }) {
  return children;
}
