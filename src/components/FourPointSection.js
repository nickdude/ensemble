"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function FourPointSection({ details }) { 
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;  

    return (
        <section className={`px-4 w-full py-20 md:px-16 flex gap-8 flex-col ${theme === 'dark' ? 'bg-black text-white border-b border-gray-700' : 'bg-white text-black border-b border-gray-300'}`}>
            <h1 className="font-poppins font-semibold text-[32px] md:text-[56px] leading-[34px] md:leading-[56px]">{details?.title}<br/>{details?.break}</h1>
            <p className="font-roboto text-[16px] md:text-lg w-full md:w-[58%] leading-[26.5px] text-gray-600">{details?.description}</p>
            <div className="flex flex-col">
                <div className="relative w-full h-[40vh] rounded-xl overflow-hidden">
                       <Image
                         src={details?.img}
                         alt="Design Image"
                         fill
                         className="object-cover"
                         priority
                       />
                </div>
                <div className=" flex flex-col md:grid md:grid-cols-4 md:gap-8">
                    {details?.points.map((point, index) => (
                        <div key={index} className="flex flex-col pt-10 ">
                            <Image src="/assets/icons/tick.svg" alt="arrow" width={20} height={20} />
                            <h2 className="font-roboto font-medium text-xl leading-[48px]">{point.title}</h2>
                            <p className="font-roboto text-lg leading-[26.5px] text-gray-600">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}