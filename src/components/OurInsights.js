"use client";

import Image from "next/image";
import Button from "./Button";
import InsightCard from "./InsightCard";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function OurInsights() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

    const insights = [
        {
            img: "/assets/insights/insight1.png",
            title: "Building for Future",
            description: "Explore the latest trends in eco-friendly architecture and interior design, and how we incorporate sustainability into every project."
        },
        {
            img: "/assets/insights/insight2.png",
            title: "Innovation in Urban Spaces",
            description: "Learn how to balance heritage and cutting-edge design, creating spaces that honor the past while embracing the future."
        },
        {
            img: "/assets/insights/insight3.png",
            title: "Maximizing Small Spaces",
            description: "Get insights into designing compact spaces without compromising style or comfort, perfect for city living and smaller homes."
        }
    ]
  return (
    <section className={`w-full py-10 md:py-20 md:px-16 flex flex-col items-center justify-center gap-3 md:gap-10 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <h1 className="font-poppins font-medium text-[28px] md:text-6xl leading-[57px] tracking-normal">Our Insights</h1>
      <Button label="VIEW MORE" theme={theme} />
      <div className="flex items-center justify-between w-full gap-10">
        {insights.map((insight, index) => (
            <InsightCard key={index} img={insight.img} title={insight.title} description={insight.description}/>
        ))} 
      </div>
    </section>
  );
}