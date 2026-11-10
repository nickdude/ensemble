import { blogsData } from "@/data/home/blogsData";
import { buildMetadata } from "@/lib/seo";
import { blogDescription } from "@/lib/seo/descriptions";
import { parseDate } from "@/lib/seo/structuredData";
import { permanentRedirect, notFound } from "next/navigation";

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
    image: post.mainImage || undefined,
    type: "article",
    publishedTime: parseDate(post.date),
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

  // Return 404 for slugs that have no blog detail entry at all.
  const post = blogsData.blogDetail?.[slug];
  if (!post) notFound();

  return children;
}
