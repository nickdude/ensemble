"use client"

import Image from "next/image";

export default function Executing({children, theme}) {
  return (
    <section className="min-h-screen relative py-20 px-16">
        <Image src={"/assets/blur/blur1.svg"} alt="Executing Excellence" fill className="object-cover absolute inset-0 -z-10 opacity-20 blur-3xl scale-110"/>
        <div className="h-[120vh] flex flex-col justify-between">
            <div className="flex flex-col gap-10">
                <div className="flex justify-between">
                    <h1 className="font-poppins text-4xl font-medium w-1/2">We strive to live up to our motto every day at work</h1>
                    <p className="uppercase underline tracking-[4%] font-avenir font-light text-[16px]">Explore Projects</p>
                </div>
                <p className="font-poppins text-[90px] font-semibold leading-22 w-1/2">EXECUTING EXCELLENCE</p>
            </div>
            <div>
                <p className="font-avenir text-lg font-light w-1/2">Ensemble leverages the transformative power of design and technology to enable innovative and distinctive workplace experiences.</p>
            </div>
        </div>
    </section>
  );
}