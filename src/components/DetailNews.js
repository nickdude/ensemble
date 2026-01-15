"use client";

import Image from "next/image";
import TitlePara from "./TitlePara";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DetailNews() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
  return (
    <section className={`py-10 md:py-20 px-4 md:px-24 flex flex-col gap-4 border-b border-gray-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <h1 className="font-poppins font-semibold text-xl md:text-4xl w-[80%] leading-8 md:leading-14">Ensemble Architectures Featured for Groundbreaking Wellbeing Policy</h1>
        <p className="font-poppins font-light text-sm md:text-[22px]">Ensemble Architectures Recognized for Advancing Wellbeing and Gender Equity in the Workplace</p>
        <hr className="h-[0.5px]"/>
        <div className="flex gap-5 font-poppins text-sm md:text-lg">
            <p>Pratheek Rajdhani </p>
            <Image src="/assets/icons/point.svg" alt="dot" width={4} height={4}/>
            <p>Sunday, October 21, 2023</p>
            <Image src="/assets/icons/point.svg" alt="dot" width={4} height={4}/>
            <p>3 min read</p>
        </div>
        <div className="relative w-full h-[75vh] rounded-xl overflow-hidden mt-16">
            <Image
                src="/assets/news/detail_news1.jpg"
                alt="Detail News Image"
                fill
                className="object-cover"
                priority
            />
        </div>

        <TitlePara 
            title="A Word of Gratitude" 
            para="We extend our heartfelt thanks to the Australian architecture and gender equity advocacy group for this incredible recognition. It fuels our drive to continue prioritizing the wellbeing of our team while advocating for equity and inclusivity across the industry."/>

        <div className="mt-16 flex flex-col md:flex-row justify-between gap-14 h-[100vh] md:h-[50vh]">
            <div className="w-full md:w-1/2 relative overflow-hidden h-[50vh]">
                <Image  src="/assets/news/detail_news2.jpg" alt="Detail News Image 2"  
                    fill
                    className="object-cover rounded-xl"
                    priority />
            </div>
            <div className="w-full md:w-1/2 relative overflow-hidden h-[50vh]">
                <Image  src="/assets/news/detail_news3.jpg" alt="Detail News Image 3"  
                    fill
                    className="object-cover rounded-xl"
                    priority />
            </div>
        </div>

        <TitlePara 
            title="Our Commitment to Innovation and Advocacy" 
            para="This recognition serves as a testament to our dedication to not only designing exceptional spaces but also cultivating a work environment that reflects our vision for a better future. As architects, we understand the importance of shaping environments that inspire, and that commitment extends to the spaces we create within our own organization."/>
   
        <TitlePara 
            title="A Spotlight on Gender Equity" 
            para="The Australian advocacy group that recognized our efforts is renowned for its dedication to promoting gender equity within the architecture field. Their acknowledgment of our Wellbeing Policy highlights the strides we’ve taken to bridge gaps and create an environment where diversity and inclusion are at the forefront. This feature shines a light on our initiatives, inspiring other organizations to adopt similar measures."/>

         <div className="relative w-full h-[65vh] rounded-xl overflow-hidden mt-16">
            <Image
                src="/assets/news/detail_news4.jpg"
                alt="Detail News Image"
                fill
                className="object-cover"
                priority
            />
        </div>

        <TitlePara 
            title="Championing Wellbeing in the Workplace" 
            para="At Ensemble Architectures, we believe that the wellbeing of our team is integral to our success. Our Wellbeing Policy was meticulously designed to foster a culture where every individual feels valued, supported, and empowered to thrive both professionally and personally. By addressing key aspects such as mental health support, flexible working arrangements, and professional development opportunities, the policy sets a benchmark for progressive workplace practices in the architecture industry."/>
    </section>
  );
}