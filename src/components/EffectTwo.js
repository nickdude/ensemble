"use client";

import Image from "next/image";
import News from "./News";
import OurInsights from "./OurInsights";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function EffectTwo() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
  return (
    <section className="relative min-h-[200vh]">
  
        {/* Sticky Background */}
        <div className="sticky top-0 h-screen w-full">
            <div className="relative min-h-screen bg-brand-blue flex flex-col justify-center items-center gap-3 py-20 px-16 text-white overflow-hidden">
      
                {/* Heading */}
                <h1 className="font-poppins font-medium text-[64px]">
                    What our clients say
                </h1>

                <p className="font-avenir font-light text-lg">
                    Stay updated with our latest projects, press features, and industry insights.
                </p>

                {/* ===== Scroll Area Wrapper ===== */}
                <div className="relative w-full mt-20">

                    {/* Left Fade */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-[10%]
                                    bg-gradient-to-r from-brand-blue to-transparent z-10" />

                    {/* Right Fade */}
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-[10%]
                                    bg-gradient-to-l from-brand-blue to-transparent z-10" />

                    {/* Scroll Container */}
                    <div
                    className="flex gap-10 overflow-x-auto scroll-smooth px-10
                                scrollbar-hide"
                    >
                    {/* Card */}
                    {[1, 2, 3].map((_, i) => (
                        <div
                        key={i}
                        className="min-w-[774px] h-[412px] border-[0.3px] border-white
                                    rounded-lg p-10 flex flex-col justify-between bg-transparent"
                        >
                        <h1 className="font-poppins text-2xl text-gray-250">
                            “Ensemble has carried out our corporate office works within the
                            scheduled time frame allotted and largely to our satisfaction.
                            We feel the company is well equipped and has the resources to
                            take on such large assignments and deliver them successfully.”
                        </h1>

                        <div>
                            <p className="font-bricolage font-extralight text-white">
                            John Doe
                            </p>
                            <p className="font-bricolage font-extralight text-white">
                            CEO Microsoft
                            </p>
                        </div>
                        </div>
                    ))}
                    </div>

                </div>
            </div>
        </div>

        {/* Content scrolls */}
        <div className={`relative z-10 h-[100vh] flex items-center ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <OurInsights theme={theme}/>
        </div>
    </section>

    );
}
