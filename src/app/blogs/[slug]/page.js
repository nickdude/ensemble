"use client";

import News from "@/components/News";
import OurProjects from "@/components/OurProjects";
import TitlePara from "@/components/TitlePara";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DetailBlog() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
  return (
    <section className={`py-10 px-4 md:py-20 md:px-16 flex flex-col items-center justify-center gap-4 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <h1 className="font-poppins font-semibold text-xl md:text-4xl">Introducing MoNo Gallery</h1>
        <p className="font-poppins font-light text-sm md:text-[22px]">Ensemble’s Architecture is excited to announce our new in-house creative project – MoNo Gallery.</p>
        <hr className=" w-full"/>
        <div className="flex gap-5 font-poppins text-sm md:text-lg">
            <p>Jessica Kim</p>
            <Image src="/assets/icons/point.svg" alt="dot" width={4} height={4}/>
            <p>Saturday, September 21, 2024</p>
            <Image src="/assets/icons/point.svg" alt="dot" width={4} height={4}/>
            <p>2 min read</p>
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
        <div className="px-4 md:px-20">
            <TitlePara
                title="Introduction of the MoNo Gallery"
                para="Ensemble’s Architecture, a renowned name in the world of innovative design and construction, is thrilled to announce the launch of its latest in-house creative project, the MoNo Gallery. This ambitious initiative is poised to redefine the way art, architecture, and community interact, promising a groundbreaking experience for both creators and patrons alike."
            />
            <TitlePara
                title="Location and Design Philosophy" 
                para="Situated in the heart of the bustling city, the MoNo Gallery is set to serve as a dynamic hub for contemporary art and cultural exchange. Designed to foster creativity and collaboration, the gallery will provide a space where artists can showcase their work and engage with the public in meaningful ways. The gallery’s unique design, conceptualized by Ensemble’s award-winning team, seamlessly blends modern aesthetics with functional elegance, offering a versatile environment for a wide array of artistic expressions."
            />
            <TitlePara
                title="Community-Building through Art" 
                para="The MoNo Gallery is not just a space for exhibitions; it represents a vision of community-building through art. Ensemble’s Architecture believes in the transformative power of art to inspire, connect, and catalyze change. Through this project, they aim to create an inclusive platform that supports emerging artists and encourages dialogue between diverse cultural perspectives."
            />
            <TitlePara
                title="Events and Launch Exhibition" 
                para="MoNo Gallery will host a variety of events including art exhibitions, workshops, and panel discussions, enhancing its role as a cultural beacon in the city. The gallery's launch will feature a curated exhibition of works by local and international artists, creating a vibrant tapestry of voices and visions. This inaugural event is expected to draw art enthusiasts, collectors, and critics from across the globe, marking the MoNo Gallery as a must-visit destination on the international art scene. MoNo Gallery will host a variety of events including art exhibitions, workshops, and panel discussions, enhancing its role as a cultural beacon in the city. The gallery's launch will feature a curated exhibition of works by local and international artists, creating a vibrant tapestry of voices and visions. This inaugural event is expected to draw art enthusiasts, collectors, and critics from across the globe, marking the MoNo Gallery as a must-visit destination on the international art scene. MoNo Gallery will host a variety of events including art exhibitions, workshops, and panel discussions, enhancing its role as a cultural beacon in the city. The gallery's launch will feature a curated exhibition of works by local and international artists, creating a vibrant tapestry of voices and visions. This inaugural event is expected to draw art enthusiasts, collectors, and critics from across the globe, marking the MoNo Gallery as a must-visit destination on the international art scene. MoNo Gallery will host a variety of events including art exhibitions, workshops, and panel discussions, enhancing its role as a cultural beacon in the city. The gallery's launch will feature a curated exhibition of works by local and international artists, creating a vibrant tapestry of voices and visions. This inaugural event is expected to draw art enthusiasts, collectors, and critics from across the globe, marking the MoNo Gallery as a must-visit destination on the international art scene."
            />
            <TitlePara
                title="Digital Expansion and Accessibility" 
                para="In addition to its physical space, the gallery will also offer a cutting-edge digital platform, providing virtual tours and online exhibits to reach a global audience. This initiative underscores Ensemble’s commitment to accessibility and innovation in the arts, ensuring that the transformative experience of the MoNo Gallery extends beyond its immediate geographical boundaries."
            />
            <TitlePara
                title="Conclusion: A Testament to Innovation" 
                para="As Ensemble’s Architecture continues to push the boundaries of creativity and design, the MoNo Gallery stands as a testament to their passion for cultivating spaces that inspire and unite. Through this pioneering project, Ensemble’s seeks not only to elevate the local art scene but also to contribute meaningfully to the global dialogue on art and architecture."
            />
        </div>
        <hr className="w-full mt-10"/>
        <OurProjects/>
        <News/>
    </section>
  );
}