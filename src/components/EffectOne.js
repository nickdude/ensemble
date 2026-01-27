"use client";

import Image from "next/image";
import News from "./News";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function EffectOne() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    
  return (
    <section className="relative min-h-[200vh]">
  
        {/* Sticky Background */}
        <div className="sticky top-0 h-screen w-full">
            <Image
            src="/assets/blur/background-effect.png"
            alt="Background 1"
            fill
            className="object-cover"
            />
        </div>

        {/* Content scrolls */}
        <div className="relative z-10 h-[70vh] md:h-[140vh] flex items-center px-4 md:px-16">
            {/* Blur background layer (ONLY background will blur) */}
            <div className="absolute inset-0 backdrop-blur-sm bg-white/5 z-0" />
            {/* Main container */}
            <div className="relative h-[50vh] md:h-[120vh] w-full overflow-hidden flex flex-col justify-between py-10 md:py-20">

                {/* Background image (sharp) */}
                <Image
                src="/assets/blur/blur1.svg"
                alt="Executing Excellence"
                fill
                priority
                className="object-cover scale-110"
                />

                {/* Content (sharp) */}
                <div className="flex flex-col gap-10 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
                        <h1 className="font-poppins text-[21px] md:text-4xl font-medium w-full md:w-1/2">
                        We strive to live up to our motto every day at work
                        </h1>
                        <p className="uppercase underline tracking-[4%] font-avenir font-light text-[16px]">
                        Explore Projects
                        </p>
                    </div>

                    <p className="font-poppins text-[48px] md:text-[90px] font-semibold leading-[1.1] w-full md:w-1/2">
                        EXECUTING EXCELLENCE
                    </p>
                </div>

                <div className="relative z-10">
                    <p className="font-avenir text-[15px] md:text-lg font-light w-full md:w-1/2">
                        Ensemble leverages the transformative power of design and technology to
                        enable innovative and distinctive workplace experiences.
                    </p>
                </div>
            </div>
        </div>
        <div
            className={`relative z-20 w-screen max-w-screen overflow-x-hidden
            ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} py-20`}
            >
            <News theme={theme} />
        </div>
    </section>

    );
}
