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
    <section className={`w-full py-30 px-16 transition-colors duration-300 ${theme === "dark" ? "bg-black" : "bg-white"} mt-[100vh]`}>      
        <div className="flex justify-between">
            <h1 className={`w-4/7 font-poppins font-medium text-3xl transition-colors ${theme === "dark" ? "text-white" : "text-black"}`}>
                We craft spaces that tell your story—alive, inspiring, and built to leave a mark.
            </h1>
            <div className="w-1/3 gap-10 flex flex-col">
                <p className={`font-poppins font-normal text-lg transition-colors ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
                    Ensemble is a leading Design & Build and fit-out company, delivering tailored commercial and workplace solutions. Since 2001, we have completed over 1,000+ projects across design & build, general contracting, base build, transforming more than four million square feet of workspace. Today, we design and execute over 1.5 million square feet of workspace annually.
                </p>
                <Button label="KNOW MORE" theme={theme} />
            </div>
        </div>
    </section>  
  );
}