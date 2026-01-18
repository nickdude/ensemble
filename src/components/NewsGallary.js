"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import "./ProjectCardSample.css"
import NewsCard from "./NewsCard";

const newsData = [
  {
    slug: "bridge-project-chennai",
    title: "Bridge+ Project Launched",
    image: "/assets/news/detail_news1.jpg",
    date: "12 Jan 2026",
  },
  {
    slug: "metro-expansion-delhi",
    title: "Metro Expansion Update",
    image: "/assets/news/detail_news2.jpg",
    date: "10 Jan 2026",
  },
  {
    slug: "bridge-project-mumbai",
    title: "Bridge+ Project Launched",
    image: "/assets/news/detail_news1.jpg",
    date: "12 Jan 2026",
  },
  {
    slug: "metro-expansion-jaipur",
    title: "Metro Expansion Update",
    image: "/assets/news/detail_news2.jpg",
    date: "10 Jan 2026",
  },
  {
    slug: "bridge-project-pune",
    title: "Bridge+ Project Launched",
    image: "/assets/news/detail_news1.jpg",
    date: "12 Jan 2026",
  },
  {
    slug: "metro-expansion-tamil",
    title: "Metro Expansion Update",
    image: "/assets/news/detail_news2.jpg",
    date: "10 Jan 2026",
  },
   {
    slug: "metro-expansion-solapur",
    title: "Metro Expansion Update",
    image: "/assets/news/detail_news2.jpg",
    date: "10 Jan 2026",
  },
   {
    slug: "metro-expansion-kanal",
    title: "Metro Expansion Update",
    image: "/assets/news/detail_news2.jpg",
    date: "10 Jan 2026",
  },
];

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
         {newsData.map((item) => (
          <NewsCard key={item.slug} {...item} />
        ))}
       {/* <NewsCard/>
       <NewsCard/>
       <NewsCard/>
       <NewsCard/>
       <NewsCard/>
       <NewsCard/>
       <NewsCard/>
       <NewsCard/> */}
      </div>
    </section>
  );
}
