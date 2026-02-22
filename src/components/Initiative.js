"use client";

import Image from "next/image";
import { sustainabilityData } from "@/data/home/sustainabilityData";

export default function Initiative({ theme }) {
  const { initiative } = sustainabilityData;
  return (
    <section className={`py-1 px-4 md:py-20 md:px-16 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="relative h-auto md:h-[600px] rounded-xl overflow-hidden flex flex-col md:block">
        
        {/* Background Image */}
        <div className="relative h-[300px] md:h-full w-full">
          <Image
            src={initiative.image}
            alt="Sustainability Initiatives"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* White Content Card */}
        <div className={`relative md:absolute md:left-6 md:top-1/2 md:-translate-y-1/2 ${theme === 'dark' ? 'bg-black' : 'bg-white'} rounded-xl px-6 md:px-8 py-8 md:py-14 w-full md:w-[650px] md:h-[448px] leading-[28px] md:leading-[34px] space-y-4 md:space-y-8`}>
          <h2 className="font-poppins text-[18px] md:text-[32px] font-medium md:font-semibold">
            {initiative.title}
          </h2>
          <ul className="font-roboto text-sm md:text-xl font-light text-gray-600 list-disc list-outside leading-10">
            {initiative.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
