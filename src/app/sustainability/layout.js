import { buildMetadata } from "@/lib/seo";
import { staticDescription } from "@/lib/seo/descriptions";

// Meta description is the manually-maintained one from lib/seo/descriptions.
export const metadata = buildMetadata({
  title: "Sustainability",
  description: staticDescription("/sustainability"),
  path: "/sustainability",
});

export default function SustainabilityLayout({ children }) {
  return children;
}
