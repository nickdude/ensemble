"use client";

import NewsGallery from "@/components/NewsGallary";
import NewsHero from "@/components/NewsHero";
import OurInsights from "@/components/OurInsights";
import OurProjects from "@/components/OurProjects";
import FAQ from "@/components/FAQ";
import faqData from "@/data/home/faqData";

export default function News() {
  return (
   <>
   <NewsHero/>
   <NewsGallery/>
   <OurProjects/>
   <OurInsights/>
   <FAQ details={faqData.news} />
   </>
  );
}