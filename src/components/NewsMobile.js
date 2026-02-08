"use client";

import Image from "next/image";
import Button from "./Button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import InsightCard from "./InsightCard";
import homeData from "@/data/home/homeData";

export default function NewsMobile() {
   const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const data = homeData.news;
  
    useEffect(() => setMounted(true), []);
  
    if (!mounted) return null;
  
    return (
      <section className={`w-full py-5 md:py-20 md:pl-16 flex flex-col items-center justify-center gap-3 md:gap-10 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <h1 className="font-poppins font-medium text-[28px] md:text-6xl leading-[57px] tracking-normal">{data.title}</h1>
        <p className="text-center text-base font-avenir font-light w-2/3">{data.description}</p>
        <Button label={data.viewMoreLabel} theme={theme} />
         <div className="w-full overflow-x-auto scrollbar-hide mt-10">
          <div className="flex gap-5 min-w-max">
            {data.newsItems.map((news, index) => (
              <InsightCard
                key={index}
                img={news.image}
                title={news.title}
                description={news.desc}
                width="w-[80vw]"
              />
            ))}
          </div>
        </div>
      </section>
    );
}
