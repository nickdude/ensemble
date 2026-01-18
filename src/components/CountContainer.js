"use client";

export default function CountContainer({count, label, theme, text}) {
    return (
         <div className="flex flex-col justify-center items-center gap-1 md:gap-3">
            <h2 className={`font-poppins font-medium text-7xl md:text-8xl ${text === 'red' ? 'text-brand-red' : 'text-brand-blue'}`}>{count}</h2>
            <p className={`font-avenir font-light text-[16px] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{label}</p>
        </div>
    );
}