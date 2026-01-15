"use client";

import DesignAndBuild from "@/components/DesignAndBuild";
import Efficiency from "@/components/Efficiency";
import Initiative from "@/components/Initiative";
import JourneyTo2029 from "@/components/JourneyTo2029";
import OurProjects from "@/components/OurProjects";
import SustainabilityHero from "@/components/SustainabilityHero";

export default function Sustainability() {
  return (
    <main className="bg-white text-black">
        <SustainabilityHero/>
        <DesignAndBuild/>
        <JourneyTo2029/>
        <Initiative/>
        <Efficiency/>
        <OurProjects/>
    </main>
  );
}   