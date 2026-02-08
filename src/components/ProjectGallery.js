"use client";

import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import projectsData from "@/data/home/projectsData";

export default function ProjectGallery() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const data = projectsData.projectGallery;

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className={`w-full px-4 md:px-16 py-10 md:py-20 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>

      {/* Filters */}
      <div className="flex gap-8 mb-10 font-poppins font-medium text-[13px] md:text-lg">
        <button className="flex gap-2 items-center justify-center">Filter +</button>
        <button className="flex gap-2 items-center justify-center">Location <Image src="/assets/icons/down.svg" alt="Location" width={10} height={10} /></button>
        <button className="flex gap-2 items-center justify-center">Scope <Image src="/assets/icons/down.svg" alt="Scope" width={10} height={10} /></button>
        <button className="flex gap-2 items-center justify-center">Sector <Image src="/assets/icons/down.svg" alt="Sector" width={10} height={10} /></button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[240px]">
        {data.projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            location={project.location}
            slug={project.slug}
            variant={project.variant}
          />
        ))}
      </div>
    </section>
  );
}
