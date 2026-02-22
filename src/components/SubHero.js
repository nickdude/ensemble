"use client";

import Button from "./Button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import homeData from "@/data/home/homeData";

export default function SubHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const data = homeData.subHero;

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className={`w-full py-10 md:py-30 px-4 md:px-16 transition-colors duration-300 ${theme === "dark" ? "bg-black" : "bg-white"} mt-[90vh] md:mt-[80vh]`}>      
        <div className="flex flex-col gap-4 md:flex md:flex-row md:justify-between">
            <h1 className={`w-full md:w-4/7 font-poppins font-medium text-2xl md:text-3xl transition-colors ${theme === "dark" ? "text-white" : "text-black"}`}>
               {data.title}
            </h1>
            <div className="w-full md:w-1/3 gap-4 md:gap-10 flex flex-col">
                <p className={`font-avenir font-normal text-base md:text-lg transition-colors ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
                    {data.description}
                </p>
                <Button label={data.buttonLabel} link={data.buttonLink}/>
            </div>
        </div>
    </section>  
  );
}