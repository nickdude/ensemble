"use client";

import Button from "./Button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { contactData } from "@/data/home/contactData";
import { useForm, ValidationError } from '@formspree/react';

export default function InquiryForm(){
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { offices, inquiryForm } = contactData;
    const [state, handleSubmit] = useForm("xvzbavor");

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
                    <h1 className="font-semibold text-[32px] mb-6">{inquiryForm.title}</h1>
                
                    {state.succeeded ? (
                        <div className="p-6 rounded-lg bg-green-50 border border-green-200">
                            <p className="text-green-800 font-medium text-center">
                                Thanks for your inquiry! We'll get back to you soon.
                            </p>
                        </div>
                    ) : (
                        <form className="space-y-10" onSubmit={handleSubmit}>

                            {/* First + Last Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <input
                                        id="firstName"
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        className={`w-full rounded-lg ${theme === 'dark' ? 'bg-gray-800 placeholder-white' : 'bg-[#f6f6f6] placeholder-gray-400'} px-6 py-4 text-sm  focus:outline-none focus:ring-2 focus:ring-black`}
                                        required
                                    />
                                    <ValidationError 
                                        prefix="First Name" 
                                        field="firstName"
                                        errors={state.errors}
                                        className="text-red-500 text-xs mt-1"
                                    />
                                </div>
                                <div>
                                    <input
                                        id="lastName"
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        className={`w-full rounded-lg ${theme === 'dark' ? 'bg-gray-800 placeholder-white' : 'bg-[#f6f6f6] placeholder-gray-400'} px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-black`}
                                        required
                                    />
                                    <ValidationError 
                                        prefix="Last Name" 
                                        field="lastName"
                                        errors={state.errors}
                                        className="text-red-500 text-xs mt-1"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className={`w-full rounded-lg ${theme === 'dark' ? 'bg-gray-800 placeholder-white' : 'bg-[#f6f6f6] placeholder-gray-400'} px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-black`}
                                    required
                                />
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                    className="text-red-500 text-xs mt-1"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                    rows={4}
                                    className={`w-full rounded-lg ${theme === 'dark' ? 'bg-gray-800 placeholder-white' : 'bg-[#f6f6f6] placeholder-gray-400'} px-6 py-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black`}
                                    required
                                />
                                <ValidationError 
                                    prefix="Message" 
                                    field="message"
                                    errors={state.errors}
                                    className="text-red-500 text-xs mt-1"
                                />
                            </div>

                            {/* Submit */}
                            <button 
                                type="submit" 
                                disabled={state.submitting}
                                className={`lux-btn rounded-sm w-fit ${
                                    state.submitting 
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : theme === 'dark' 
                                        ? 'bg-white text-black' 
                                        : 'bg-black text-white'
                                }`}
                            >
                                <span>{state.submitting ? 'Sending...' : inquiryForm.submitLabel}</span>
                            </button>

                        </form>
                    )}
                </div>
            </div>

        </section>
    )
}