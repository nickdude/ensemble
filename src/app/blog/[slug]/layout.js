import { blogsData } from "@/data/home/blogsData";
import { buildMetadata } from "@/lib/seo";
import { blogDescription } from "@/lib/seo/descriptions";
import { permanentRedirect } from "next/navigation";

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
      canonicalPath: "/blog/esg-led-workplace-design-cost",
      index: false,
    });
  }

  return buildMetadata({
    title: post.title,
    description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogDetailLayout({ children, params }) {
  const { slug } = await params;
  const card = blogsData.blogsCards?.find((item) => item.slug === slug);
  if (card?.redirectTo) permanentRedirect(card.redirectTo);

  const currentPost = blogsData.blogsCards?.find((item) =>
    item.legacySlugs?.includes(slug)
  );
  if (currentPost?.slug) permanentRedirect(`/blog/${currentPost.slug}`);

  return children;
}
