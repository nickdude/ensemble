"use client";

import FourPointSection from "@/components/FourPointSection";
import OurProjects from "@/components/OurProjects";
import OurServiceHero from "@/components/OurServiceHero";
import FAQ from "@/components/FAQ";
import servicesData from "@/data/home/servicesData";
import faqData from "@/data/home/faqData";

export default function Services() {
        
    return (
      <>
        <OurServiceHero/>
        <FourPointSection 
           details={servicesData?.design}/>
        <FourPointSection 
           details={servicesData?.general}/>
        <FourPointSection 
           details={servicesData?.build}/>
        <FourPointSection 
           details={servicesData?.base}/>
        <OurProjects/>
        <FAQ details={faqData.services} />
      </>
    );
}   