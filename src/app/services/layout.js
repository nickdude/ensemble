import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Services",
  description:
    "Design, general contracting, build and base-build services. Ensemble Infrastructure delivers end-to-end design and build solutions for commercial spaces.",
  path: "/services",
});

export default function ServicesLayout({ children }) {
  return children;
}
