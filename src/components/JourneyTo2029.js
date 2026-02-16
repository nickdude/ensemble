"use client";

import Image from "next/image";
import Timeline from "./Timeline";
import { sustainabilityData } from "@/data/home/sustainabilityData";

export default function JourneyTo2029({ theme }) {
  const { journeyTo2029 } = sustainabilityData;
  return (
    <section className={`px-4 md:px-16 py-10 md:py-20 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col md:flex-row w-full gap-6 md:gap-0`}>
            <div className="overflow-hidden w-full md:w-[40%] h-[260px] md:h-[110vh] relative rounded-xl md:rounded-none order-1 md:order-2">
                  <Image
                        src={journeyTo2029.image}
                        alt="Journey to 2029"
                        fill
                        className="object-cover"
                        priority
                    />
            </div>
            <div className="w-full md:w-[60%] flex flex-col items-left justify-center order-2 md:order-1">
              <h1 className="font-poppins font-semibold text-3xl md:text-5xl md:px-32 mb-6 md:mb-0">{journeyTo2029.title}</h1>
              <Timeline/>
            </div>
    </section>
  );
}
