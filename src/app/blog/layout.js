import { buildMetadata } from "@/lib/seo";
import { staticDescription } from "@/lib/seo/descriptions";

// Applies to the /blog listing. The /blog/[slug] pages override this with
// their own dynamic metadata.
// Meta description is the manually-maintained one from lib/seo/descriptions.
export const metadata = buildMetadata({
  title: "Blog",
  description: staticDescription("/blog"),
  path: "/blog",
});

export default function BlogLayout({ children }) {
  return children;
}
