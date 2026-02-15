"use client";

import Image from "next/image";
import Button from "./Button";
import InsightCard from "./InsightCard";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import homeData from "@/data/home/homeData";

export default function OurInsights() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const data = homeData.ourInsights;

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <section className={`w-full py-1 pl-4 md:py-20 md:pl-16 flex flex-col items-center justify-center gap-3 md:gap-10 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <h1 className="font-poppins font-medium text-[28px] md:text-6xl leading-[57px] tracking-normal">{data.title}</h1>
      <Button label={data.buttonLabel} link={data.buttonLink}/>
       <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-10 min-w-max">
          {data.insights.map((insight, index) => (
            <InsightCard
              key={index}
              img={insight.img}
              title={insight.title}
              description={insight.description}
              width="w-[430px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}