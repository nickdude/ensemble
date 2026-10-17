"use client";

import Image from "next/image";
import { sustainabilityData } from "@/data/home/sustainabilityData";

export default function Initiative({ theme, data = sustainabilityData }) {
  const { initiative } = data;
  const hasStructuredItems = initiative.items.some((item) => typeof item !== "string");
  return (
    <section className={`py-1 px-4 md:py-20 md:px-16 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="relative h-auto md:h-[600px] rounded-xl overflow-hidden flex flex-col md:block">
        
        {/* Background Image */}
        <div className="relative h-[300px] md:h-full w-full">
          <Image
            src={initiative.image}
            alt={initiative.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* White Content Card */}
        <div className={`relative md:absolute md:left-6 md:top-1/2 md:-translate-y-1/2 ${theme === 'dark' ? 'bg-black' : 'bg-white'} rounded-xl px-6 md:px-12 py-8 md:py-14 w-full md:w-[min(760px,calc(100%-3rem))] md:min-h-[520px] leading-[28px] md:leading-[34px] space-y-5 md:space-y-8`}>
          <h2 className="font-poppins text-[24px] md:text-[48px] font-medium md:font-semibold">
            {initiative.title}
          </h2>
          <ul className={`font-roboto text-sm md:text-xl font-light ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} ${hasStructuredItems ? 'list-none pl-0 space-y-5 md:space-y-7' : 'list-disc list-outside pl-5'} leading-7 md:leading-9`}>
            {initiative.items.map((item, index) => (
              <li key={index}>
                {typeof item === "string" ? item : (
                  <>
                    <strong className={`block font-poppins font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      {item.title}
                    </strong>
                    <span className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}>{item.description}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
