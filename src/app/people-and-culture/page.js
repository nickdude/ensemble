import DesignAndBuild from "@/components/DesignAndBuild";
import Initiative from "@/components/Initiative";
import JourneyTo2029 from "@/components/JourneyTo2029";
import OurProjects from "@/components/OurProjects";
import PeopleCultureCTA from "@/components/PeopleCultureCTA";
import LifeAtEnsemble from "@/components/LifeAtEnsemble";
import SustainabilityHero from "@/components/SustainabilityHero";
import FAQ from "@/components/FAQ";
import faqData from "@/data/home/faqData";
import { peopleAndCultureData } from "@/data/home/peopleAndCultureData";

export default function PeopleAndCulture() {
  return (
    <main>
      <SustainabilityHero data={peopleAndCultureData} />
      <DesignAndBuild data={peopleAndCultureData} />
      <JourneyTo2029 data={peopleAndCultureData} compact />
      <Initiative data={peopleAndCultureData} />
      <LifeAtEnsemble data={peopleAndCultureData} />
      <PeopleCultureCTA />
      <OurProjects />
      <FAQ details={faqData.peopleAndCulture} />
    </main>
  );
}
