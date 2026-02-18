"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import projectsData from "@/data/home/projectsData";
import { usePathname } from "next/navigation";

export default function ProjectCaseGallery() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const slug = pathname.split('/')[2];
  const projectData = projectsData.projectDetail[slug];
  const gallery = projectData?.gallery ?? [];

  useEffect(() => setMounted(true), []);

  if (!mounted || !projectData) return null;
  
  return (
    <section className={`w-full px-4 md:px-16 py-20 text-black ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* <div  className="grid grid-cols-12 auto-rows-[640px] gap-8"> */}
      <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[640px] gap-8">
        {/* ROW 1 — Image + Text */}
        <div className="col-span-1 md:col-span-6 relative rounded-xl overflow-hidden">
          {gallery[0]?.image && (
            <Image
              src={gallery[0].image}
              alt={gallery[0].alt || projectData?.title || "Project image"}
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          )}
        </div>

        <div className="col-span-1 md:col-span-6 relative flex flex-col justify-center leadig-[34px] gap-10">
          <div className="flex flex-col gap-10">
            <h3 className="font-roboto text-2xl font-semibold">The Challenge</h3>
            <p className="text-gray-600 font-roboto text-2xl font-light">
              {projectData.challenges}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-roboto text-2xl font-semibold">Our Approach</h3>
            {projectData.approach?.length > 0 &&projectData.approach.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-gray-600 font-roboto text-2xl font-light mt-1">•</span>
                <p className="text-gray-600 font-roboto text-2xl font-light">
                  {item}
                </p>
              </div>
               ))}
          </div>
        </div>

        {/* ROW 2 — Two Images */}
        <div className="col-span-1 md:col-span-6 relative rounded-xl overflow-hidden">
          {gallery[1]?.image && (
            <Image
              src={gallery[1].image}
              alt={gallery[1].alt || projectData?.title || "Project image"}
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          )}
        </div>

        <div className="col-span-1 md:col-span-6 relative rounded-xl overflow-hidden">
          {gallery[2]?.image && (
            <Image
              src={gallery[2].image}
              alt={gallery[2].alt || projectData?.title || "Project image"}
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          )}
        </div>

        {/* ROW 3 — Wide Image */}
        <div className="col-span-1 md:col-span-12 relative rounded-xl overflow-hidden">
          {gallery[3]?.image && (
            <Image
              src={gallery[3].image}
              alt={gallery[3].alt || projectData?.title || "Project image"}
              width={1600}
              height={800}
              className="object-cover w-full h-full"
            />
          )}
        </div>

        {/* ROW 4 — Testimonial + Image */}
        <div className="col-span-1 md:col-span-6 relative rounded-xl p-4 md:p-24 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
                <Image
                    src={projectData.authorImage}
                    alt={projectData.authorName}
                    width={80}
                    height={48}
                    className=""
                />
                <div className="text-center md:text-left">
                    <p className="text-[20px] md:text-[32px] font-poppins font-normal">{projectData.authorName}</p>
                    <p className="text-sm font-poppins text-gray-600 mb-3">
                    {projectData.authorDesignation}
                    </p>
                </div>
            </div>
            <div>
                <p className="text-center md:text-left text-gray-600 font-poppins font-light text-[16px] md:text-2xl w-[100%] md:w-[80%]">
                {projectData.authorSays}
                </p>
            </div>
        </div>

        <div className="col-span-1 md:col-span-6 relative rounded-xl overflow-hidden">
          {gallery[4]?.image && (
            <Image
              src={gallery[4].image}
              alt={gallery[4].alt || projectData?.title || "Project image"}
              width={1000}
              height={700}
              className="object-cover w-full h-full"
            />
          )}
        </div>

      </div>
    </section>
  );
}
