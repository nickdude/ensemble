"use client";

import Image from "next/image";
import Timeline from "./Timeline";
import { sustainabilityData } from "@/data/home/sustainabilityData";

export default function JourneyTo2029({ theme, data = sustainabilityData, compact = false }) {
  const { journeyTo2029 } = data;
  return (
    <section className={`journey-section ${compact ? "journey-section--compact" : ""} px-4 md:px-16 py-10 md:py-20 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col md:flex-row w-full gap-6 md:gap-0`}>
            <div className={`journey-section__image overflow-hidden relative rounded-xl md:rounded-none order-1 md:order-2 ${compact ? "journey-section__image--compact" : "w-full md:w-[40%] h-[260px] md:h-[110vh]"}`}>
                  <Image
                        src={journeyTo2029.image}
                        alt={journeyTo2029.title}
                        fill
                        className="object-cover"
                        priority
                    />
            </div>
            <div className={`journey-section__content w-full md:w-[60%] flex flex-col items-left justify-center order-2 md:order-1 ${compact ? "journey-section__content--compact" : ""}`}>
              <h2 className={`font-poppins font-semibold text-3xl md:text-5xl mb-6 md:mb-0 ${compact ? "journey-section__title--compact" : "md:px-32"}`}>{journeyTo2029.title}</h2>
              <Timeline theme={theme} items={journeyTo2029.timeline} compact={compact}/>
            </div>
    </section>
  );
}
