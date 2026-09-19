"use client";

import DesignAndBuild from "@/components/DesignAndBuild";
import Efficiency from "@/components/Efficiency";
import Initiative from "@/components/Initiative";
import JourneyTo2029 from "@/components/JourneyTo2029";
import OurProjects from "@/components/OurProjects";
import PeopleCultureCTA from "@/components/PeopleCultureCTA";
import LifeAtEnsemble from "@/components/LifeAtEnsemble";
import SustainabilityHero from "@/components/SustainabilityHero";
import FAQ from "@/components/FAQ";
import faqData from "@/data/home/faqData";
import { peopleAndCultureData } from "@/data/home/peopleAndCultureData";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export default function PeopleAndCulture() {
  const { theme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) return null;
  return (
    <main className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <SustainabilityHero theme={theme} data={peopleAndCultureData} />
      <DesignAndBuild theme={theme} data={peopleAndCultureData} />
      <JourneyTo2029 theme={theme} data={peopleAndCultureData} />
      <Initiative theme={theme} data={peopleAndCultureData} />
      {/* <Efficiency theme={theme} data={peopleAndCultureData} /> */}
      <LifeAtEnsemble data={peopleAndCultureData} />
      <PeopleCultureCTA />
      <OurProjects theme={theme} />
      <FAQ details={faqData.peopleAndCulture} />
    </main>
  );
}