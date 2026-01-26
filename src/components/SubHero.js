"use client";

import Button from "./Button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SubHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className={`w-full py-10 md:py-30 px-4 md:px-16 transition-colors duration-300 ${theme === "dark" ? "bg-black" : "bg-white"} mt-[100vh]`}>      
        <div className="flex flex-col gap-4 md:flex md:flex-row md:justify-between">
            <h1 className={`w-full md:w-4/7 font-poppins font-medium text-base md:text-3xl transition-colors ${theme === "dark" ? "text-white" : "text-black"}`}>
               Ensemble is a collaborative Interior Design firm offering customized services in Corporate, Commercial, and Hospitality sectors.
            </h1>
            <div className="w-full md:w-1/3 gap-4 md:gap-10 flex flex-col">
                <p className={`font-avenir font-normal text-base md:text-lg transition-colors ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
                    Founded in 2001, Ensemble provides Design & Build, General Contracting, and Manufacturing services. From a modest 200 square feet for American Express, we now have over 1,000 projects and have transformed more than 4 million square feet.
                </p>
                <Button label="KNOW MORE" theme={theme} />
            </div>
        </div>
    </section>  
  );
}