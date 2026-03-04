"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

export default function MenuOverlay({ theme, onClose }) {
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  const links = [
    { href: "/services", label: "SERVICES" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/aboutus", label: "ABOUT US" },
    { href: "/news", label: "NEWS" },
    { href: "/sustainability", label: "SUSTAINABILITY" },
    { href: "/blogs", label: "BLOGS" },
  ];

  const filteredLinks = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return links;
    return links.filter((link) => link.label.toLowerCase().includes(q));
  }, [query, links]);

  return (
    <div className={`fixed inset-0 z-50 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 md:top-10 md:right-16 text-2xl md:text-3xl"
      >
        ✕
      </button>

      <div className="flex flex-col md:flex-row h-full px-6 md:px-16 py-10 md:py-16 gap-8 md:gap-20">
        {/* LEFT IMAGE */}
        <div className="hidden md:block w-[55%]">
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
        <div className="w-full md:w-[45%] flex flex-col justify-center items-start md:items-end text-left md:text-right md:pr-30">
          {/* Search */}
          <div className="mb-8 md:mb-14 w-full flex flex-col items-start md:items-end">
            <div className="w-32 md:w-68 h-[1px] bg-gray-400" />
            <div className="flex justify-start md:justify-end gap-4 md:gap-6 items-center w-fit">
                <Image src="/assets/icons/search.svg" alt="Search" width={22} height={22}/>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="SEARCH"
                  className={`w-full md:w-56 bg-transparent font-poppins font-normal text-base md:text-lg my-3 md:my-4 outline-none placeholder:tracking-widest ${theme === "dark" ? "placeholder:text-gray-300 text-white" : "placeholder:text-gray-600 text-black"}`}
                />
            </div>
            <div className="w-32 md:w-68 h-[1px] bg-gray-400" />
          </div>

          {/* Menu Items */}
          <ul className="space-y-4 md:space-y-6 text-lg md:text-xl tracking-widest font-poppins">
            {filteredLinks.map((link) => {
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
          {filteredLinks.length === 0 && (
            <p className={`mt-4 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
              No matches
            </p>
          )}

          {/* Contact Button */}
          <Link href="/contactus">
            <button className={`mt-10 md:mt-12 px-8 md:px-10 py-3 ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"} rounded-md tracking-widest`}>
              CONTACT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
