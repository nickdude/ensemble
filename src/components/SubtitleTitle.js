"use client";

export default function SubtitleTitle({ subtitle, title }) {
    return (
       <>
         <p className="text-gray-600 font-roboto text-lg leading-[26px] mb-2">{subtitle}</p>
         <p className="font-roboto text-lg md:text-2xl font-medium leading-[20px]">{title}</p>
       </>
    );
    }