"use client";

import Image from "next/image";
import { sustainabilityData } from "@/data/home/sustainabilityData";

export default function SustainabilityHero() {
  const { sustainabilityHero } = sustainabilityData;
  return (
    <section className="w-full bg-white text-black flex flex-col items-center justify-center py-10 px-4 md:py-20 md:px-16">
        <h1 className="font-poppins font-semibold text-[23px] md:text-[42px]">{sustainabilityHero.title}</h1>
        <p className="font-poppins font-medium text-[23px] md:text-[38px] text-center w-full md:w-[65%]">{sustainabilityHero.subtitle}</p>
        <div className="relative w-full h-[75vh] rounded-xl overflow-hidden mt-16">
            <Image
                src={sustainabilityHero.image}
                alt="Sustainability Hero Image"
                fill
                className="object-cover"
                priority
                />
        </div>
    </section>
  );
}