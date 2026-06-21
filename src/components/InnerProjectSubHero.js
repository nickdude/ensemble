"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import projectsData from "@/data/home/projectsData";

export default function   InnerProjectSubHero({slug}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const projectData = projectsData.projectDetail[slug];

  useEffect(() => setMounted(true), []);

  if (!mounted || !projectData) return null;

    return (
           <section className={`px-4 md:px-16 w-full ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
              <div className="relative w-full h-[75vh] rounded-xl overflow-hidden">
                
                {/* Background Image */}
                <Image
                  src={projectData.hero.image}
                  alt="Service Hero Image"
                  fill
                  className="object-cover"
                  priority
                />
        
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/30 to-transparent" />
        
                {/* Content */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10">
                    <h1 className="text-[32px] md:text-[56px] font-poppins font-semibold">
                        {projectData.hero.title}, {projectData.hero.location}
                    </h1>
                </div>

        
              </div>
            </section>
    );
    }   