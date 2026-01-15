"use client";

import Image from "next/image";

export default function SustainabilityHero() {
  return (
    <section className="w-full bg-white text-black flex flex-col items-center justify-center py-10 px-4 md:py-20 md:px-16">
        <h1 className="font-poppins font-semibold text-[23px] md:text-[42px]">Sustainability at the Core</h1>
        <p className="font-poppins font-medium text-[23px] md:text-[38px] text-center w-full md:w-[65%]"> Where Timeless Design Meets Environmental Responsibility. Together, We Create Spaces That Not Only Inspire but Also Care for the Planet.</p>
        <div className="relative w-full h-[75vh] rounded-xl overflow-hidden mt-16">
            <Image
                src="/assets/news/detail_news1.jpg"
                alt="Detail News Image"
                fill
                className="object-cover"
                priority
                />
        </div>
    </section>
  );
}