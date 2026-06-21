import { buildMetadata } from "@/lib/seo";
import { staticDescription } from "@/lib/seo/descriptions";

// Applies to the /blogs listing. The /blogs/[slug] pages override this with
// their own dynamic metadata.
// Meta description is the manually-maintained one from lib/seo/descriptions.
export const metadata = buildMetadata({
  title: "Blogs",
  description: staticDescription("/blogs"),
  path: "/blogs",
});

export default function BlogsLayout({ children }) {
  return children;
}
