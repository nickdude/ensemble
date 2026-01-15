"use client";

export default function Button({label, theme}) {
  return (
    <button className={`w-fit uppercase px-4 py-1.5 text-[12px] font-medium rounded-sm font-avenir ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"} transition`}>
        {label}
    </button>
  );
}