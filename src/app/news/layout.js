import { buildMetadata } from "@/lib/seo";
import { staticDescription } from "@/lib/seo/descriptions";

// Applies to the /news listing. The /news/[slug] pages override this with
// their own dynamic metadata.
// Meta description is the manually-maintained one from lib/seo/descriptions.
export const metadata = buildMetadata({
  title: "News & Media",
  description: staticDescription("/news"),
  path: "/news",
});

export default function NewsLayout({ children }) {
  return children;
}
