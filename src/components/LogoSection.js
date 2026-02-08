"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import homeData from "@/data/home/homeData";

export default function LogoSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const data = homeData.logoSection;

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const logos = theme !== "dark" ? data.logosLight : data.logosDark;

  return (
    <section className={`relative w-full border-b  py-20 ${theme === 'dark' ? 'bg-black text-white border-gray-800' : 'bg-white text-black border-gray-300'} overflow-hidden`}>
      
      <h1 className="uppercase font-avenir font-light text-lg tracking-[0.2rem] text-center mb-10">{data.title}</h1>

      <div className="w-full overflow-hidden">
        <div className="mask-fade-horizontal">
          <div className="flex w-max gap-16 animate-scroll-slow">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="client logo"
                className="h-12 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
