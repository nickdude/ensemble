"use client";

import Image from "next/image";

export default function InsightCard({img, title, description, width="w-[35%]"}) {
  return (
    <div className={`${width} flex flex-col`}>
        <Image src={img} alt={title} width={420} height={300} className="object-cover"/>
        <h2 className="font-poppins font-normal text-[18px] md:text-[28px] my-2">{title}</h2>
        <p className="font-avenir font-light text-[14px] md:text-sm">{description}</p>
    </div>
  );
}   