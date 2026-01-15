"use client";

"use client";

export default function TitleSubtitle({ subtitle, title }) {
    return (
       <>
            <h2 className="font-roboto text-[22px] md:text-[32px] font-medium leading-[20px] mb-3">
              {title}
            </h2>
            <p className="text-gray-600 font-roboto text-[16px] md:text-lg leading-[26px]">
              {subtitle}
            </p>
       </>
    );
    }