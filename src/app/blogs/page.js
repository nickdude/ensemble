"use client";

import News from "@/components/News";
import NewsHero from "@/components/NewsHero";
import OurBlogs from "@/components/OurBlogs";
import OurProjects from "@/components/OurProjects";
import { blogsData } from "@/data/home/blogsData";

export default function Blogs() {
    const { blogsHero, blogsCards } = blogsData;
  return (
    <main className="">
       <NewsHero title={blogsHero.title} subtitle={blogsHero.subtitle} breakline={blogsHero.breakline}/>
       <OurBlogs blogsCards={blogsCards}/>
       <News/>
       <OurProjects/>
    </main>
  );
}