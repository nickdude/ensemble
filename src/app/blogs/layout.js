import { buildMetadata } from "@/lib/seo";

// Applies to the /blogs listing. The /blogs/[slug] pages override this with
// their own dynamic metadata.
export const metadata = buildMetadata({
  title: "Blogs",
  description:
    "Ideas, trends and insights on architecture, interior design and sustainable building from the Ensemble Infrastructure team.",
  path: "/blogs",
});

export default function BlogsLayout({ children }) {
  return children;
}
