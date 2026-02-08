"use client";

import FourPointSection from "@/components/FourPointSection";
import OurProjects from "@/components/OurProjects";
import OurServiceHero from "@/components/OurServiceHero";
import servicesData from "@/data/home/servicesData";

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
      </>
    );
}   