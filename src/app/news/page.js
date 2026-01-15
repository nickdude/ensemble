"use client";

import NewsGallery from "@/components/NewsGallary";
import NewsHero from "@/components/NewsHero";
import OurInsights from "@/components/OurInsights";
import OurProjects from "@/components/OurProjects";

export default function News() {
    const news = {
        title: "Changing the Story,",
        subtitle: "Media",
        breakline: "Defining the Future",
    }
  return (
   <>
   <NewsHero title={news.title} subtitle={news.subtitle} breakline={news.breakline}/>
   <NewsGallery/>
   <OurProjects/>
   <OurInsights/>
   </>
  );
}