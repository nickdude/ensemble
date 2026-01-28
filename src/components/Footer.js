"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const isHomePage = pathname === "/";

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <footer className="hidden w-full md:flex flex-col">
        {/* Main Footer Content */}
        <div className={`w-full px-16 pb-16 pt-44  border-b transition-colors duration-300 ${theme === "dark" ? "bg-gray-900 border-gray-800 text-white" : "bg-gray-50 text-black border-gray-300"}`}>
          <div className="mx-auto">
            <div className="grid grid-cols-[20%_50%_30%]">
              {/* Column 1 - Navigation Links */}
              <div className="flex flex-col gap-4">
                <h3 className={`font-poppins font-normal text-lg transition-colors `}>Home</h3>
                <h3 className={`font-poppins font-normal text-lg transition-colors `}>About Us</h3>
                <h3 className={`font-poppins font-normal text-lg transition-colors `}>Services</h3>
                <h3 className={`font-poppins font-normal text-lg transition-colors `}>Portfolio</h3>
              </div>

              {/* Column 2 - Secondary Navigation */}
              <div className="flex flex-col gap-4">
                <h3 className={`font-poppins font-normal text-lg transition-colors `}>People & Careers</h3>
                <h3 className={`font-poppins font-normal text-lg transition-colors `}>Media</h3>
                <h3 className={`font-poppins font-normal text-lg transition-colors `}>Insights</h3>
                <h3 className={`font-poppins font-normal text-lg transition-colors `}>Contact Us</h3>
              </div>

              {/* Column 3 - Get In Touch */}
              <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                      <h3 className={`font-poppins font-medium text-xl transition-colors `}>Get In Touch</h3>
                      <div className="flex gap-4">
                          <Image src={theme === "dark" ? "/assets/icons/facebook_w.svg" : "/assets/icons/facebook.svg"} alt="Facebook" width={24} height={24} className="mt-2 mb-4"/>
                          <Image src={theme === "dark" ? "/assets/icons/linkedin_w.svg" : "/assets/icons/linkedin.svg"} alt="LinkedIn" width={24} height={24} className="mt-2 mb-4"/>
                          <Image src={theme === "dark" ? "/assets/icons/instagram_w.svg" : "/assets/icons/instagram.svg"} alt="Instagram" width={24} height={24} className="mt-2 mb-4"/>
                      </div>
                  </div>
                
                
                {/* Our Offices */}
                <div>
                  <p className={`text-sm font-avenir font-light uppercase tracking-[0.2em] transition-colors ${theme === "dark" ? "text-gray-400" : "text-black"}`}>Our Offices</p>
                  <p className={`text-[16px] roman font-avenir mt-2 transition-colors `}>
                    Mumbai(HQ), Bengaluru, Delhi, Pune, Hyderabad, Chennai
                  </p>
                </div>

                {/* Phone and Email */}
                <div className="flex justify-between gap-8">
                  <div>
                    <p className={`text-sm font-avenir font-light uppercase tracking-[0.2em] transition-colors ${theme === "dark" ? "text-gray-400" : "text-black"}`}>Phone</p>
                    <p className={`text-[16px] roman font-avenir mt-1 transition-colors `}>+91 98330 84407</p>
                  </div>
                  <div>
                    <p className={`text-sm font-avenir font-light uppercase tracking-[0.2em] transition-colors ${theme === "dark" ? "text-gray-400" : "text-black"}`}>Email</p>
                    <a href="mailto:naved.kazi@ensemble.co.in" className={`text-[16px] roman font-avenir mt-1 underline transition-colors ${theme === "dark" ? "text-white hover:text-brand-blue" : "text-black hover:text-brand-blue"}`}>
                      naved.kazi@ensemble.co.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className={`w-full py-8 transition-colors duration-300 ${theme === "dark" ? "bg-black border-gray-800" : "bg-white border-gray-300"}`}>
          <p className={`text-center text-sm font-bricolage transition-colors ${theme === "dark" ? "text-gray-500" : "text-gray-600"}`}>
            @2024 by Ensemble
          </p>
        </div>

        {/* Logo Section */}
        {!isHomePage && (
        <div className={`w-full flex items-center justify-center pt-12 transition-colors duration-300 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
          <img src={theme === "dark" ? "/assets/footer_logo_white.png" : "/assets/footer_logo_black.png"} alt="Ensemble Logo" className="w-full" />
        </div>
        )}
      </footer>  
      <footer className="md:hidden w-full flex flex-col">
        {/* Main Footer Content */}
        <div className={`w-full px-4 py-16  border-b transition-colors duration-300 ${theme === "dark" ? "bg-gray-900 border-gray-800 text-white" : "bg-gray-50 text-black border-gray-300"}`}>
          <div className="mx-auto">
            <div className="flex flex-col gap-12">
              {/* Column 3 - Get In Touch */}
              <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <h3 className={`font-poppins font-medium text-xl transition-colors `}>Get In Touch</h3>
                        <div className="flex gap-4">
                            <Image src={theme === "dark" ? "/assets/icons/facebook_w.svg" : "/assets/icons/facebook.svg"} alt="Facebook" width={24} height={24} className="mt-2 mb-4"/>
                            <Image src={theme === "dark" ? "/assets/icons/linkedin_w.svg" : "/assets/icons/linkedin.svg"} alt="LinkedIn" width={24} height={24} className="mt-2 mb-4"/>
                            <Image src={theme === "dark" ? "/assets/icons/instagram_w.svg" : "/assets/icons/instagram.svg"} alt="Instagram" width={24} height={24} className="mt-2 mb-4"/>
                        </div>
                    </div>
                  
                  
                  {/* Our Offices */}
                  <div>
                    <p className={`text-sm font-avenir font-light uppercase tracking-[0.2em] transition-colors ${theme === "dark" ? "text-gray-400" : "text-black"}`}>Our Offices</p>
                    <p className={`text-[16px] roman font-avenir mt-2 transition-colors `}>
                      Mumbai(HQ), Bengaluru, Delhi, Pune,<br/> Hyderabad, Chennai
                    </p>
                  </div>

                  {/* Phone and Email */}
                  <div className="flex gap-5">
                    <div>
                      <p className={`text-sm font-avenir font-light uppercase tracking-[0.2em] transition-colors ${theme === "dark" ? "text-gray-400" : "text-black"}`}>Phone</p>
                      <p className={`text-[16px] roman font-avenir mt-1 transition-colors `}>+91 98330 84407</p>
                    </div>
                    <div>
                      <p className={`text-sm font-avenir font-light uppercase tracking-[0.2em] transition-colors ${theme === "dark" ? "text-gray-400" : "text-black"}`}>Email</p>
                      <a href="mailto:naved.kazi@ensemble.co.in" className={`text-[16px] roman font-avenir mt-1 underline transition-colors ${theme === "dark" ? "text-white hover:text-brand-blue" : "text-black hover:text-brand-blue"}`}>
                        naved.kazi@ensemble.co.in
                      </a>
                    </div>
                  </div>
              </div>

              {/* Column 1 - Navigation Links */}
              <div className="flex gap-15">
                  <div className="flex flex-col gap-4">
                    <h3 className={`font-poppins font-normal text-lg transition-colors `}>Home</h3>
                    <h3 className={`font-poppins font-normal text-lg transition-colors `}>About Us</h3>
                    <h3 className={`font-poppins font-normal text-lg transition-colors `}>Services</h3>
                    <h3 className={`font-poppins font-normal text-lg transition-colors `}>Portfolio</h3>
                  </div>

                  {/* Column 2 - Secondary Navigation */}
                  <div className="flex flex-col gap-4">
                    <h3 className={`font-poppins font-normal text-lg transition-colors `}>People & Careers</h3>
                    <h3 className={`font-poppins font-normal text-lg transition-colors `}>Media</h3>
                    <h3 className={`font-poppins font-normal text-lg transition-colors `}>Insights</h3>
                    <h3 className={`font-poppins font-normal text-lg transition-colors `}>Contact Us</h3>
                  </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className={`w-full py-8 transition-colors duration-300 ${theme === "dark" ? "bg-black border-gray-800" : "bg-white border-gray-300"}`}>
          <p className={`text-center text-sm font-bricolage transition-colors ${theme === "dark" ? "text-gray-500" : "text-gray-600"}`}>
            @2024 by Ensemble
          </p>
        </div>

        {/* Logo Section */}
        {!isHomePage && (
        <div className={`w-full flex items-center justify-center pt-12 transition-colors duration-300 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
          <img src={theme === "dark" ? "/assets/footer_logo_white.png" : "/assets/footer_logo_black.png"} alt="Ensemble Logo" className="w-full" />
        </div>
        )}
      </footer>  
    </>
    
  );
}