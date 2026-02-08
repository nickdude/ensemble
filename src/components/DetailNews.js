"use client";

import Image from "next/image";
import TitlePara from "./TitlePara";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import newsData from "@/data/home/newsData";
import { usePathname } from "next/navigation";

export default function DetailNews() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const slug = pathname.split('/')[2];
    const newsDetail = newsData.newsDetail[slug];
    
    useEffect(() => setMounted(true), []);
    if (!mounted || !newsDetail) return null;
  return (
    <section className={`py-10 md:py-20 px-4 md:px-24 flex flex-col gap-4 border-b border-gray-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <h1 className="font-poppins font-semibold text-xl md:text-4xl w-[80%] leading-8 md:leading-14">{newsDetail.title}</h1>
        <p className="font-poppins font-light text-sm md:text-[22px]">{newsDetail.subtitle}</p>
        <hr className="h-[0.5px]"/>
        <div className="flex gap-5 font-poppins text-sm md:text-lg">
            <p>{newsDetail.author}</p>
            <Image src="/assets/icons/point.svg" alt="dot" width={4} height={4}/>
            <p>{newsDetail.date}</p>
            <Image src="/assets/icons/point.svg" alt="dot" width={4} height={4}/>
            <p>{newsDetail.readTime}</p>
        </div>
        <div className="relative w-full h-[75vh] rounded-xl overflow-hidden mt-16">
            <Image
                src={newsDetail.mainImage}
                alt="Detail News Image"
                fill
                className="object-cover"
                priority
            />
        </div>

        <TitlePara 
            title={newsDetail.sections[0].title}
            para={newsDetail.sections[0].para}/>

        <div className="mt-16 flex flex-col md:flex-row justify-between gap-14 h-[100vh] md:h-[50vh]">
            <div className="w-full md:w-1/2 relative overflow-hidden h-[50vh]">
                <Image  src={newsDetail.images[0]} alt="Detail News Image 2"  
                    fill
                    className="object-cover rounded-xl"
                    priority />
            </div>
            <div className="w-full md:w-1/2 relative overflow-hidden h-[50vh]">
                <Image  src={newsDetail.images[1]} alt="Detail News Image 3"  
                    fill
                    className="object-cover rounded-xl"
                    priority />
            </div>
        </div>

        <TitlePara 
            title={newsDetail.sections[1].title}
            para={newsDetail.sections[1].para}/>
   
        <TitlePara 
            title={newsDetail.sections[2].title}
            para={newsDetail.sections[2].para}/>

         <div className="relative w-full h-[65vh] rounded-xl overflow-hidden mt-16">
            <Image
                src={newsDetail.footerImage}
                alt="Detail News Image"
                fill
                className="object-cover"
                priority
            />
        </div>

        <TitlePara 
            title={newsDetail.sections[3].title}
            para={newsDetail.sections[3].para}/>
    </section>
  );
}