"use client";

import { useEffect, useRef, useState } from "react";

const timelineData = [
  {
    year: "2021 – 2024",
    title: "Where we’ve been",
    description:
      "ISO 14001 Certification Received. Delivered over 50 projects in LEED. Training our Design Professionals in LEED AP.",
    active: true,
  },
  {
    year: "2024 – 2025",
    description: "LEED Certification for our offices",
  },
  {
    year: "2025 – 2026",
    description: "Install 1.25 MW WTG",
  },
  {
    year: "2026 – 2029",
    description: "Plants powered 100% by Solar",
    highlight: true,
  },
];

export default function Timeline() {
  return (
    <div className="relative max-w-6xl mx-auto py-32">
      {/* CENTER LINE */}
      {/* <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 -translate-x-1/2" /> */}

      <div className="">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ year, title, description, active, highlight }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // animate once
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-[1fr_auto_1fr] items-center
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
      `}
    >
      {/* LEFT – YEAR */}
      <div className="text-right pr-12">
        <h3
          className={`font-poppins text-[32px] font-semibold ${
            active ? "text-black" : "text-gray-400"
          }`}
        >
          {year}
        </h3>
      </div>

      {/* CENTER – MARKER + LEFT ARROW */}
      <div className="relative flex items-center justify-center">
        {/* vertical marker */}
        <div
          className={`h-48 rounded-full
            ${active ? "bg-black w-[4px]" : "bg-gray-400  w-[2px]"}
          `}
        />

        {/* LEFT POINTING ARROW */}
        <div
          className={`absolute right-full w-0 h-0
            border-t-[8px] border-b-[8px] border-r-[10px]
            border-t-transparent border-b-transparent
            ${active ? "border-r-black" : "border-r-gray-400"}
          `}
        />
      </div>

      {/* RIGHT – CONTENT */}
      <div className="pl-12 max-w-md">
        {title && (
          <h4 className="text-[20px] font-medium font-roboto text-black mb-2">
            {title}
          </h4>
        )}
        <p
          className={`text-[20px] font-roboto ${
            highlight
              ? "text-sky-500 font-semibold"
              : "text-gray-500"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
