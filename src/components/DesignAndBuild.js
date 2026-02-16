"use client";

import Image from "next/image";
import { sustainabilityData } from "@/data/home/sustainabilityData";

export default function DesignAndBuild({ theme }) {
    const { designAndBuild } = sustainabilityData;
    return(
        <section className={`py-10 px-4 md:py-20 md:px-16 flex flex-col gap-5 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <h1 className="font-poppins font-semibold text-[32px] md:text-[56px] leading-10 md:leading-16">{designAndBuild.title}</h1>
                <p className="font-roboto font-normal text-lg md:text-2xl text-gray-600 leading-7">{designAndBuild.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                    {designAndBuild.cards.map((card, index) => (
                        <div key={index} className={`flex flex-col gap-4 ${theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-[#F6F6F6]'} p-5 items-center text-center md:items-start md:text-left`}>
                            <Image src={card.icon}
                                width={48}
                                height={48}
                                alt={card.title}
                                className="md:w-[35px] md:h-[35px]"
                            />
                            <h1 className="font-roboto font-medium text-xl">{card.title}</h1>
                            <p className="font-roboto font-normal text-xl text-gray-600 mt-1">{card.description}</p>
                        </div>
                    ))}
                </div>
        </section>
    );
}