"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SubtitleTitle from "./SubtitleTitle";
import TitleSubtitle from "./TitleSubtitle";

export default function ProjectDetail() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <section className={`w-full px-4 md:px-16 py-20 border-b border-gray-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="hidden md:block space-y-16 w-full">

        <div className="grid grid-cols-12 gap-16 items-start">
          <div className="col-span-4">
            <SubtitleTitle subtitle="Area" title="126 sqm" />
          </div>

          <div className="col-span-8">
            <SubtitleTitle subtitle="Client" title="We Work" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-16 items-start">
          <div className="col-span-4">
            <SubtitleTitle subtitle="Category" title="Office Space" />
          </div>


          <div className="col-span-8">
            <TitleSubtitle  title="Client’s Vision:" subtitle="The client, a young couple with a passion for nature and tranquility,"/>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-16 items-start">
          <div className="col-span-4">
            <SubtitleTitle subtitle="Project Size" title="Remodeling" />
          </div>

          <div className="col-span-8">
             <TitleSubtitle  title="The Problem:" subtitle="The existing home had an outdated layout with closed-off rooms that inhibited natural light and hindered the flow of energy. The interior lacked a cohesive theme, leaving the homeowners feeling disconnected from their surroundings. The challenge was to create a unified, nature-inspired design that seamlessly integrated with the existing structure." />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-16 items-start">
          <div className="col-span-4">
            <SubtitleTitle subtitle="Location" title="Bengaluru" />
          </div>
          <div className="col-span-8">
              <TitleSubtitle  title="Our Solution:" subtitle="Our team approached the project with a holistic perspective, focusing on both functionality and aesthetics. We proposed a transformative open-concept design that allowed natural light to flood the interior. The living, dining, and kitchen areas were seamlessly connected, fostering a sense of spaciousness." />
          </div>
        </div>
      </div>
    
       <div className="block md:hidden space-y-16 w-full">

        {/* ROW 1 */}
        <div className="grid grid-cols-6 gap-16 items-start">
          <div className="col-span-3">
             <SubtitleTitle subtitle="Client" title="We Work" />
          </div>

          <div className="col-span-3">
           
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-6 gap-16 items-start">
          <div className="col-span-3">
             <SubtitleTitle subtitle="Area" title="126 sqm" />
          </div>


          <div className="col-span-3">
            <SubtitleTitle subtitle="Category" title="Office Space" />
          </div>
        </div>

        {/* ROW 3 */}
        <div className="grid grid-cols-6 gap-16 items-start">
          <div className="col-span-3">
            <SubtitleTitle subtitle="Project Size" title="Remodeling" />
          </div>

          <div className="col-span-3">
             <SubtitleTitle subtitle="Location" title="Bengaluru" />
          </div>
        </div>

        {/* ROW 4 */}
        <div className="grid grid-cols-6 gap-16 items-start">
          <div className="col-span-6">
             <TitleSubtitle  title="Client’s Vision:" subtitle="The client, a young couple with a passion for nature and tranquility,"/>
          </div>
          <div className="col-span-6">
              <TitleSubtitle  title="The Problem:" subtitle="The existing home had an outdated layout with closed-off rooms that inhibited natural light and hindered the flow of energy. The interior lacked a cohesive theme, leaving the homeowners feeling disconnected from their surroundings. The challenge was to create a unified, nature-inspired design that seamlessly integrated with the existing structure." />
          </div>
          <div className="col-span-6">
              <TitleSubtitle  title="Our Solution:" subtitle="Our team approached the project with a holistic perspective, focusing on both functionality and aesthetics. We proposed a transformative open-concept design that allowed natural light to flood the interior. The living, dining, and kitchen areas were seamlessly connected, fostering a sense of spaciousness." />
          </div>
        </div>
      </div>
    </section>
  );
}
