"use client";

import Button from "./Button";
import ProjectCardSample from "./ProjectCardSample";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import project from "@/data/home/projectsData";

export default function OurProjects({}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const data = project.projectGallery;

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className={`w-full py-20 md:py-40 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className="flex flex-col md:flex-row items-center gap-1">
                    <div className="w-full md:w-80 flex flex-col gap-3 md:gap-6 items-center md:items-start md:mx-16 mb-10 md:mb-0">
                        <h2 className="font-poppins font-medium text-[28px] md:w-80 md:text-[64px] leading-[68px]">{data.heading}</h2>
                        <p className="font-avenir font-light text-center w-70 md:w-80 md:text-left text-[16px] md:text-lg text-gray-600 leading-[25px]">{data.description}</p>
                        <Button label={data.buttonLabel} link={data.buttonLink}/>
                    </div>
                    <div className="flex overflow-x-auto scrollbar-hide md:items-center md:relative md:h-[520px] gap-3 w-full md:w-auto px-4 md:px-0">
                        {data.projects.map((project, index) => (
                          <div key={index} className="project-card-sample-scroll">
                            <ProjectCardSample
                              image={project.image}
                              title={project.title}
                              location={project.location}
                              slug={project.slug}
                              area={project.area}
                              service={project.service}
                              caseStudyLink={project.caseStudyLink}
                            />
                          </div>
                        ))}
                    </div>
                    
        </div>
    </section>
  );
}