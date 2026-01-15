"use client"

import Image from "next/image"
import Button from "./Button"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function OurTeam(){
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    return(
        <section className={`py-20 px-4 md:px-16 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="w-80 flex flex-col gap-6 justify-center">
                        <h1 className="font-poppins font-medium text-[64px] leading-[68px]">Our <br/>Team</h1>
                        <p className="font-avenir font-light text-lg text-gray-600 leading-[25px]">The Skill & Soul Behind Our Projects. Meet the talented designers, planners, and technologists who bring innovative visions to life.</p>
                        <Button label="VIEW ALL " theme="light"/>
                    </div>
                    <div className="w-full md:w-[396px] h-[505px] ">
                        <div className="relative w-full h-[419px] ">
                            <Image src="/assets/aboutus/team1.jpg" alt="Vikas Rathod" className="object-cover rounded-lg" fill priority/>
                            
                        </div>
                        <h1 className="font-poppins font-medium text-[28px]">Vikas Rathod</h1>
                        <p className="font-avenir font-light text-sm">Vice Chairman | MD</p>
                    </div>
                    <div className="w-full md:w-[396px] h-[505px] ">
                        <div className="relative w-full h-[419px] ">
                            <Image src="/assets/aboutus/team1.jpg" alt="Vikas Rathod" className="object-cover rounded-lg" fill priority/>
                            
                        </div>
                        <h1 className="font-poppins font-medium text-[28px]">Vikas Rathod</h1>
                        <p className="font-avenir font-light text-sm">Vice Chairman | MD</p>
                    </div>
                    <div className="w-full md:w-[396px] h-[505px] ">
                        <div className="relative w-full h-[419px] ">
                            <Image src="/assets/aboutus/team1.jpg" alt="Vikas Rathod" className="object-cover rounded-lg" fill priority/>
                            
                        </div>
                        <h1 className="font-poppins font-medium text-[28px]">Vikas Rathod</h1>
                        <p className="font-avenir font-light text-sm">Vice Chairman | MD</p>
                    </div>
                    <div className="w-full md:w-[396px] h-[505px] ">
                        <div className="relative w-full h-[419px] ">
                            <Image src="/assets/aboutus/team1.jpg" alt="Vikas Rathod" className="object-cover rounded-lg" fill priority/>
                            
                        </div>
                        <h1 className="font-poppins font-medium text-[28px]">Vikas Rathod</h1>
                        <p className="font-avenir font-light text-sm">Vice Chairman | MD</p>
                    </div>
                    <div className="w-full md:w-[396px] h-[505px] ">
                        <div className="relative w-full h-[419px] ">
                            <Image src="/assets/aboutus/team1.jpg" alt="Vikas Rathod" className="object-cover rounded-lg" fill priority/>
                            
                        </div>
                        <h1 className="font-poppins font-medium text-[28px]">Vikas Rathod</h1>
                        <p className="font-avenir font-light text-sm">Vice Chairman | MD</p>
                    </div>

                </div>
        </section>
    )
}