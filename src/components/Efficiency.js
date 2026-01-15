"use client"

import Image from "next/image";

export default function Efficiency(){
    return(
        <section className="py-10 px-4 bg-white text-black md:py-20 md:px-16">
            <div className="w-full flex flex-col md:flex-row items-center justify-betweengap-10 md:gap-14">
                 <div className="relative w-full md:w-1/2 h-[50vh] md:h-[75vh] rounded-xl overflow-hidden mt-16">
                            <Image
                                src="/assets/sustainabilty/efficiency.jpg"
                                alt="Efficiency Image"
                                fill
                                className="object-cover"
                                priority
                                />
                        </div>
                <div className=" w-full md:w-1/2 h-[75vh] flex flex-col justify-center gap-5 mt-16">
                    <h1 className="font-roboto font-semibold text-[32px]">Efficiency Meets Sustainability</h1>
                    <p className="font-roboto font-light text-[24px] text-gray-600">
                        At Ensemble, we focus on creating spaces that optimize energy use and reduce waste. By incorporating smart technologies, efficient systems, and sustainable practices, we ensure every project contributes to a greener, more sustainable future.
                    </p>
                </div>
            </div>
        </section>
    );
}