// "use clients"

// import Image from "next/image"

// export default function ImageDesciption(){
//     return(
//         <section className="bg-white text-black py-20 px-16 flex">
//             <div className="relative w-1/2 h-[590px]">
//                 <Image src="/assets/aboutus/excellence.jpg" fill className="object-cover rounded-lg" priority/>
//             </div>
//              <div className="w-1/2 h-[590px] flex flex-col justify-center pl-16 gap-5">
//                 <h1 className="font-roboto font-semibold text-[32px]">Decades of Delivering Excellence</h1>
//                 <p className="fornt-roboto font-light text-2xl text-gray-600">Ensemble was founded in the year 2001, with a humble beginning of executing a 200 Sq feet of fitouts for American Express. We have come a long way since then, moving our headquarters to Mumbai in 2003, executing over 20 Million Sq feet of fitouts for leading clients like Google, Citi, Morgan Stanley, Reliance, TCS and other global clients.</p>
//             </div>
//         </section>
//     )
// }

"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ImageDescription({ right = false }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <section
      className={`py-20 px-4 md:px-16 flex items-center ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } flex items-center ${
        right ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
      }`}
    >
      {/* Image */}
      <div className="relative w-full md:w-1/2 h-[590px]">
        <Image
          src="/assets/aboutus/excellence.jpg"
          alt="Decades of Delivering Excellence"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {/* Text */}
      <div
        className={`w-full md:w-1/2 h-[590px] flex flex-col justify-center gap-5 ${
          right ? "pr-0 md:pr-16" : "pl-0 md:pl-16"
        }`}
      >
        <h1 className="font-roboto font-semibold text-[32px]">
          Decades of Delivering Excellence
        </h1>

        <p className="font-roboto font-light text-2xl text-gray-600 leading-relaxed">
          Ensemble was founded in the year 2001, with a humble beginning of
          executing a 200 Sq feet of fitouts for American Express. We have come a
          long way since then, moving our headquarters to Mumbai in 2003,
          executing over 20 Million Sq feet of fitouts for leading clients like
          Google, Citi, Morgan Stanley, Reliance, TCS and other global clients.
        </p>
      </div>
    </section>
  );
}
