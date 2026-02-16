"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ImageAndDescription({ title, image, description, right, team }) {    
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
    
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <section
      className={`py-10 md:py-20 px-4 md:px-16 flex items-center ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } flex items-center ${
        right ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
      }`}
    >
               {/* Image */}
            <div className={`relative w-full md:w-1/2 h-[590px] ${theme === 'dark' ? 'bg-black' : 'bg-[#F6F6F6]'}`}>
              <Image
              key={image}
              src={image}
              alt={title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover rounded-lg"
              priority
              />
            </div>

            {/* Text */}
            <div
                className={`w-full md:w-1/2 p-4 md:p-16 md:h-[590px] flex flex-col justify-center gap-8 ${theme === 'dark' ? 'bg-black' : 'md:bg-[#F6F6F6]'}  ${
                right ? "pl-0 md:pl-16" : "pr-0 md:pr-16"
                }`}
            >
                <h1 className="font-poppins font-semibold text-[32px]">
                {title}
                </h1>

                <p className={`font-poppins font-light text-lg ${theme === 'dark' ? 'text-white' : 'text-black'} leading-relaxed w-[90%]`}>
                {description}
                </p>
                {team && <div className="flex gap-5 items-center">
                    <Image src={team.image} alt="CEO Image" width={60} height={60} className="rounded-full"/>
                    <div className="flex flex-col gap-2">
                        <p className="font-poppins text-black font-medium text-base">
                            {team.name}
                        </p>
                        <p className="font-poppins text-[#6C6C6C] font-normal text-xs">{team.position}</p>
                    </div>
                </div>}
            </div>
   
    </section>
  );
}