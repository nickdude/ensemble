"use client";

import AboutUsHero from "@/components/AboutUsHero";
import AwardAndRecognitions from "@/components/AwardAndRecognitions";
import CountSection from "@/components/CountSection";
import ImageAndDescription from "@/components/ImageAndDesciption";
import ImageDesciption from "@/components/ImageDesciption";
import InquiryFrom from "@/components/InquiryForm";
import OurTeam from "@/components/OurTeam";
import Image from "next/image";
import { aboutUsData } from "@/data/home/aboutUsData";
  

export default function AboutUs(){
    const missionData = aboutUsData.imageAndDescription.mission;
    const visionData = aboutUsData.imageAndDescription.vision;

    return(
        <main>
            <AboutUsHero/>
            <CountSection text="red"/>
            <ImageAndDescription title={missionData.title} description={missionData.description} image={missionData.image} team={missionData.team}/>
            <ImageAndDescription right="true" title={visionData.title} description={visionData.description} image={visionData.image}/>
            <OurTeam/>
            <ImageDesciption/>
            <ImageDesciption right="true"/>
            <AwardAndRecognitions/>
            <InquiryFrom/>
        </main>
    )
}