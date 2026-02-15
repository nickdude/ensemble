import Image from "next/image";
import "./ProjectCardSample.css"

export default function ProjectCardSample({image, title, location, area, service,viewCaseStudy}) {
  return (
   <div className="card bg-red-300 h-[50vh] md:h-[33.3vw] w-[90vw] md:w-[33.3vw] flex-shrink-0 relative cursor-pointer">
      <div className="relative w-full h-full">
        <img src={image} alt="Project Image" />
        <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>
      </div>

      <div className="overlay overlay-default">
        <div className="title-box">
          <h2 className="font-poppins text-[30px] md:text-[62px]">{title}</h2>
          <div className="arrow-overlay">
              <img src="/assets/icons/up_arrow.svg" alt="Project Image" />
          </div>
          <p className="font-bricolage font-semibold text-[16px]">{location}</p>
        </div>
      </div>

      <div className="overlay overlay-hover">
        <div className="hover-box font-roboto text-lg">
          <p>Location: {location}</p>
          <p className="from-bottom">Area: {area}</p>
          <p>Service: {service}</p>

          <div className="cta from-bottom">
            <span className="font-bricolage cursor-pointer" onClick={viewCaseStudy}>View Case Study</span>
          </div>
        </div>
      </div>
    </div>
  );
}
