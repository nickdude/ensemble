"use client";

import Image from "next/image";

export default function SplashCard({ img, title, description }) {
  return (
    <div
      className="
        relative group
        w-[350px] h-[450px]
        bg-gray-100 dark:bg-gray-800
        rounded-xl overflow-hidden
        cursor-pointer
      "
    >               
        {/* BACKDROP */}
        <div
            className=" 
            absolute top-0 left-0 w-full h-full
            bg-gradient-to-b from-transparent via-black/30 to-black/70
            z-10
            "
        ></div>

        {/* CONTENT */}
        <div
            className="
            relative z-20 flex flex-col items-start p-6 h-full justify-end gap-4
            "
        >
            <Image src={img} alt={title} width={48} height={48} />

            <h2 className="font-poppins font-semibold text-2xl text-white">
                {title}
            </h2>

            <p className="font-poppins font-light text-base text-white/90">
                {description}
            </p>
        </div>
    </div>
  );
}