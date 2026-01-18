"use client";

import AboutUsHero from "@/components/AboutUsHero";
import AwardAndRecognitions from "@/components/AwardAndRecognitions";
import CountSection from "@/components/CountSection";
import ImageDesciption from "@/components/ImageDesciption";
import InquiryFrom from "@/components/InquiryForm";
import OurTeam from "@/components/OurTeam";
import Image from "next/image";

export default function AboutUs(){
    return(
        <main>
            <AboutUsHero/>
            <CountSection text="red"/>
            <ImageDesciption/>
            <ImageDesciption right="true"/>
            <AwardAndRecognitions/>
            <OurTeam/>
            <InquiryFrom/>
        </main>
    )
}