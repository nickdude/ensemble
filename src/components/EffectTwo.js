"use client";

import Image from "next/image";
import News from "./News";
import OurInsights from "./OurInsights";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import homeData from "@/data/home/homeData";

export default function EffectTwo() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const data = homeData.effectTwo;

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
  return (
    <section className="relative min-h-[200vh]">
  
        {/* Sticky Background */}
        <div className="sticky top-0 h-screen w-full">
            <div className="relative min-h-screen bg-brand-blue flex flex-col justify-center items-center gap-3 py-10 md:py-20 px-4 md:px-16 text-white overflow-hidden">
      
                {/* Heading */}
                <h1 className="font-poppins font-medium text-[28px] md:text-[64px]">
                    {data.heading}
                </h1>

                <p className="font-avenir font-light text-base text-lg text-center">
                    {data.description}
                </p>

                {/* ===== Scroll Area Wrapper ===== */}
                <div className="relative w-full mt-8 md:mt-20">

                    {/* Left Fade */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full md:w-[10%]
                                    bg-gradient-to-r from-brand-blue to-transparent z-10" />

                    {/* Right Fade */}
                    <div className="pointer-events-none absolute right-0 top-0 h-full md:w-[10%]
                                    bg-gradient-to-l from-brand-blue to-transparent z-10" />

                    {/* Scroll Container */}
                    <div
                    className="flex gap-2 md:gap-10 overflow-x-auto scroll-smooth px-4 md:px-10
                                scrollbar-hide"
                    >
                    {/* Card */}
                    {data.testimonials.map((testimonial, i) => (
                        <div
                        key={i}
                        className="min-w-[85vw] md:min-w-[774px] h-[412px] border-[0.3px] border-white
                                    rounded-lg p-10 flex flex-col justify-between bg-transparent"
                        >
                        <h1 className="font-poppins text-base md:text-2xl text-gray-250">
                            "{testimonial.quote}"
                        </h1>

                        <div>
                            <p className="font-bricolage font-extralight text-white">
                            {testimonial.name}
                            </p>
                            <p className="font-bricolage font-extralight text-white">
                            {testimonial.position}
                            </p>
                        </div>
                        </div>
                    ))}
                    </div>

                </div>
            </div>
        </div>

        {/* Content scrolls */}
        <div className={`relative z-10 h-[100vh] flex items-center ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} px-4 md:px-0`}>
                <OurInsights theme={theme}/>
        </div>
    </section>

    );
}
