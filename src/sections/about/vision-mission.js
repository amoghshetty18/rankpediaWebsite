import React from "react";
import { Link , url} from "gatsby";
import homebanner from "../../assets/image/home/banner.png";

const VisionMission = ({ className, ...rest }) => {
  return (
   
    <div class="content-section bg-default-4 abt-ambis">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6" data-aos="flip-right"  data-aos-duration="1000" data-aos-once="true">
          <div class="content-img">
            <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1620108598/l6-content1-img-min_envcrg.png" alt="" class="w-100" />
            </div>
        </div>
        <div class="col-lg-6 pl-xl-21">
          <div class="section-title content-text mb-13">
            <h2 class="title gr-text-3 mb-6 abt-tws">We have big ambitions, yet our feet are firmly on the ground.</h2>
            </div>
          <div class="content-widget">
            <div class="row">
              <div class="col-md-6 col-lg-11 col-xl-11" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
                <div class="single-widget mb-9">
                  <h3 class="w-title gr-text-7 abt-ourmis">Our mission</h3>
                  <p class="gr-text-9 abt-trty">We are on a mission to ensure equal educational opportunities for all by leveraging technology. </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-11 col-xl-11" data-aos="fade-left" data-aos-duration="1100" data-aos-once="true">
                <div class="single-widget mb-9">
                  <h3 class="w-title gr-text-7 abt-ourmis">Our vision</h3>
                  <p class="gr-text-9 abt-trty">We envision a world where everyone, anywhere can empower themselves through the power of learning. </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-11 col-xl-11" data-aos="fade-left" data-aos-duration="1100" data-aos-once="true">
                <div class="single-widget mb-9">
              <a href="" class="btn btn-red mx-auto gtstrdr">Get Started</a>
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
