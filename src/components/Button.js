"use client";
import "../app/styles/button.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Button({ label, link }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button className={`lux-btn w-fit ${theme === "dark" ? "bg-white text-black": "bg-black text-white" }`} onClick={() => window.location.href = link}>
      <span>{label}</span>
    </button>
  );
}
