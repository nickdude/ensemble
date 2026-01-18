"use client";

import Image from "next/image";
import Timeline from "./Timeline";

export default function JourneyTo2029() {
  return (
    <section className="px-4 md:px-16 py-10 md:py-20 bg-white text-black flex w-full">
            <div className="w-[60%] flex flex-col items-left justify-center">
                <h1 className="font-poppins font-semibold text-5xl px-32">Journey to 2029</h1>
                <Timeline/>
            </div>
            <div className=" overflow-hidden w-full md:w-[40%]">
                  <Image
                        src="/assets/sustainabilty/journey.jpg"
                        alt="Journey"
                        width={800}
                        height={800}
                        // fill
                        className="object-cover"
                        // priority
                    />
            </div>
    </section>
  );
}
