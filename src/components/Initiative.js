"use client";

import Image from "next/image";
import { sustainabilityData } from "@/data/home/sustainabilityData";

export default function Initiative() {
  const { initiative } = sustainabilityData;
  return (
    <section className="py-10 px-4 md:py-20 md:px-16">
      <div className="relative h-[600px] rounded-xl overflow-hidden">
        
        {/* Background Image */}
        <Image
          src={initiative.image}
          alt="Sustainability Initiatives"
          fill
          className="object-cover"
          priority
        />

        {/* White Content Card */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white rounded-xl px-8 py-14 w-[650px] h-[448px] leading-[34px] space-y-8">
          <h2 className="font-roboto text-[32px] font-semibold">
            {initiative.title}
          </h2>

          <ul className="text-2xl font-light text-gray-600 font-roboto list-disc list-inside">
            {initiative.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
