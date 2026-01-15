"use client"

import Button from "./Button"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function InquiryFrom(){
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    return(
        <section className={`py-20 px-4 md:px-16  ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className="flex flex-col items-center justify-center md:grid md:grid-cols-[25%25%50%]">
                <div className="font-inter flex items-center md:items-start flex-col gap-4 text-center md:text-left">
                    <h1 className="font-semibold text-[32px]">Our Office</h1>
                    <h2 className="font-semibold text-[15px] my-2">
                        Mumbai (HO)
                    </h2>
                    <p className="font-normal text-[16px]">One World Center (Formerly One India Bulls), 3rd Floor, Tower 2B, South Annex, Lower Parel, Mumbai - 400013</p>
                     <h2 className="font-semibold text-[15px] my-2">
                        Delhi
                    </h2>
                    <p className="font-normal text-[16px]">Level 5, SB Tower, 1A/1 Sector, 16 A - Film City, Noida - 201301</p>
                     <h2 className="font-semibold text-[15px] my-2">
                        Other Offices
                    </h2>
                    <p className="font-normal text-[16px]">Hyderabad & Chennai</p>
                    <p>info@ensemble.co.in</p>
                </div>
                 <div className="font-inter flex items-center md:items-start flex-col gap-4 text-center md:text-left">
                    <h1 className="font-semibold text-[32px]">-</h1>
                    <h2 className="font-semibold text-[15px] my-2">
                        Bengaluru
                    </h2>
                    <p className="font-normal text-[16px]">Prestige Ridge, 3rd Floor, 24/25, Domlur Service Rd, Above HDFC Bank, Domlur, Bengaluru - 560071</p>
                      <h2 className="font-semibold text-[15px]  my-2">
                        Pune
                    </h2>
                    <p className="font-normal text-[16px]">37 Ashapuri, 270/1, Nehru Marg, Pune - 411002</p>
                </div>
                 <div className="md:px-20 md:border-l md:border-gray-500">
                    <h1 className="font-semibold text-[32px]">Let’s get in touch</h1>
                
                    <form className="space-y-10">

                        {/* First + Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <input
                            type="text"
                            placeholder="First Name"
                            className="w-full rounded-lg bg-gray-100 px-6 py-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full rounded-lg bg-gray-100 px-6 py-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-lg bg-gray-100 px-6 py-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                        />

                        {/* Message */}
                        <textarea
                            placeholder="Message"
                            rows={4}
                            className="w-full rounded-lg bg-gray-100 px-6 py-4 text-sm placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                        />

                        {/* Submit */}
                         <Button label="SUBMIT"/>

                    </form>
                </div>
            </div>

        </section>
    )
}