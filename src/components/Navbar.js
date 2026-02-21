"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "./Button";
import MenuOverlay from "./MenuOverlay";
import Link from "next/link";

export default function Navbar({transparent = false}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleThemeToggle = () => {
    setAnimating(true);
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
      setAnimating(false);
    }, 200);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`${transparent? "absolute z-10":""} hidden md:flex w-full justify-between items-center px-16 py-10 transition-colors duration-300 ${
          transparent
            ? "bg-transparent"
            : theme === "dark"
            ? "bg-black"
            : "bg-white"
        }`}
      >
        <Link href="/">
                <Image
                  src={
                    theme === "dark" || transparent
                      ? "/assets/logo_white.svg"
                      : "/assets/logo_black.svg"
                  }
                  alt="Logo"
                  width={240}
                  height={100}
                />
        </Link>
        <div className="flex gap-5 items-center">
          {/* Theme Toggle */}
          <button
  onClick={handleThemeToggle}
  className={`group relative overflow-hidden border p-1 rounded-sm
  ${theme === "dark" || transparent
    ? "border-white bg-gray-500/20"
    : "border-black"
  }`}
>
  <div className="relative w-6 h-6 overflow-hidden">

    {theme === "dark" ? (
      /* DARK MODE: Show Moon, slide to Sun */
      <>
        <Image
          src="/assets/icons/moon_white.svg"
          alt="moon"
          width={24}
          height={24}
          className="absolute left-0 top-0 transition-transform duration-[3000ms] ease-in-out group-hover:translate-x-full"
        />
        <Image
          src={theme === "dark" || transparent ? "/assets/icons/sun_white.svg" : "/assets/icons/sun_black.svg"}
          alt="sun"
          width={24}
          height={24}
          className="absolute left-[-24px] top-0 transition-transform duration-[3000ms] ease-in-out group-hover:translate-x-[24px]"
        />
      </>
    ) : (
      /* LIGHT MODE: Show Sun, slide to Moon */
      <>
        <Image
          src={theme === "dark" || transparent ? "/assets/icons/sun_white.svg" : "/assets/icons/sun_black.svg"}
          alt="sun"
          width={24}
          height={24}
          className="absolute left-0 top-0 transition-transform duration-[3000ms] ease-in-out group-hover:-translate-x-full"
        />
        <Image
          src={theme === "dark" || transparent ? "/assets/icons/moon_white.svg" : "/assets/icons/moon_black.svg"}
          alt="moon"
          width={24}
          height={24}
          className="absolute left-[24px] top-0 transition-transform duration-[3000ms] ease-in-out group-hover:-translate-x-[24px]"
        />
      </>
    )}

  </div>
</button>

          {/* <button
            // className="border border-white p-1 rounded-sm"
            className={`border p-1 rounded-sm ${theme === "dark" || transparent ? "border-white bg-gray-500/20" : "border-black"} `}
            onClick={handleThemeToggle}
          >
            <Image
              src={
                theme === "dark"
                ? "/assets/icons/moon_white.svg"
                : transparent
                ? "/assets/icons/sun_white.svg"
                : "/assets/icons/sun_black.svg"
              }
              alt="Theme Toggle"
              width={24}
              height={24}
            />
          </button> */}

          <Button label="Contact" transparent={transparent} link="/contactus" />

          {/* Hamburger */}
          <button onClick={() => setIsMenuOpen(true)}>
            <Image
              src={
                theme === "dark" || transparent
                  ? "/assets/icons/humburger_white.svg"
                  : "/assets/icons/hamburger_black.svg"
              }
              alt="Menu"
              width={48}
              height={48}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`${transparent? "absolute z-10":""} md:hidden w-full flex justify-between items-center px-4 py-6 transition-colors duration-300 ${
          transparent
            ? "bg-transparent"
            : theme === "dark"
            ? "bg-black"
            : "bg-white"
        }`}
      >
        {/* Mobile Logo (smaller) */}
        <Link href="/">
          <Image
            src={
              theme === "dark" || transparent
                ? "/assets/logo_white.svg"
                : "/assets/logo_black.svg"
            }
            alt="Logo"
            width={120}
            height={50}
          />
        </Link>

        {/* Mobile Right Controls */}
        <div className="flex gap-3 items-center">
          {/* Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            className={`group relative overflow-hidden border p-1 rounded-sm
            ${theme === "dark" || transparent
              ? "border-white bg-gray-500/20"
              : "border-black"
            }`}
          >
  <div className="relative w-5 h-5 overflow-hidden">

    {theme === "dark" ? (
      /* DARK MODE: Show Moon, slide to Sun */
      <>
        <Image
          src="/assets/icons/moon_white.svg"
          alt="moon"
          width={20}
          height={20}
          className="absolute left-0 top-0 transition-transform duration-[3000ms] ease-in-out group-hover:translate-x-full"
        />
        <Image
          src={theme === "dark" || transparent ? "/assets/icons/sun_white.svg" : "/assets/icons/sun_black.svg"}
          alt="sun"
          width={20}
          height={20}
          className="absolute left-[-20px] top-0 transition-transform duration-[3000ms] ease-in-out group-hover:translate-x-[20px]"
        />
      </>
    ) : (
      /* LIGHT MODE: Show Sun, slide to Moon */
      <>
        <Image
          src={theme === "dark" || transparent ? "/assets/icons/sun_white.svg" : "/assets/icons/sun_black.svg"}
          alt="sun"
          width={20}
          height={20}
          className="absolute left-0 top-0 transition-transform duration-[3000ms] ease-in-out group-hover:-translate-x-full"
        />
        <Image
          src={theme === "dark" || transparent ? "/assets/icons/moon_white.svg" : "/assets/icons/moon_black.svg"}
          alt="moon"
          width={20}
          height={20}
          className="absolute left-[20px] top-0 transition-transform duration-[3000ms] ease-in-out group-hover:-translate-x-[20px]"
        />
      </>
    )}

  </div>
</button>

          {/* Hamburger */}
          <button onClick={() => setIsMenuOpen(true)}>
            <Image
              src={
                theme === "dark" || transparent
                  ? "/assets/icons/humburger_white.svg"
                  : "/assets/icons/hamburger_black.svg"
              }
              alt="Menu"
              width={32}
              height={32}
            />
          </button>
        </div>
      </nav>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <MenuOverlay
          theme={theme}
          onClose={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}