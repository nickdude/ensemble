"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import CountContainer from "./CountContainer";
import homeData from "@/data/home/homeData";

export default function CountSection({text}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const data = homeData.countSection;

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <section className={`border-y border-gray-300 py-20 ${theme === 'dark' ? 'bg-black border-gray-800' : 'bg-white border-gray-300'}`}>
      <div className="text-black flex flex-col md:flex-row justify-between items-center px-16 gap-10 md:gap-0">
        {data.counts.map((item, index) => (
          <CountContainer 
            key={index}
            count={item.count} 
            label={item.label} 
            theme={theme} 
            text={text}
          />
        ))}
      </div>
    </section>
  );
}