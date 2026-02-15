"use client";

import BlogHero from "@/components/BlogHero";
import News from "@/components/News";
import OurBlogs from "@/components/OurBlogs";
import OurProjects from "@/components/OurProjects";
import { blogsData } from "@/data/home/blogsData";
import NewsMobile from "@/components/NewsMobile";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Blogs() {
    const { blogsHero, blogsCards } = blogsData;
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
  return (
    <main className="">
       <BlogHero title={blogsHero.title} subtitle={blogsHero.subtitle} breakline={blogsHero.breakline}/>
       <OurBlogs blogsCards={blogsCards}/>
        <div
            className={`relative z-20 w-screen max-w-screen overflow-x-hidden
           ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} py-10 md:py-20`}
           >
           <div className="hidden md:block">
                <News theme={theme} />
            </div>
            <div className="md:hidden pl-3">
              <NewsMobile />
            </div>
        </div>
       <OurProjects/>
    </main>
  );
}