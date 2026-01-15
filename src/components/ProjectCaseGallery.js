"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ProjectCaseGallery() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  
  return (
    <section className={`w-full px-4 md:px-16 py-20 text-black ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* <div  className="grid grid-cols-12 auto-rows-[640px] gap-8"> */}
      <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[640px] gap-8">
        {/* ROW 1 — Image + Text */}
        <div className="col-span-1 md:col-span-6 relative rounded-xl overflow-hidden">
          <Image
            src="/assets/project-detail/project-detail1.jpg"
            alt="Project Exterior"
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="col-span-1 md:col-span-6 relative flex flex-col justify-center leadig-[34px] gap-10">
          <div className="flex flex-col gap-10">
            <h3 className="font-roboto text-2xl font-semibold">The Challenge</h3>
            <p className="text-gray-600 font-roboto text-2xl font-light">
              The existing home had several constraints that made it feel
              disconnected from the couple’s desired lifestyle. Its outdated
              design featured a closed-off layout, where separate rooms
              disrupted the natural flow of energy and light.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <h3 className="font-roboto text-2xl font-semibold">Our Approach</h3>
            <p className="text-gray-600 font-roboto text-2xl font-light">
              To address these challenges, our team adopted a holistic design
              approach that prioritized functionality, aesthetics, and the
              seamless integration of nature-inspired elements.
            </p>
          </div>
        </div>

        {/* ROW 2 — Two Images */}
        <div className="col-span-1 md:col-span-6 relative rounded-xl overflow-hidden">
          <Image
            src="/assets/project-detail/project-detail2.png"
            alt="Construction"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="col-span-1 md:col-span-6 relative rounded-xl overflow-hidden">
          <Image
            src="/assets/project-detail/project-detail3.jpg"
            alt="Office Interior"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* ROW 3 — Wide Image */}
        <div className="col-span-1 md:col-span-12 relative rounded-xl overflow-hidden">
          <Image
            src="/assets/project-detail/project-detail4.png"
            alt="Dining Area"
            width={1600}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        {/* ROW 4 — Testimonial + Image */}
        <div className="col-span-1 md:col-span-6 relative rounded-xl p-4 md:p-24 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
                <Image
                    src="/assets/project-detail/project-refer.jpg"
                    alt="Client"
                    width={80}
                    height={48}
                    className=""
                />
                <div className="text-center md:text-left">
                    <p className="text-[20px] md:text-[32px] font-poppins font-normal">Maria</p>
                    <p className="text-sm font-poppins text-gray-600 mb-3">
                    Manager at We Work
                    </p>
                </div>
            </div>
            <div>
                <p className="text-center md:text-left text-gray-600 font-poppins font-light text-[16px] md:text-2xl w-[100%] md:w-[80%]">
                Our office has been completely transformed into an inspiring and
                functional space that reflects our vision perfectly. The
                open-concept design has enhanced collaboration and brought in so
                much natural light.
                </p>
            </div>
        </div>

        <div className="col-span-1 md:col-span-6 relative rounded-xl overflow-hidden">
          <Image
            src="/assets/project-detail/project-detail5.jpg"
            alt="Office Interior"
            width={1000}
            height={700}
            className="object-cover w-full h-full"
          />
        </div>

      </div>
    </section>
  );
}
