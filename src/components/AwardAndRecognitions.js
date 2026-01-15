"use clients"

import Image from "next/image"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AwardAndRecognitions(){
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    return(
        <section className={`py-20 px-4 md:px-16 space-y-8 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <h1 className="font-poppins font-semibold text-[32px] md:text-[56px] leading-10 md:leading-15">Awards & <br/>Recognitions</h1>
            <p className="font-roboto font-normal text-lg md:text-2xl text-gray-600">A Legacy of Success: Celebrating Our Journey in Design Excellence</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="flex flex-col items-center h-[315px] w-full md:w-[311px] bg-gray-300 p-6 gap-3 rounded-lg">
                    <Image src="/assets/icons/construction.svg" alt="Excellence in Interior Design" width={48} height={48}/>
                    <h1 className="font-roboto font-medium text-xl">Excellence in Interior Design</h1>
                    <p className="font-roboto text-lg text-gray-600 text-center mt-5">Acknowledged for outstanding interior design work in the "Luxury Haven Hotel" project.</p>
                </div>
                 <div className="flex flex-col items-center h-[315px] w-full md:w-[311px] bg-gray-300 p-6 gap-3 rounded-lg">
                    <Image src="/assets/icons/construction.svg" alt="Excellence in Interior Design" width={48} height={48}/>
                    <h1 className="font-roboto font-medium text-xl">Excellence in Interior Design</h1>
                    <p className="font-roboto text-lg text-gray-600 text-center mt-5">Acknowledged for outstanding interior design work in the "Luxury Haven Hotel" project.</p>
                </div>
                 <div className="flex flex-col items-center h-[315px] w-full md:w-[311px] bg-gray-300 p-6 gap-3 rounded-lg">
                    <Image src="/assets/icons/construction.svg" alt="Excellence in Interior Design" width={48} height={48}/>
                    <h1 className="font-roboto font-medium text-xl">Excellence in Interior Design</h1>
                    <p className="font-roboto text-lg text-gray-600 text-center mt-5">Acknowledged for outstanding interior design work in the "Luxury Haven Hotel" project.</p>
                </div>
                 <div className="flex flex-col items-center h-[315px] w-full md:w-[311px] bg-gray-300 p-6 gap-3 rounded-lg">
                    <Image src="/assets/icons/construction.svg" alt="Excellence in Interior Design" width={48} height={48}/>
                    <h1 className="font-roboto font-medium text-xl">Excellence in Interior Design</h1>
                    <p className="font-roboto text-lg text-gray-600 text-center mt-5">Acknowledged for outstanding interior design work in the "Luxury Haven Hotel" project.</p>
                </div>
            </div>
        </section>
    )
}