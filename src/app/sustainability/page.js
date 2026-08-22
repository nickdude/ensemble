"use client";

import DesignAndBuild from "@/components/DesignAndBuild";
import Efficiency from "@/components/Efficiency";
import Initiative from "@/components/Initiative";
import JourneyTo2029 from "@/components/JourneyTo2029";
import OurProjects from "@/components/OurProjects";
import SustainabilityHero from "@/components/SustainabilityHero";
import FAQ from "@/components/FAQ";
import faqData from "@/data/home/faqData";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Sustainability() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <main className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <SustainabilityHero theme={theme}/>
        <DesignAndBuild theme={theme}/>
        <JourneyTo2029 theme={theme}/>
        <Initiative theme={theme}/>
        <Efficiency theme={theme}/>
        <OurProjects theme={theme}/>
        <FAQ details={faqData.sustainability} />
    </main>
  );
}   