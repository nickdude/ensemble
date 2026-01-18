"use client";

import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ProjectGallery() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

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

        <ProjectCard
          image="/assets/projects/1.jpg"
          title="TCS"
          location="Pan India"
          slug="project-1"
        />

        <ProjectCard
          image="/assets/projects/2.jpg"
          title="Cairn Energy Office"
          location="Gurgaon"
          variant="wide"
          slug="project-2"
        />

        <ProjectCard
          image="/assets/projects/3.jpg"
          title="Cadila Healthcare Ltd."
          location="Vadodara"
          slug="project-3"
        />

        <ProjectCard
          image="/assets/projects/4.jpg"
          title="TCS"
          location="Pan India"
          slug="project-4"
        />

        <ProjectCard
          image="/assets/projects/5.jpg"
          title="WeWork"
          location="Mumbai"
          slug="project-5"
        />
        <ProjectCard
          image="/assets/projects/9.jpg"
          title="WeWork"
          location="Mumbai"
          slug="project-6"
        />
         <ProjectCard
          image="/assets/projects/9.jpg"
          title="WeWork"
          location="Mumbai"
          slug="project-7"
        />
         <ProjectCard
          image="/assets/projects/9.jpg"
          title="WeWork"
          location="Mumbai"
          slug="project-8"
        />
        

        <ProjectCard
          image="/assets/projects/6.jpg"
          title="Cairn Energy Office"
          location="Gurgaon"
          variant="wide"
          slug="project-9"
        />

        <ProjectCard
          image="/assets/projects/7.jpg"
          title="Cadila Healthcare Ltd."
          location="Vadodara"
          slug="project-10"
        />

        <ProjectCard
          image="/assets/projects/8.jpg"
          title="TCS"
          location="Pan India"
          slug="project-11"
        />
         <ProjectCard
          image="/assets/projects/9.jpg"
          title="WeWork"
          location="Mumbai"
          slug="project-12"
        />
         <ProjectCard
          image="/assets/projects/9.jpg"
          title="WeWork"
          location="Mumbai"
          slug="project-13"
        />
      

      </div>
    </section>
  );
}
