"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function   InnerProjectSubHero({title, location}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

    return (
           <section className={`px-4 md:px-16 w-full ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
              <div className="relative w-full h-[75vh] rounded-xl overflow-hidden">
                
                {/* Background Image */}
                <Image
                  src="/assets/inner_project_hero.png"
                  alt="Service Hero Image"
                  fill
                  className="object-cover"
                  priority
                />
        
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
                {/* Content */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10">
                    <p className="text-[32px] md:text-[56px] font-poppins font-semibold">
                        We Work, Bengaluru
                    </p>
                </div>

        
              </div>
            </section>
    );
    }   