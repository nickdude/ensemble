"use client";

import Image from "next/image";

export default function Initiative() {
  return (
    <section className="py-10 px-4 md:py-20 md:px-16">
      <div className="relative h-[600px] rounded-xl overflow-hidden">
        
        {/* Background Image */}
        <Image
          src="/assets/sustainabilty/initiative.png"
          alt="Sustainability Initiatives"
          fill
          className="object-cover"
          priority
        />

        {/* White Content Card */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white rounded-xl px-8 py-14 w-[650px] h-[448px] leading-[34px] space-y-8">
          <h2 className="font-roboto text-[32px] font-semibold">
            Sustainability Initiatives
          </h2>

          <ul className="text-2xl font-light text-gray-600 font-roboto list-disc list-inside">
            <li>To be carbon neutral for our footprint by 2029</li>
            <li>100% renewable electricity</li>
            <li>Over 50% raw materials used will be Green Products</li>
            <li>Local Sourcing</li>
            <li>ISO 14001 is a journey towards achieving in 2029</li>
            <li>Certification of our Workplace for LEED Gold or Platinum</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
