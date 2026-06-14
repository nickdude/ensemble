import InnerProjectSubHero from "@/components/InnerProjectSubHero";
import ProjectCaseGallery from "@/components/ProjectCaseGallery";
import ProjectDetail from "@/components/ProjectDetail";
import projectsData from "@/data/home/projectsData";
import { buildMetadata } from "@/lib/seo";

// Dynamic, self-referencing canonical per project. Unknown slugs (no real
// content) are set noindex and canonicalised onto the /projects listing to
// avoid thin/duplicate pages being indexed.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.projectDetail?.[slug];

  if (!project) {
    return buildMetadata({
      title: "Projects",
      description:
        "Explore Ensemble Infrastructure's portfolio of design and build projects.",
      path: `/projects/${slug}`,
      canonicalPath: "/projects",
      index: false,
    });
  }

  const name = project.hero?.title || "Project";
  const location = project.details?.location;
  const category = project.details?.category;
  return buildMetadata({
    title: location ? `${name} — ${location}` : name,
    description:
      project.details?.clientVision ||
      `${name}${category ? `, ${category}` : ""} — a design and build project delivered by Ensemble Infrastructure.`,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectInnerPage({ params }) {
  const { slug } = await params;
  return (
    <>
        <InnerProjectSubHero  slug={slug}/>
        <ProjectDetail/>
        <ProjectCaseGallery/>
    </>
  );
}