"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuOverlay({ theme, onClose }) {
  const pathname = usePathname();

  const links = [
    { href: "/services", label: "SERVICES" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/aboutus", label: "ABOUT US" },
    { href: "/sustainability", label: "SUSTAINABILITY" },
    { href: "/blogs", label: "BLOGS" },
  ];

  return (
    <div className={`fixed inset-0 z-50 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-10 right-16 text-3xl"
      >
        ✕
      </button>

      <div className="flex h-full px-16 py-16 gap-20">
        {/* LEFT IMAGE */}
        <div className="w-[55%]">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src="/assets/aboutus/excellence.jpg"
              alt="Menu Visual"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-[45%] flex flex-col justify-center items-end text-right pr-30">
          {/* Search */}
          <div className="mb-14">
            <div className="w-40 h-[1px] bg-gray-400 mx-auto" />
            <div className="flex justify-end gap-10">
                <Image src="/assets/icons/search.svg" alt="Search" width={28} height={28}/>
                  <p className="font-poppins font-normal text-lg my-4">SEARCH</p>
            </div>
            <div className="w-40 h-[1px] bg-gray-400 mx-auto" />
          </div>

          {/* Menu Items */}
          <ul className="space-y-6 text-xl tracking-widest font-poppins">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className={isActive ? "font-extrabold" : "font-normal text-gray-600"}>
                  <Link href={link.href} onClick={onClose}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Contact Button */}
          <Link href="/contact">
            <button className={`mt-12 px-10 py-3 ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"} rounded-md tracking-widest`}>
              CONTACT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
