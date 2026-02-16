"use client";

import Image from "next/image";
import Button from "./Button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { aboutUsData } from "@/data/home/aboutUsData";

export default function OurTeam(){
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const { ourTeam } = aboutUsData;

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const displayedMembers = showAll ? ourTeam.members : ourTeam.members.slice(0, 5);

    return(
        <section className={`py-20 px-4 md:px-16 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="w-80 flex flex-col gap-6 justify-center">
                        <h1 className="font-poppins font-medium text-[64px] leading-[68px]">{ourTeam.title}</h1>
                        <p className="font-avenir font-light text-lg text-gray-600 leading-[25px]">{ourTeam.description}</p>
                        <button 
                            onClick={() => setShowAll(!showAll)}
                            className={`lux-btn rounded-sm w-fit ${
                                theme === "dark" 
                                    ? "bg-white text-black" 
                                    : "bg-black text-white"
                            }`}
                        >
                            <span>{showAll ? 'SHOW LESS' : 'VIEW ALL'}</span>
                        </button>
                    </div>
                    {displayedMembers.map((member, index) => (
                    <div key={index} className="w-full md:w-[396px] h-[505px] mt-5">
                        <div className="relative w-full h-[419px] mb-5">
                            <Image src={member.image} alt={member.name} className="object-cover rounded-lg" fill priority/>
                        </div>
                        <h1 className="font-poppins font-medium text-[28px]">{member.name}</h1>
                        <p className="font-avenir font-light text-sm">{member.position}</p>
                    </div>
                    ))}
                </div>
        </section>
    )
}