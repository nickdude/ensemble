// "use client";

// import Image from "next/image";

// export default function ServiceCard({ img, title, description }) {
//   return (
//     <div
//       className="
//         group relative overflow-hidden
//         border border-gray-300 rounded-lg
//         w-[435px] h-[457px]
//       "
//     >
//       {/* BACKGROUND IMAGE (slides from bottom) */}
//       <Image
//         src="/assets/blur/background-effect.png"
//         alt="Background"
//         fill
//         className="
//           object-cover rounded-lg
//           translate-y-full
//           group-hover:translate-y-0
//           transition-transform duration-[700ms]
//           ease-[cubic-bezier(0.22,1,0.36,1)]
//           z-0
//         "
//       />

//       {/* ARROW */}
//       <div className="relative z-20 flex justify-end w-full p-5">
//         <div
//           className="
//             p-2 rounded-md
//             transition-colors duration-200
//             group-hover:bg-white
//           "
//         >
//           <Image
//             src="/assets/icons/red_upper_arrow.svg"
//             alt="service arrow"
//             width={24}
//             height={24}
//           />
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div
//         className="
//           relative z-10 flex flex-col p-5 gap-4
//           translate-y-0 opacity-100
//           group-hover:translate-y-10 group-hover:opacity-0
//           transition-all duration-[400ms]
//           ease-[cubic-bezier(0.4,0,0.2,1)]
//         "
//       >
//         <Image src={img} alt={title} width={64} height={64} />

//         <h1 className="font-poppins font-medium text-3xl">
//           {title}
//         </h1>

//         <p className="font-poppins font-light text-lg leading-[25px]">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";

export default function ServiceCard({ img, title, description }) {
  return (
    <div
      className="
        group relative overflow-hidden
        border border-gray-300 rounded-lg
        w-[435px] h-[457px]
      "
    >
      {/* BACKGROUND WRAPPER (THIS animates) */}
      <div
        className="
          absolute inset-0 z-0
          translate-y-full
          group-hover:translate-y-0
          transition-transform duration-[10000ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
        "
      >
        <Image
          src="/assets/blur/background-effect.png"
          alt="Background"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* ARROW */}
      <div className="relative z-20 flex justify-end w-full p-5">
        <div
          className="
            p-2 rounded-md
            transition-colors duration-200
            group-hover:bg-white
          "
        >
          <Image
            src="/assets/icons/red_upper_arrow.svg"
            alt="service arrow"
            width={24}
            height={24}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10 flex flex-col p-5 gap-4
          translate-y-0 opacity-100
          group-hover:translate-y-12 group-hover:opacity-0
          transition-all duration-[1000ms]
          ease-[cubic-bezier(0.4,0,0.2,1)]
        "
      >
        <Image src={img} alt={title} width={64} height={64} />

        <h1 className="font-poppins font-medium text-3xl">
          {title}
        </h1>

        <p className="font-poppins font-light text-lg leading-[25px]">
          {description}
        </p>
      </div>
    </div>
  );
}

