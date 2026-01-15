"use client";

import FourPointSection from "@/components/FourPointSection";
import OurProjects from "@/components/OurProjects";
import OurServiceHero from "@/components/OurServiceHero";

export default function Services() {
    const ServicesData = {
          design : {
            img: "/assets/services/design_con.jpg",
            title: "Design",
            break: "Consulting",
            description: "Streamline your workspace transformation with our Design and Build service, integrating design and construction for efficient, cost-effective and seamless project delivery.",
            points: [
                {
                    title: "Performance-Led Design",
                    description: "Combine creativity and precision for impactful solutions.",
                    icon: "/assets/icons/tick.svg"
                },
                {
                    title: "Client-Centric Approach",
                    description: "Tailored to meet your specific needs and vision.",
                    icon: "/assets/icons/tick.svg"
                },
                {
                    title: "Creative Expertise",
                    description: "Delivering innovative, high-quality designs.",
                    icon: "/assets/icons/tick.svg"
                },
                {
                    title: "Diverse Styles",
                    description: "From contemporary to timeless, we adapt to every aesthetic.",
                    icon: "/assets/icons/tick.svg"
                }   
            ],
          },
          general : {
            img: "/assets/services/general.jpg",
            title: "General",
            break: "Contracting",
            description: "As a GC contractor, we specialize in Civil and Interior, Mechanical, Electrical, and Plumbing (MEP) works. We ensure seamless project execution and deliver world-class fit-outs within timelines",
            points: [
                {
                    title: "Project Scoping",
                    description: "Outline the scope and requirements of your project with precision.",
                    icon: "/assets/icons/tick.svg"
                },
                {
                    title: "Outline Design & Planning",
                    description: "Craft detailed designs and execution plans tailored to your needs.",
                    icon: "/assets/icons/tick.svg"
                },
                {
                    title: "Project Management",
                    description: "Ensure smooth project flow and on-time delivery.",
                    icon: "/assets/icons/tick.svg"
                },
                {
                    title: "Design & Compliance",
                    description: "Maintain strict adherence to design standards and regulatory compliance.",
                    icon: "/assets/icons/tick.svg"
                }   
            ],
          },
          build: {
            img: "/assets/services/build.jpg",
            title: "Design &",
            break: "Build",
            description: "Our Design Consultancy transforms ideas into innovative, functional workspaces that enhance productivity, employee satisfaction, and brand perception, delivering bespoke designs aligned with client needs.",
            points: [
                {
                    title: "Strategic Planning",
                    description: "Developing tailored strategies for seamless project execution.",
                    icon: "/assets/icons/tick.svg"
                },
                {
                    title: "Interior Planning & Design",
                    description: "Crafting intuitive spaces with functional and aesthetic precision.",
                    icon: "/assets/icons/tick.svg"
                },
                {
                    title: "Agile Technology",
                    description: "Integrating modern tech for adaptable and innovative solutions.",
                    icon: "/assets/icons/tick.svg"
                },
                {
                    title: "Sustainable Design",
                    description: "Committed to eco-friendly practices for a better future.",
                    icon: "/assets/icons/tick.svg"
                }   
            ],
          },
          base: {
            img: "/assets/services/base.jpg",
            title: "Base",
            break: "Build",
            description: "Base Build Finishing involves design, landscaping, and lighting, with attention to MEP and key areas such as the main lobby,lift lobby,toilets, food courts, and external spaces like the amphitheater.",
            points: [
                {
                    title: "Project Scoping",
                    description: "Outline the scope and requirements of your project with precision.",
                    icon: "/assets/icons/tick.svg"
                },
                {
                    title: "Outline Design & Planning",
                    description: "Craft detailed designs and execution plans tailored to your needs.",
                    icon: "/assets/icons/tick.svg"
                },
                {
                    title: "Project Management",
                    description: "Ensure smooth project flow and on-time delivery.",
                    icon: "/assets/icons/tick.svg"
                },
                {
                    title: "Design & Compliance",
                    description: "Maintain strict adherence to design standards and regulatory compliance.",
                    icon: "/assets/icons/tick.svg"
                }   
            ],
          },



    }
        
    return (
      <>
        <OurServiceHero/>
        <FourPointSection 
           details={ServicesData?.design}/>
        <FourPointSection 
           details={ServicesData?.general}/>
        <FourPointSection 
           details={ServicesData?.build}/>
        <FourPointSection 
           details={ServicesData?.base}/>
        <OurProjects/>
      </>
    );
}   