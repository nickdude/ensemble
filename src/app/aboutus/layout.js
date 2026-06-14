import { buildMetadata } from "@/lib/seo";

// Server-component layout: attaches per-page metadata (the page itself is a
// Client Component and cannot export metadata). Renders children unchanged.
export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Mumbai-based since 2001, Ensemble Infrastructure delivers design and build workplace solutions that create future-ready spaces for thriving businesses.",
  path: "/aboutus",
});

export default function AboutUsLayout({ children }) {
  return children;
}
