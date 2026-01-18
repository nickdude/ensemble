import Image from "next/image";
import "./ProjectCardSample.css"

export default function ProjectCard({
  image,
  title,
  location,
  variant = "square", // square | wide
}) {
  return (
    <div
      className={`card group cursor-pointer
        ${variant === "wide" ? "col-span-1 row-span-1 md:col-span-2 md:row-span-2" : "col-span-1 row-span-1 md:col-span-1 md:row-span-2"}
      `}
    >
      <Image
        src="/assets/news/detail_news1.jpg"
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      <div className="overlay overlay-default">
        <div className="title-box">
          <h2 className="font-poppins text-[62px]">Bridge+</h2>
₹
          <div className="arrow-overlay">
              <img src="/assets/icons/up_arrow.svg" alt="Project Image" />
          </div>

          <p className="font-bricolage font-semibold text-[16px]">Chennai</p>
        </div>
      </div>

      <div className="overlay overlay-hover">
        <div className="hover-box">
          <p>Location: Chennai</p>
          <p className="from-bottom">Area: 1,00,000 sq.ft.</p>
          <p>Service: General Contracting</p>

          <div className="cta from-bottom">
            <span>View Case Study</span>
          </div>
        </div>
      </div>
    </div>
  );
}
