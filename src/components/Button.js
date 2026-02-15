"use client";
import "../app/styles/button.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Button({ label, compulsary = false, transparent = false }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button className={`lux-btn w-fit ${
      transparent || compulsary || theme === "dark" 
        ? "bg-white text-black" 
        : "bg-black text-white"
    }`}>
      <span>{label}</span>
    </button>
  );
}
