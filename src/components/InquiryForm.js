"use client";

import Button from "./Button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { contactData } from "@/data/home/contactData";

export default function InquiryForm(){
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { offices, inquiryForm } = contactData;

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    return(
        <section className={`py-20 px-4 md:px-16  ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className="flex flex-col items-center justify-center md:grid md:grid-cols-[25%25%50%]">
                <div className="font-inter flex items-center md:items-start flex-col gap-4 text-center md:text-left">
                    <h1 className="font-semibold text-[32px]">{offices[0].section}</h1>
                    {offices[0].locations.map((location, index) => (
                        <div key={index}>
                            <h2 className="font-semibold text-[15px] my-2">
                                {location.name}
                            </h2>
                            <p className="font-normal text-[16px]">{location.address}</p>
                        </div>
                    ))}
                    <p>{offices[0].email}</p>
                </div>
                 <div className="font-inter flex items-center md:items-start flex-col gap-4 text-center md:text-left">
                    <h1 className="font-semibold text-[32px]">{offices[1].section}</h1>
                    {offices[1].locations.map((location, index) => (
                        <div key={index}>
                            <h2 className="font-semibold text-[15px] my-2">
                                {location.name}
                            </h2>
                            <p className="font-normal text-[16px]">{location.address}</p>
                        </div>
                    ))}
                </div>
                 <div className="md:px-20 md:border-l md:border-[#f6f6f6]">
                    <h1 className="font-semibold text-[32px]">{inquiryForm.title}</h1>
                
                    <form className="space-y-10">

                        {/* First + Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <input
                            type="text"
                            placeholder="First Name"
                            className="w-full rounded-lg bg-[#f6f6f6] px-6 py-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full rounded-lg bg-[#f6f6f6] px-6 py-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-lg bg-[#f6f6f6] px-6 py-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                        />

                        {/* Message */}
                        <textarea
                            placeholder="Message"
                            rows={4}
                            className="w-full rounded-lg bg-[#f6f6f6] px-6 py-4 text-sm placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                        />

                        {/* Submit */}
                         <Button label={inquiryForm.submitLabel}/>

                    </form>
                </div>
            </div>

        </section>
    )
}