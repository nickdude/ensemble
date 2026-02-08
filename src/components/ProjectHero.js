"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import projectsData from "@/data/home/projectsData";

export default function ProjectHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const data = projectsData.projectHero;

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
    
  return (
    <section className={`w-full flex flex-col items-center justify-center py-20 px-4 md:px-16 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <p className="font-poppins font-normal text-[13px] md:text-lg text-center">{data.label}</p>
      <h1 className="font-poppins font-semibold text-[32px] md:text-[56px] text-center">{data.heading}</h1>
      <div className="h-[256px] w-full flex justify-center mt-10 md:mt-20">
        <Image src={data.image} alt="Project Hero Image" width={1200} height={600} className="rounded-lg object-cover"/>
      </div>
    </section>
    );
    }