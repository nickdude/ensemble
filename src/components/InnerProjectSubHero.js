import Image from "next/image";
import projectsData from "@/data/home/projectsData";

export default function InnerProjectSubHero({ slug }) {
  const projectData = projectsData.projectDetail[slug];
  if (!projectData) return null;

  return (
    <section className="px-4 md:px-16 w-full">
      <div className="relative w-full h-[75vh] rounded-xl overflow-hidden">
        <Image
          src={projectData.hero.image}
          alt={`${projectData.hero.title} project hero`}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0) 60%)",
          }}
        />
        <div className="absolute bottom-6 left-6 right-4 text-white z-10 md:bottom-10 md:left-10">
          <h1 className="text-[32px] md:text-[56px] font-poppins font-semibold leading-tight">
            {projectData.hero.title}, {projectData.hero.location}
          </h1>
        </div>
      </div>
    </section>
  );
}
