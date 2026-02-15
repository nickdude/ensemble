"use client";

import News from "@/components/News";
import OurInsights from "@/components/OurInsights";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectHero from "@/components/ProjectHero";
import NewsMobile from "@/components/NewsMobile";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Projects() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
     <ProjectHero/>
     <ProjectGallery/>
      <div
        className={`relative z-20 w-screen max-w-screen overflow-x-hidden
        ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} py-10 md:py-20`}
        >
        <div className="hidden md:block">
          <News theme={theme} />
        </div>
        <div className="md:hidden">
          <NewsMobile />
        </div>
      </div>
     <OurInsights/>
    </>
    );
    }   
