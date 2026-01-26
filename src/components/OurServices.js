"use client";

import ServiceCard from "./ServiceCard";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function OurServices() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

    const service = [
        {
            img: "/assets/icons/construction.svg",
            title: "General Contracting",
            description: "As a GC contractor, we specialize in Civil and Interior, Mechanical, Electrical, and Plumbing (MEP) works. We ensure seamless project execution and deliver world-class fit-outs within timelines"
        },  
        {
            img: "/assets/icons/consultancy.svg",
            title: "Design Consultancy",
            description: "Our Design Consultancy transforms ideas into innovative, functional workspaces that enhance productivity, employee satisfaction, and brand perception, delivering bespoke designs aligned with client needs."
        },
        {   
            img: "/assets/icons/build.svg",
            title: "Design and Build",
            description: "Streamline your workspace transformation with our Design and Build service, integrating design and construction for efficient, cost-effective and seamless project delivery."
        }
    ]
    
  return (
   <section className={`w-full flex items-center flex-col ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} py-10 md:py-20 px-4 md:px-16`}>
      <h1 className="font-poppins font-medium text-[28px] md:text-6xl leading-[57px] tracking-normal mb-10">Our Services</h1>
        <div className="flex items-center justify-center gap-5">
            {service.map((item, index) => (
                <ServiceCard
                    key={index}
                    img={item.img}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
   </section>
  );
}