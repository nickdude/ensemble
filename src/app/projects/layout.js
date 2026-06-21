import { buildMetadata } from "@/lib/seo";
import { staticDescription } from "@/lib/seo/descriptions";

// Applies to the /projects listing. The /projects/[slug] pages override this
// canonical, title and description with their own dynamic metadata.
// Meta description is the manually-maintained one from lib/seo/descriptions.
export const metadata = buildMetadata({
  title: "Our Projects",
  description: staticDescription("/projects"),
  path: "/projects",
});

export default function ProjectsLayout({ children }) {
  return children;
}
