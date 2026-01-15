import Image from "next/image";
import Button from "./Button";
import ProjectHoverCard from "./ProjectHoverCard";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
// import SplashCard from "./SplashCard";

const projects = [
  {
    title: "Bridge+",
    location: "Chennai",
    image: "/images/bridge.jpg",
    large: true,
  },
  {
    title: "Canon",
    location: "Mumbai",
    image: "/images/canon.jpg",
  },
  {
    title: "Cadila Healthcare LTD",
    location: "Ahmedabad",
    image: "/images/cadila.jpg",
  },
  {
    title: "RPSG",
    location: "Kolkata",
    image: "/images/rpsg.jpg",
  },
];

export default function BlueprintsSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className={`w-full flex flex-col ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <div className="flex flex-col gap-[1px]">
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-[1px]">
          <div className="px-16 pt-20">
            <h1 className="font-poppins font-medium text-6xl leading-[57px] tracking-normal">Our <br/>Blueprints</h1>
          </div>
          <div className="flex flex-col items-start justify-end px-16 py-20 gap-10">
            <h1 className="font-avenir font-light text-lg">Each project reflects our passion for design and attention to detail. Discover how we bring visionary spaces to life through creativity and precision.</h1>  
            <Button label="KNOW MORE" theme="light" />
          </div>
        {/* <SplashCard/> */}

          <ProjectHoverCard
            title="Bridge+"
            image="/assets/blueprints/blueprint3.png"
            city="Chennai"
            location="Chennai"
            area="1,00,000 sqft"
            service="General Contracting"
          />
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-[1px]">
          {/* <SplashCard/>
          <SplashCard/>
          <SplashCard/> */}
         <ProjectHoverCard
            title="Bridge+"
            image="/assets/blueprints/blueprint3.png"
            city="Chennai"
            location="Chennai"
            area="1,00,000 sqft"
            service="General Contracting"
          />
          <ProjectHoverCard
            title="Bridge+"
            image="/assets/blueprints/blueprint3.png"
            city="Chennai"
            location="Chennai"
            area="1,00,000 sqft"
            service="General Contracting"
          />
          <ProjectHoverCard
            title="Bridge+"
            image="/assets/blueprints/blueprint3.png"
            city="Chennai"
            location="Chennai"
            area="1,00,000 sqft"
            service="General Contracting"
          />
        </div>
      </div>
         
      
    </section>
  );
}