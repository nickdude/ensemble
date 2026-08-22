'use client';

import CountSection from "@/components/CountSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BlueprintsSection from "@/components/BlueprintsSection";
import SubHero from "@/components/SubHero";
import LogoSection from "@/components/LogoSection";
import OurServices from "@/components/OurServices";
import OurInsights from "@/components/OurInsights";
import ClientSays from "@/components/ClientSays";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import News from "@/components/News";
import EffectOne from "@/components/EffectOne";
import EffectTwo from "@/components/EffectTwo";
import SplashHero from "@/components/SplashHero";
import NewsMobile from "@/components/NewsMobile";
import FAQ from "@/components/FAQ";
import faqData from "@/data/home/faqData";

export default function Home() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
  return (
    <>
      <SplashHero />
      <SubHero/>
      <CountSection/>
      <BlueprintsSection/>
      <LogoSection/>
      <OurServices/>
      <div
        className={`relative z-20 overflow-x-hidden
        ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} py-10 md:py-20`}
        >
          <div className="hidden md:block">
              <News theme={theme} />
          </div>
          <div className="md:hidden ml-4">
              <NewsMobile />
          </div>
      </div>
      <EffectTwo/>
      <FAQ details={faqData.home} />
    </>
  );
}
