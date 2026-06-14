import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sustainability",
  description:
    "Our commitment to sustainable design and build — energy efficiency, responsible initiatives and our journey to 2029 at Ensemble Infrastructure.",
  path: "/sustainability",
});

export default function SustainabilityLayout({ children }) {
  return children;
}
