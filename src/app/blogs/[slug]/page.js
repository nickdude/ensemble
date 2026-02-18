"use client";

import News from "@/components/News";
import OurProjects from "@/components/OurProjects";
import TitlePara from "@/components/TitlePara";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { blogsData } from "@/data/home/blogsData";
import NewsMobile from "@/components/NewsMobile";

export default function DetailBlog() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const slug = pathname.split('/').pop();
    const blogDetail = blogsData.blogDetail[slug] || blogsData.blogDetail["blog1"];
    
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
  return (
    <section className={`py-10 px-4 md:py-20 md:px-16 flex flex-col items-center justify-center gap-4 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <h1 className="font-poppins font-semibold text-xl md:text-4xl">{blogDetail.title}</h1>
        <p className="font-poppins font-light text-sm md:text-[22px]">{blogDetail.subtitle}</p>
        <hr className=" w-full"/>
        <div className="flex gap-5 font-poppins text-sm md:text-lg">
            <p>{blogDetail.author}</p>
            <Image src="/assets/icons/point.svg" alt="dot" width={4} height={4}/>
            <p>{blogDetail.date}</p>
            <Image src="/assets/icons/point.svg" alt="dot" width={4} height={4}/>
            <p>{blogDetail.readTime}</p>
        </div>
        <div className="relative w-full h-[75vh] rounded-xl overflow-hidden mt-16">
            <Image
                src={blogDetail.mainImage}
                alt="Detail News Image"
                fill
                className="object-cover"
                priority
                />
        </div>
        <div className="px-4 md:px-20">
            {blogDetail.sections.map((section, index) => (
                <TitlePara
                    key={index}
                    title={section.title}
                    para={section.para}
                />
            ))}
        </div>
        <hr className="w-full mt-10"/>
        <OurProjects/>
        <div
            className={`relative z-20 w-screen max-w-screen overflow-x-hidden
            ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} py-10 md:py-20`}
           >
            <div className="hidden md:block">
                <News theme={theme} />
            </div>
            <div className="md:hidden">
                <NewsMobile />
            </div>
        </div>
    </section>
  );
}
