"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import CountContainer from "./CountContainer";

export default function CountSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <section className={`border-y border-gray-300 py-20 ${theme === 'dark' ? 'bg-black border-gray-800' : 'bg-white border-gray-300'}`}>
      <div className="text-black flex flex-col md:flex-row justify-between items-center px-16 gap-10 md:gap-0">
        <CountContainer count="20" label="Years of Experience" theme={theme}/>
        <CountContainer count="1500+" label="Projects Executed" theme={theme}/>
        <CountContainer count="1.25lac" label="Sq.Ft. Manufacturing Unit" theme={theme}/>
        <CountContainer count="1500+" label="Workhands across India" theme={theme}/>
      </div>
    </section>
  );
}