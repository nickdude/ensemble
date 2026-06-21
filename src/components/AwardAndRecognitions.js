"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { aboutUsData } from "@/data/home/aboutUsData";

export default function AwardAndRecognitions(){
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { awardAndRecognitions } = aboutUsData;

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    return(
        <section className={`py-20 px-4 md:px-16 space-y-8 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <h2 className="font-poppins font-semibold text-[32px] md:text-[56px] leading-10 md:leading-15">{awardAndRecognitions.title}</h2>
            <p className="font-roboto font-normal text-lg md:text-2xl text-gray-600">{awardAndRecognitions.subtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {awardAndRecognitions.cards.map((card, index) => (
                    <div key={index} className={`flex flex-col items-center justify-between h-[315px] w-full md:w-[311px] ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#f6f6f6]'} justify-center gap-3 rounded-lg`}>
                        {/* <Image src={card.icon} alt={card.title} width={48} height={48} className={`${theme === 'dark' ? 'invert' : ''}`}/>
                        <div className="flex items-center flex-col">
                             <h3 className="font-roboto font-medium text-xl">{card.title}</h3>
                             <p className={`font-roboto text-lg  ${theme === 'dark' ? 'text-white' : 'text-gray-600'} text-center mt-5`}>{card.description}</p>
                        </div> */}
                        <div className="flex items-center flex-col justify-start">
                            <div className="flex flex-col items-center justify-between h-18">
                                <Image src={card.icon} alt={card.title} width={48} height={48} className={`${theme === 'dark' ? 'invert' : ''}`}/>
                                <h3 className="font-roboto font-medium text-xl">{card.title}</h3>
                            </div>
                            <div className="h-28">
                                 <p className={`font-roboto text-lg  ${theme === 'dark' ? 'text-white' : 'text-gray-600'} text-center mt-5`}>{card.description}</p> 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}