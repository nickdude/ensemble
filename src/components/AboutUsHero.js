"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AboutUsHero(){
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return(
         <section className={`py-10 md:py-20 px-4 md:px-16 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <p className="font-poppins font-normal text-[13px] md:text-lg">About Us</p>
                <h1 className="font-poppins font-semibold text-[32px] md:text-4xl w-[98%] md:w-[70%] text-center">We’re Ensemble, The creative crafters behind architectural marvels.<span className="text-gray-600"> Where innovation meets blueprints, we shape dreams with passion and flair!</span></h1>
                <div className="relative w-full h-[75vh] rounded-xl overflow-hidden mt-16">
                      <Image
                          src="/assets/aboutus/hero.jpg"
                          alt="Detail News Image"
                          fill
                          className="object-cover"
                          priority
                          />
                </div>
                <div className="flex flex-col w-full mt-16">
                    <div className="text-left">
                        <h1 className="font-poppins font-medium text-[32px] md:text-[42px]">Executing excellence</h1>
                    </div>
                    <div className="font-avenir font-light text-lg w-[100%] md:w-[55%] flex flex-col items-end">
                        <p>
                            Workplaces and commercial spaces are today recognised as one of the key driving forces behind what your success vision stands for. At Ensemble, we bring the necessary expertise to execute that vision with excellence.
                        </p>
                        <p>
                            One of the key aspects of executing with excellence at Ensemble is to partner with your teams at every stage and create solutions that live up to your larger organisational needs.
                        </p>
                    </div>
                </div>
        </section>
    )
}