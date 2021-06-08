import React from "react";
import { Link , url} from "gatsby";
import homebanner from "../../assets/image/home/banner.png";

const VisionMission = ({ className,Title,Paragraph,...rest }) => {
  return (
   
    <div class="content-section bg-default-4 pt-11 pt-lg-24 pb-8 pb-lg-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6" data-aos="flip-right"  data-aos-duration="1000" data-aos-once="true">
      
          <div class="content-img">
          <div
              className="mt-13 mt-lg-0"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true"
            >
            <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621243440/blooms_pges2w.png" alt="" class="w-100" />
            <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621520067/Group_9_x1xbvq.png" className="visin-mis-blk"/>
            </div>
          </div>
        </div>
        <div class="col-lg-6 pl-xl-21">
        <div
              className="l4-content-img-2 ml-lg-10 ml-xl-7 rounded-10 text-center"
              data-aos="fade-left"
              data-aos-duration={600}
              data-aos-delay={500}
              data-aos-once="true"
            >
          <div class="section-title content-text mb-13">
            <h2 class="title gr-text-3 mb-6 vision-msn-hdret">{Title}</h2>
            </div>
          <div class="content-widget">
            <div class="row">
              <div class="col-md-6 col-lg-11 col-xl-11" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
                <div class="single-widget mb-9">
                  <p class="gr-text-9 abt-trty">{Paragraph}</p>
                </div>
              </div>
            </div>
          </div>
</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default VisionMission;
