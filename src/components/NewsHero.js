"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function NewsHero({title, subtitle, breakline}) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
   
  return (
     <section className={`w-full flex flex-col items-center justify-center py-10 md:py-20 px-4 md:px-16 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
         <p className="font-poppins font-normal text-[13px] md:text-lg text-center">{subtitle}</p>
         <h1 className="font-poppins font-semibold text-[32px] md:text-[56px] text-center">{title} <br/> {breakline}</h1>
       </section>
  );
}