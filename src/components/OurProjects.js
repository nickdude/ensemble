"use client";

import Button from "./Button";
import ProjectCardSample from "./ProjectCardSample";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function OurProjects({}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className={`w-full py-20 md:py-40 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className="flex flex-col md:flex-row items-center gap-1 overflow-x-auto scrollbar-hide">
                    <div className="w-full md:w-80 flex flex-col gap-3 md:gap-6 items-center md:items-start md:mx-16 mb-10 md:mb-0">
                        <h1 className="font-poppins font-medium text-[28px] md:w-80 md:text-[64px] leading-[68px]">Some of Our Projects</h1>
                        <p className="font-avenir font-light text-center w-70 md:w-80 md:text-left text-[16px] md:text-lg text-gray-600 leading-[25px]">Stay updated with our latest projects, press features, and industry insights.</p>
                        <Button label="VIEW ALL " theme="light"/>
                    </div>
                    <div className="flex md:items-center md:relative md:h-[520px] gap-3">
                        <ProjectCardSample
                                  image="/assets/blueprints/blueprint3.png"
                                  title="Bridge+"
                                  location="Chennai"
                                />
                        <ProjectCardSample
                                  image="/assets/blueprints/blueprint3.png"
                                  title="Bridge+"
                                  location="Chennai"
                                />
                        <ProjectCardSample
                                  image="/assets/blueprints/blueprint3.png"
                                  title="Bridge+"
                                  location="Chennai"
                                />
                        <ProjectCardSample
                                  image="/assets/blueprints/blueprint3.png"
                                  title="Bridge+"
                                  location="Chennai"
                                />
                    </div>
                    
        </div>
    </section>
  );
}