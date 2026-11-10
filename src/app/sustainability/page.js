import DesignAndBuild from "@/components/DesignAndBuild";
import Efficiency from "@/components/Efficiency";
import Initiative from "@/components/Initiative";
import JourneyTo2029 from "@/components/JourneyTo2029";
import OurProjects from "@/components/OurProjects";
import SustainabilityHero from "@/components/SustainabilityHero";
import FAQ from "@/components/FAQ";
import faqData from "@/data/home/faqData";

export default function Sustainability() {
  return (
    <main>
      <SustainabilityHero />
      <DesignAndBuild />
      <JourneyTo2029 />
      <Initiative />
      <Efficiency />
      <OurProjects />
      <FAQ details={faqData.sustainability} />
    </main>
  );
}
