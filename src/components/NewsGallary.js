"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import "./ProjectCardSample.css"
import NewsCard from "./NewsCard";

export default function NewsGallery() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
  return (
    <section className={`w-full px-4 md:px-16 py-20 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>

      {/* Filters */}
      <div className="flex gap-8 mb-10 font-poppins font-medium text-[13px] md:text-lg">
        <button className="flex gap-2 items-center justify-center">Filter +</button>
        <button className="flex gap-2 items-center justify-center">Region <Image src="/assets/icons/down.svg" alt="Location" width={10} height={10} /></button>
        <button className="flex gap-2 items-center justify-center">Date <Image src="/assets/icons/down.svg" alt="Scope" width={10} height={10} /></button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
       <NewsCard/>
       <NewsCard/>
       <NewsCard/>
       <NewsCard/>
       <NewsCard/>
       <NewsCard/>
       <NewsCard/>
       <NewsCard/>
      </div>
    </section>
  );
}
