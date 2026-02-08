"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { aboutUsData } from "@/data/home/aboutUsData";

export default function AboutUsHero(){
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { aboutUsHero } = aboutUsData;
    
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return(
         <section className={`py-10 md:py-20 px-4 md:px-16 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <p className="font-poppins font-normal text-[13px] md:text-lg">{aboutUsHero.label}</p>
                <h1 className="font-poppins font-semibold text-[32px] md:text-4xl w-[98%] md:w-[70%] text-center">{aboutUsHero.title}<span className="text-gray-600"> {aboutUsHero.titleHighlight}</span></h1>
                <div className="relative w-full h-[75vh] rounded-xl overflow-hidden mt-16">
                      <Image
                          src={aboutUsHero.image}
                          alt="About Us Hero Image"
                          fill
                          className="object-cover"
                          priority
                          />
                </div>
                <div className="flex flex-col w-full mt-16">
                    <div className="text-left">
                        <h1 className="font-poppins font-medium text-[32px] md:text-[42px]">{aboutUsHero.sectionTitle}</h1>
                    </div>
                    <div className="font-avenir font-light text-lg w-[100%] md:w-[55%] flex flex-col items-end">
                        {aboutUsHero.description.map((para, index) => (
                            <p key={index}>
                                {para}
                            </p>
                        ))}
                    </div>
                </div>
        </section>
    )
}