"use client";

import Image from "next/image";

export default function ServiceCard({img, title, description}) {
  return (
            <div className="border border-gray-300 rounded-lg flex flex-col items-center justify-between w-[435px] h-[457px] mx-5 ">
                    <div className="flex justify-end w-full p-5">
                      <Image src="/assets/icons/red_upper_arrow.svg" alt="service1" width={24} height={24} className=""/>
                    </div>
                    <div className="flex flex-col p-5 gap-4">
                      <Image src={img} alt={title} width={64} height={64} />
                      <h1 className="font-poppins font-medium text-3xl">{title}</h1>
                      <p className="font-poppins font-light text-lg leading-[25px]">{description}</p>
                    </div>    
            </div>
  );
}   