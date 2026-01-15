"use client";

export default function TitlePara({ title, para }) {
  return (
     <div className="flex flex-col gap-4 mt-14">
            <h1 className="font-poppins font-medium text-lg md:text-[22px]">{title}</h1>
            <p className="font-poppins font-light text-sm md:text-lg">{para}</p>
    </div>
  );
}