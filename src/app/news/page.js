"use client";

import NewsGallery from "@/components/NewsGallary";
import NewsHero from "@/components/NewsHero";
import OurInsights from "@/components/OurInsights";
import OurProjects from "@/components/OurProjects";

export default function News() {
  return (
   <>
   <NewsHero/>
   <NewsGallery/>
   <OurProjects/>
   <OurInsights/>
   </>
  );
}