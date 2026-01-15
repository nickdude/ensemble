import Image from "next/image";

export default function ProjectCard({
  image,
  title,
  location,
  variant = "square", // square | wide
}) {
  return (
    <div
      className={`relative  overflow-hidden group cursor-pointer
        ${variant === "wide" ? "col-span-1 row-span-1 md:col-span-2 md:row-span-2" : "col-span-1 row-span-1 md:col-span-1 md:row-span-2"}
      `}
    >
      <Image
        // src={image}
        src="/assets/news/detail_news1.jpg"
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

        {/* <div className="absolute bottom-4 left-4 right-4 text-white z-10">
          <h3 className="text-sm font-medium flex items-center gap-1">
            {title}
            <span className="text-xs">↗</span>
          </h3>
          <p className="text-xs text-white/80">{location}</p>
        </div> */}

        <div
            className="
              absolute inset-0 z-10 text-white
              flex flex-col items-center justify-center text-center
              md:inset-auto md:bottom-4 md:left-4 md:right-4
              md:items-start md:justify-end md:text-left
            "
          >
            <h3 className="text-[29px] md:text-sm font-medium flex items-center gap-1">
              {title}
              <span className="text-xs">↗</span>
            </h3>
            <p className="text-[14px] md:text-xs text-white/80">{location}</p>
        </div>

    </div>
  );
}
