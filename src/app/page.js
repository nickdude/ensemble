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
import News from "@/components/News";
import EffectOne from "@/components/EffectOne";
import EffectTwo from "@/components/EffectTwo";


export default function Home() {
  return (
    <>
      <SubHero/>
      <CountSection/>
      <BlueprintsSection/>
      <LogoSection/>
      <OurServices/>
      <EffectOne/>
      <EffectTwo/>
      {/* <News/> */}
      {/* <ClientSays/> */}
      {/* <OurInsights/> */}
    </>
  );
}
