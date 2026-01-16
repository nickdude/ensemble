"use client";

import Image from "next/image";

export default function InsightCard({img, title, description, width="w-[35%]"}) {
  return (
    <div className={`${width} flex flex-col`}>
        <Image src={img} alt={title} width={420} height={300} className="object-cover"/>
          <div className="relative z-20 flex justify-start w-full pt-5">
                <h2 className="font-poppins font-normal text-[18px] md:text-[28px] my-2">{title}</h2>
                 <div
                  className="
                    p-2 rounded-md
                    transition-colors duration-200
                    group-hover:bg-white
                  "
                >
                  <Image
                    src="/assets/icons/red_upper_arrow.svg"
                    alt="service arrow"
                    width={12}
                    height={12}
                  />
                </div>
          </div>

        <p className="font-avenir font-light text-[14px] md:text-sm">{description}</p>
    </div>
  );
}   