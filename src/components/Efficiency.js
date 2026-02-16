"use client";

import Image from "next/image";
import { sustainabilityData } from "@/data/home/sustainabilityData";

export default function Efficiency({ theme }) {
    const { efficiency } = sustainabilityData;
    return(
        <section className={`py-10 px-4 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} md:py-20 md:px-16`}>
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">
                 <div className="relative w-full md:w-1/2 h-[50vh] md:h-[75vh] rounded-xl overflow-hidden mt-16">
                            <Image
                                src={efficiency.image}
                                alt="Efficiency Image"
                                fill
                                className="object-cover"
                                priority
                                />
                        </div>
                <div className=" w-full md:w-1/2 h-[75vh] flex flex-col justify-center gap-5 mt-16">
                    <h1 className="font-roboto font-semibold text-[32px]">{efficiency.title}</h1>
                    <p className="font-roboto font-light text-[24px] text-gray-600">
                        {efficiency.description}
                    </p>
                </div>
            </div>
        </section>
    );
}