import { buildMetadata } from "@/lib/seo";
import { staticDescription } from "@/lib/seo/descriptions";

// Server-component layout: attaches per-page metadata (the page itself is a
// Client Component and cannot export metadata). Renders children unchanged.
// Meta description is the manually-maintained one from lib/seo/descriptions.
export const metadata = buildMetadata({
  title: "About Us",
  description: staticDescription("/aboutus"),
  path: "/aboutus",
});

export default function AboutUsLayout({ children }) {
  return children;
}
