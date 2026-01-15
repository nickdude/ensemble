import Image from "next/image";

export default function ProjectHoverCard({
  image,
  title,
  city,
  location,
  area,
  service,
}) {
  return (
    <div className="group relative w-[420px] h-[420px] overflow-hidden cursor-pointer">

      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* DEFAULT CENTER CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
        <div className="text-center text-white">
          <h3 className="text-[40px] font-medium flex items-center gap-2 justify-center">
            {title}
            <Image src="/assets/icons/up_arrow.svg" alt="Up Arrow" width={20} height={20} />
          </h3>
          <p className="text-lg mt-1">{city}</p>
        </div>
      </div>

      {/* HOVER CONTENT (LEFT ➜ RIGHT) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white opacity-0 -translate-x-10 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0">
          <p className="text-xl mb-3">
            <span className="font-medium">Location:</span> {location}
          </p>
          <p className="text-xl mb-3">
            <span className="font-medium">Area:</span> {area}
          </p>
          <p className="text-xl mb-6">
            <span className="font-medium">Service:</span> {service}
          </p>

          <a
            href="#"
            className="text-[#F04A2A] text-xl underline underline-offset-4"
          >
            View Case Study
          </a>
        </div>
      </div>
    </div>
  );
}
