import Image from "next/image";
import "./ProjectCardSample.css"

export default function ProjectCardSample() {
  return (
   <div className="card bg-red-300 h-[480px] w-[490px]">
      <img src="/assets/blueprints/blueprint3.png" alt="Project Image" />

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
