"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import servicesData from "@/data/home/servicesData";

export default function OurServiceHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const data = servicesData.ourServiceHero;

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <section className={`md:px-16 w-full ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="relative w-full h-[75vh] md:rounded-xl overflow-hidden">
        
        {/* Background Image */}
        <Image
          src={data.image}
          alt="Service Hero Image"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-12 left-4 max-w-2xl z-10">
          <p className="text-sm md:text-lg font-poppins font-normal mb-3">{data.label}</p>

          <h1 className="text-[34px] md:text-[56px] font-poppins font-semibold leading-tight mb-6">
            {data.heading}
          </h1>

          <p className="text-[16px] md:text-lg font-poppins font-normal text-gray-300">
            {data.description}
          </p>
        </div>

      </div>
    </section>
  );
}
