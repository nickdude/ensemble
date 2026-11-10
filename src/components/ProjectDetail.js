import SubtitleTitle from "./SubtitleTitle";
import TitleSubtitle from "./TitleSubtitle";
import projectsData from "@/data/home/projectsData";

export default function ProjectDetail({ slug }) {
  const projectData = projectsData.projectDetail[slug];
  const projectService = projectsData.projectGallery?.projects?.find(
    (project) => project.slug === slug
  )?.service;

  if (!projectData) return null;
  return (
    <section className="w-full px-4 md:px-16 py-20 border-b border-gray-300">
      {/* Desktop layout */}
      <div className="hidden md:block space-y-16 w-full">
        <div className="grid grid-cols-12 gap-16 items-start">
          <div className="col-span-4">
            <SubtitleTitle subtitle="Area" title={projectData.details.area} />
          </div>
          <div className="col-span-8">
            <SubtitleTitle subtitle="Client" title={projectData.details.client} />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-16 items-start">
          <div className="col-span-4">
            <SubtitleTitle subtitle="Category" title={projectData.details.category} />
          </div>
          <div className="col-span-8">
            <TitleSubtitle title="Client's Vision:" subtitle={projectData.details.clientVision} />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-16 items-start">
          <div className="col-span-4">
            <SubtitleTitle subtitle="Service" title={projectService} />
          </div>
          <div className="col-span-8">
            <TitleSubtitle title="The Problem:" subtitle={projectData.details.problem} />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-16 items-start">
          <div className="col-span-4">
            <SubtitleTitle subtitle="Location" title={projectData.details.location} />
          </div>
          <div className="col-span-8">
            <TitleSubtitle title="Our Solution:" subtitle={projectData.details.solution} />
          </div>
        </div>
      </div>

      {/* Mobile layout — uses real project data */}
      <div className="block md:hidden space-y-16 w-full">
        <div className="grid grid-cols-6 gap-16 items-start">
          <div className="col-span-3">
            <SubtitleTitle subtitle="Client" title={projectData.details.client} />
          </div>
          <div className="col-span-3">
            <SubtitleTitle subtitle="Area" title={projectData.details.area} />
          </div>
        </div>

        <div className="grid grid-cols-6 gap-16 items-start">
          <div className="col-span-3">
            <SubtitleTitle subtitle="Category" title={projectData.details.category} />
          </div>
          <div className="col-span-3">
            <SubtitleTitle subtitle="Service" title={projectService} />
          </div>
        </div>

        <div className="grid grid-cols-6 gap-16 items-start">
          <div className="col-span-6">
            <SubtitleTitle subtitle="Location" title={projectData.details.location} />
          </div>
        </div>

        <div className="grid grid-cols-6 gap-16 items-start">
          <div className="col-span-6">
            <TitleSubtitle title="Client's Vision:" subtitle={projectData.details.clientVision} />
          </div>
          <div className="col-span-6">
            <TitleSubtitle title="The Problem:" subtitle={projectData.details.problem} />
          </div>
          <div className="col-span-6">
            <TitleSubtitle title="Our Solution:" subtitle={projectData.details.solution} />
          </div>
        </div>
      </div>
    </section>
  );
}
