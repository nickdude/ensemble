"use client";

import Image from "next/image";
import { sustainabilityData } from "@/data/home/sustainabilityData";

export default function DesignAndBuild(){
    const { designAndBuild } = sustainabilityData;
    return(
        <section className="py-10 px-4 md:py-20 md:px-16 flex flex-col gap-5">
                <h1 className="font-poppins font-semibold text-[32px] md:text-[56px] leading-10 md:leading-16">{designAndBuild.title}</h1>
                <p className="font-roboto font-normal text-lg md:text-2xl text-gray-600 leading-7">{designAndBuild.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                    {designAndBuild.cards.map((card, index) => (
                        <div key={index} className="flex flex-col gap-4 bg-[#F6F6F6] p-5">
                            <Image src={card.icon}
                                width={35}
                                height={35}
                                alt={card.title}
                            />
                            <h1 className="font-roboto font-medium text-xl">{card.title}</h1>
                            <p className="font-roboto font-normal text-xl text-gray-600 mt-1">{card.description}</p>
                        </div>
                    ))}
                </div>
        </section>
    );
}