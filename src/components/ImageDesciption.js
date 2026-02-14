"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ImageDescription({ title, description, image, right = false }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <section
      className={`py-20 px-4 md:px-16 flex items-center ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } flex items-center ${
        right ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
      }`}
    >
      {/* Image */}
      <div className="relative w-full md:w-1/2 h-[590px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {/* Text */}
      <div
        className={`w-full md:w-1/2 h-[590px] flex flex-col justify-center gap-5 ${
          right ? "pr-0 md:pr-16" : "pl-0 md:pl-16"
        }`}
      >
        <h1 className="font-roboto font-semibold text-[32px]">
          {title}
        </h1>

        <p className="font-roboto font-light text-2xl text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
