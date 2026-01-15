"use client";

import Image from "next/image";
import Button from "./Button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


function NewsCard({ image, title, desc, className = "" }) {
  return (
    <div
      className={`relative w-[420px] h-[520px] rounded-xl overflow-hidden shrink-0 ${className}`}
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 text-white z-10">
        <h3 className="text-xl font-medium mb-2 flex items-center gap-1">
          {title}
            <Image src="/assets/icons/up_arrow.svg" alt="Up Arrow" width={8} height={8} />    
        </h3>
        <p className="text-sm text-white/80">{desc}</p>
      </div>
    </div>
  );
}

export default function News() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <section className={`w-full py-10 md:py-40 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className="flex flex-col md:flex-row items-center gap-1">
                  <div className="w-full md:w-80 flex flex-col gap-3 md:gap-6 items-center md:items-start md:mx-16 mb-8 md:mb-0">
                        <h1 className="font-poppins font-medium text-[28px] md:w-80 md:text-[64px] leading-[68px]">In the news.</h1>
                        <p className="font-avenir font-light text-center w-70 md:w-80 md:text-left text-[16px] md:text-lg text-gray-600 leading-[25px]">Stay updated with our latest projects, press features, and industry insights.</p>
                        <Button label="KNOW MORE" theme="light"/>
                  </div>
                   <div className="relative flex items-center">
                        <NewsCard
                            image="/assets/news/news1.jpg"
                            title="Workspaces Redefined"
                            desc="Designing collaborative environments for the future."
                            className="z-10"
                        />

                        <NewsCard
                            image="/assets/news/news2.jpg"
                            title="Coming Soon!"
                            desc="Our world is changing, a revolution is unfolding in front of our eyes."
                            className="-ml-32 z-20 h-[580px]"
                        />

                        <NewsCard
                            image="/assets/news/news3.jpg"
                            title="Modern Interiors"
                            desc="Blending aesthetics with functionality."
                            className="-ml-32 z-10"
                        />
                   </div>
        </div>
    </section>
  );
}