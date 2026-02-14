"use client";

import ServiceCard from "./ServiceCard";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import homeData from "@/data/home/homeData";

export default function OurServices() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const data = homeData.ourServices;

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
    
  return (
   <section className={`w-full flex items-center flex-col ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} py-10 md:py-20`}>
      <h1 className="font-poppins font-medium text-[28px] md:text-6xl leading-[57px] tracking-normal mb-10 px-4 md:px-16">{data.title}</h1>
        <div
            className="
            flex gap-5
            overflow-x-auto md:overflow-visible md:no-scrollbar
            flex-nowrap
            justify-start md:justify-center
            scroll-smooth
            pb-4
            w-full
            px-4 md:px-16
            "
            >
            {data.services.map((item, index) => (
                    <div key={index} className="flex-shrink-0">
                        <ServiceCard
                            img={item.img}
                            title={item.title}
                            description={item.description}
                            link={item.link}
                        />
                    </div>
            ))}
        </div>
   </section>
  );
}