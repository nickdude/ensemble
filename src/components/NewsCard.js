"use client"

import Image from "next/image"

export default function NewsCard(){
    return(
        <div className=" h-[455px] rounded-lg relative">
            <Image src="/assets/news/news1.jpg" alt="News 1" fill className="object-cover rounded-lg" />
                <div className="absolute z-10 bottom-10 left-10 text-white rounded-md w-[350px]">
                    <p className="font-bricolage font-normal text-xs text-gray-200">08/03/2024</p>
                    <h1 className="font-bricolage text-white text-xl">2024 International Women’s Day</h1>
                    <div className="arrow-overlay-news">
                        <img src="/assets/icons/up_arrow.svg" alt="Project Image" />
                    </div>
                    <p className="font-bricolage font-normal text-xs text-gray-200">This International Women's Day, celebrating the future and the inspirational young women leading the charge for change.</p>
                </div>
        </div>  
    )
}