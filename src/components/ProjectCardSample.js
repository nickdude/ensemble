import "./ProjectCardSample.css"

export default function ProjectCardSample({image, title, location,  area, service, viewCaseStudy}) {
  return (
   <div className="card bg-red-300 shrink-0 relative cursor-pointer w-full h-full">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src={image} alt="Project Image" />
        <div className="absolute inset-0 card-image-gradient pointer-events-none"></div>
      </div>

      <div className="overlay overlay-default">
        <div className="title-box">
          <h2 className="font-poppins text-[30px] md:text-[62px]">{title}</h2>
          {/* <div className="arrow-overlay">
              <img src="/assets/icons/up_arrow.svg" alt="Project Image" />
          </div> */}
          <p className="font-bricolage font-semibold text-[16px]">{location}</p>
        </div>
      </div>

      <div className="overlay overlay-hover">
        <div className="hover-box font-roboto text-lg">
          <p className="from-bottom">Area: {area}</p>
          <p className="from-bottom">Service: {service}</p>

          <div className="cta from-bottom">
            <button type="button" className="case-study-button font-bricolage" onClick={viewCaseStudy}>
              View Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
