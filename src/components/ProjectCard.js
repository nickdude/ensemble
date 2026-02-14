import Image from "next/image";
import "./ProjectCardSample.css"
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function ProjectCard({
  image,
  title,
  location,
  variant = "square", // square | wide
  slug,
  area,
  service,
  viewCaseStudy
}) {

  const router = useRouter();

  return (
    // <Link href={`/projects/${slug}`} className="block w-full h-full group cursor-pointer">
      <div
        className={`card group cursor-pointer
          ${variant === "wide" ? "col-span-1 row-span-1 md:col-span-2 md:row-span-2" : "col-span-1 row-span-1 md:col-span-1 md:row-span-2"}
        `}
        onClick={() => router.push(`/projects/${slug}`)}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>
        <div className="overlay overlay-default">
          <div className="title-box">
            <h2 className="font-poppins text-[62px]">{title}</h2>
  ₹
            <div className="arrow-overlay">
                <img src="/assets/icons/up_arrow.svg" alt="Project Image" />
            </div>

            <p className="font-bricolage font-semibold text-[16px]">{location}</p>
          </div>
        </div>

        <div className="overlay overlay-hover">
          <div className="hover-box">
            <p>Location: {location}</p>
            <p className="from-bottom">Area: {area}</p>
            <p>Service: {service}</p>

            <div className="cta from-bottom">
              <span onClick={viewCaseStudy}>View Case Study</span>
            </div>
          </div>
        </div>
      </div>
    // </Link>
  );
}
