import SplashHero from "@/components/SplashHero";
import CountSection from "@/components/CountSection";
import BlueprintsSection from "@/components/BlueprintsSection";
import SubHero from "@/components/SubHero";
import LogoSection from "@/components/LogoSection";
import OurServices from "@/components/OurServices";
import News from "@/components/News";
import EffectTwo from "@/components/EffectTwo";
import NewsMobile from "@/components/NewsMobile";
import FAQ from "@/components/FAQ";
import faqData from "@/data/home/faqData";

export default function Home() {
  return (
    <>
      <SplashHero />
      <SubHero />
      <CountSection />
      <BlueprintsSection />
      <LogoSection />
      <OurServices />
      <div className="relative z-20 overflow-x-hidden py-10 md:py-20">
        <div className="hidden md:block">
          <News />
        </div>
        <div className="md:hidden ml-4">
          <NewsMobile />
        </div>
      </div>
      <EffectTwo />
      <FAQ details={faqData.home} />
    </>
  );
}
