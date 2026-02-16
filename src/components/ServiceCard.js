"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ img, title, link, description, bgImage }) {
  return (
    <div
      className="
        group relative overflow-hidden
        border border-gray-300 rounded-lg
        h-[600px] w-[85vw] md:w-[30vw] md:h-[32vw]
        flex flex-col md:block
      "
    >
      {/* MOBILE: Image at top - DESKTOP: Background on hover */}
      <div
        className="
          relative md:absolute inset-0 z-0
          h-1/2 md:h-full
          md:translate-y-full
          md:group-hover:translate-y-0
          transition-transform duration-[10000ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
        "
      >
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* ARROW */}
      <Link href={link}>
        <div className="absolute md:relative z-20 flex justify-end w-full p-5 top-0 right-0">
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
              width={24}
              height={24}
            />
          </div>
        </div>
      </Link>

      {/* CONTENT */}
      <div
        className="
          relative z-10 flex flex-col p-5 gap-4
          h-1/2 md:h-auto
          translate-y-0 opacity-100
          md:group-hover:translate-y-12 md:group-hover:opacity-0
          md:transition-all md:duration-[1000ms]
          ease-[cubic-bezier(0.4,0,0.2,1)]
        "
      >
        <Image src={img} alt={title} width={64} height={64} />
    
        <h1 className="font-poppins font-medium text-xl md:text-3xl">
          {title}
        </h1>

        <p className="font-poppins font-light text-sm md:text-lg leading-[20px] md:leading-[25px]">
          {description}
        </p>
      </div>
    </div>
  );
}

