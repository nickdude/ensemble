"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "./Button";
import MenuOverlay from "./MenuOverlay";
import Link from "next/link";

export default function Navbar() {
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
        className={`hidden md:flex w-full justify-between items-center px-16 py-10 transition-colors duration-300 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <Link href="/">
                <Image
                  src={
                    theme === "dark"
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
            className="border p-1 rounded-sm"
            onClick={handleThemeToggle}
          >
            <Image
              src={
                theme === "dark"
                  ? "/assets/icons/moon_white.svg"
                  : "/assets/icons/sun_black.svg"
              }
              alt="Theme Toggle"
              width={24}
              height={24}
            />
          </button>

          <Button label="Contact" theme={theme} />

          {/* Hamburger */}
          <button onClick={() => setIsMenuOpen(true)}>
            <Image
              src={
                theme === "dark"
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
        className={`md:hidden w-full flex justify-between items-center px-4 py-6 transition-colors duration-300 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        {/* Mobile Logo (smaller) */}
        <Image
          src={
            theme === "dark"
              ? "/assets/logo_white.svg"
              : "/assets/logo_black.svg"
          }
          alt="Logo"
          width={120}
          height={50}
        />

        {/* Mobile Right Controls */}
        <div className="flex gap-3 items-center">
          {/* Theme Toggle */}
          <button
            className="border p-1 rounded-sm"
            onClick={handleThemeToggle}
          >
            <Image
              src={
                theme === "dark"
                  ? "/assets/icons/moon_white.svg"
                  : "/assets/icons/sun_black.svg"
              }
              alt="Theme Toggle"
              width={20}
              height={20}
            />
          </button>

          {/* Hamburger */}
          <button onClick={() => setIsMenuOpen(true)}>
            <Image
              src={
                theme === "dark"
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