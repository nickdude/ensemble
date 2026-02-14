"use client";

import BlogHero from "@/components/BlogHero";
import News from "@/components/News";
import OurBlogs from "@/components/OurBlogs";
import OurProjects from "@/components/OurProjects";
import { blogsData } from "@/data/home/blogsData";

export default function Blogs() {
    const { blogsHero, blogsCards } = blogsData;
  return (
    <main className="">
       <BlogHero title={blogsHero.title} subtitle={blogsHero.subtitle} breakline={blogsHero.breakline}/>
       <OurBlogs blogsCards={blogsCards}/>
       <News/>
       <OurProjects/>
    </main>
  );
}