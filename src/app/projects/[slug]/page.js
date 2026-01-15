import InnerProjectSubHero from "@/components/InnerProjectSubHero";
import ProjectCaseGallery from "@/components/ProjectCaseGallery";
import ProjectDetail from "@/components/ProjectDetail";

export const metadata = {
  title: "Project Details | Ensemble",
};

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