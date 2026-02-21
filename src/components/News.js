"use client";

import Image from "next/image";
import Button from "./Button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import homeData from "@/data/home/homeData";
import Link from "next/link";

function NewsCard({ image, title, desc, link, style, onClick }) {
  return (
    <div
      onClick={onClick}
      style={style}
      className="
        absolute cursor-pointer
        w-[473px] h-[530px]
        rounded-xl overflow-hidden
        transition-all duration-700 ease-in-out
      "
    >
      <Image src={image} alt={title} fill className="object-cover" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute bottom-6 left-6 right-6 text-white z-10">
        <Link href={link}>
          <h3 className="text-xl font-medium mb-2 flex items-center gap-1">
            {title}
            <Image
              src="/assets/icons/up_arrow.svg"
              alt="Up Arrow"
              width={8}
              height={8}
            />
          </h3>
        </Link>
        <p className="text-sm text-white/80">{desc}</p>
      </div>
    </div>
  );
}

export default function News() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(1); // middle card active
  const data = homeData.news;

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

 const getStyle = (index) => {
  const totalCards = data.newsItems.length;
  const diff = index - active;

  const base = {
    transition:
      "transform 900ms cubic-bezier(0.22, 1, 0.36, 1), opacity 600ms ease, filter 600ms ease",
    willChange: "transform",
  };

  // CENTER - Active card
  if (diff === 0) {
    return {
      ...base,
      transform: "translate3d(0px, 0px, 0px) scale(1.08)",
      zIndex: 30,
      opacity: 1,
      filter: "blur(0px)",
    };
  }

  // LEFT - One position to the left
  if (diff === -1 || (diff === totalCards - 1)) {
    return {
      ...base,
      transform: "translate3d(-220px, 20px, 0px) scale(0.95)",
      zIndex: 20,
      opacity: 0.85,
      filter: "blur(0.4px)",
    };
  }

  // RIGHT - One position to the right
  if (diff === 1 || (diff === -(totalCards - 1))) {
    return {
      ...base,
      transform: "translate3d(220px, 20px, 0px) scale(0.95)",
      zIndex: 20,
      opacity: 0.85,
      filter: "blur(0.4px)",
    };
  }

  // HIDDEN - Cards further away
  return {
    ...base,
    transform: diff < 0 ? "translate3d(-280px, 30px, 0px) scale(0.85)" : "translate3d(280px, 30px, 0px) scale(0.85)",
    zIndex: 10,
    opacity: 0.3,
    filter: "blur(1px)",
  };
};


  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <section className={`w-full md:px-16 py-10 md:py-40 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className="flex flex-col md:flex-row items-center gap-1">
          <div className="w-full md:w-80 flex flex-col gap-3 md:gap-6 items-center md:items-start mb-8 md:mb-0">
              <h1 className="font-poppins font-medium text-[28px] md:w-80 md:text-[64px] leading-[68px]">{data.title}</h1>
              <p className="font-avenir font-light text-center w-70 md:w-80 md:text-left text-[16px] md:text-lg text-gray-600 leading-[25px]">{data.description}</p>
              <Button label={data.buttonLabel} link={data.buttonLink} />
          </div>

        {/* ROTATING CARDS */}
          <div
            className="relative flex items-center bg-red-300 left-[25%]"
            style={{ perspective: "1200px" }}
           >
            {data.newsItems.map((item, index) => (
              <NewsCard
                key={index}
                {...item}
                style={getStyle(index)}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>

      </div>
    </section>
  );
}
