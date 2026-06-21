import { buildMetadata } from "@/lib/seo";
import { staticDescription } from "@/lib/seo/descriptions";

// Meta description is the manually-maintained one from lib/seo/descriptions.
export const metadata = buildMetadata({
  title: "Our Services",
  description: staticDescription("/services"),
  path: "/services",
});

export default function ServicesLayout({ children }) {
  return children;
}
