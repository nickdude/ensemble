"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function OurServiceHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <section className={`md:px-16 w-full ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="relative w-full h-[75vh] md:rounded-xl overflow-hidden">
        
        {/* Background Image */}
        <Image
          src="/assets/our_service_hero.jpg"
          alt="Service Hero Image"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-12 left-4 max-w-2xl z-10">
          <p className="text-sm md:text-lg font-poppins font-normal mb-3">Our Services</p>

          <h1 className="text-[34px] md:text-[56px] font-poppins font-semibold leading-tight mb-6">
            Innovative Services <br /> for your Projects
          </h1>

          <p className="text-[16px] md:text-lg font-poppins font-normal text-gray-300">
            End-to-end solutions by blending design excellence with technical
            expertise. With a client-first approach, we create functional,
            inspiring spaces that exceed expectations through creativity,
            technology.
          </p>
        </div>

      </div>
    </section>
  );
}
