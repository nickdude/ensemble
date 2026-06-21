"use client"

import Image from "next/image"
import Link from "next/link";

export default function NewsCard({ slug, title, image, date, link }){
    return(
        <Link href={link} className="group cursor-pointer">
            <div className="rounded-lg md:relative md:h-[455px] flex flex-col md:block">
                <div className="relative h-[260px] md:h-full w-full">
                    <Image src={image} alt={slug} fill className="object-cover rounded-lg" />
                    <div className="absolute inset-0 bg-black opacity-60 pointer-events-none rounded-lg"></div>
                </div>
                    <div className="relative z-10 mt-4 md:mt-0 text-[#6C6C6C] md:text-white rounded-md px-4 md:px-0 w-full md:w-[350px] md:absolute md:bottom-10 md:left-10">
                        <p className="font-bricolage font-normal text-xs text-[#6C6C6C] md:text-white ">{date}</p>
                        <h3 className="font-bricolage text-black md:text-white text-xl">{slug}</h3>
                        {/* <div className="arrow-overlay-news hidden md:block">
                            <img src="/assets/icons/up_arrow.svg" alt="Project Image" />
                        </div> */}
                        <p className="font-bricolage font-normal text-xs text-[#6C6C6C] md:text-white ">{title}</p>
                    </div>
            </div>  
        </Link>
    )
}