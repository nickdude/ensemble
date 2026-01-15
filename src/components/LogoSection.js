"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function LogoSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const logos = theme !== "dark" ? [
    "/assets/logos/logo1.svg",
    "/assets/logos/logo2.svg",
    "/assets/logos/logo3.svg",
    "/assets/logos/logo4.svg",
    "/assets/logos/logo5.svg",
    "/assets/logos/logo6.svg",
    "/assets/logos/logo7.svg",
    "/assets/logos/logo8.svg",
  ]:[
    "/assets/logos_w/logo1.svg",
    "/assets/logos_w/logo2.svg",
    "/assets/logos_w/logo3.svg",
    "/assets/logos_w/logo4.svg",
    "/assets/logos_w/logo5.svg",
    "/assets/logos_w/logo6.svg",
    "/assets/logos_w/logo7.svg"
  ]

  return (
    <section className={`relative w-full border-b  py-20 ${theme === 'dark' ? 'bg-black text-white border-gray-800' : 'bg-white text-black border-gray-300'} overflow-hidden`}>
      
      <h1 className="uppercase font-avenir font-light text-lg tracking-[0.2rem] text-center mb-10">Our Clients</h1>

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
