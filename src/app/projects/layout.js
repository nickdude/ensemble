import { buildMetadata } from "@/lib/seo";

// Applies to the /projects listing. The /projects/[slug] pages override this
// canonical and title with their own dynamic metadata.
export const metadata = buildMetadata({
  title: "Our Projects",
  description:
    "Explore Ensemble Infrastructure's portfolio of design and build projects delivering productivity-driven workplaces across India.",
  path: "/projects",
});

export default function ProjectsLayout({ children }) {
  return children;
}
