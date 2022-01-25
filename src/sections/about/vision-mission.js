import React from "react";
import { Link , url} from "gatsby";
import homebanner from "../../assets/image/home/banner.png";

const VisionMission = ({ className, ...rest }) => {
  return (
   
    <div class="content-section bg-default-4 abt-ambis" id="second-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6" data-aos="flip-right"  data-aos-duration="1000" data-aos-once="true">
        <div class="Mobile-view section-title content-text mb-13">
            <h2 class="title gr-text-3 mb-6 abt-tws">We have big ambitions, yet our feet are firmly on the ground.</h2>
            </div>
          <div class="content-img">
            <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625558028/shutterstock_532298581-min_whshfo_a8vnis.jpg" alt="" class="w-100 rounded-10" id="about-nsd-omngd" />
            </div>
        </div>
        <div class="col-lg-6 pl-xl-21">
          <div class="Desktop-view section-title content-text mb-13">
            <h2 class="title gr-text-3 mb-6 abt-tws">We have big ambitions, yet our feet are firmly on the ground.</h2>
            </div>
          <div class="content-widget">
            <div class="row">
              <div class="col-md-6 col-lg-11 col-xl-11" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
                <div class="single-widget mb-9">
                  <h3 class="w-title gr-text-7 abt-ourmis">Our Vision</h3>
                  <p class="gr-text-9 abt-trty">Our objective is to make a diverse array of online education opportunities accessible to students around the globe. Every child has the right to education, and we are attempting to reach out to those children who are unable to receive an education due to a variety of factors, including social and economic restraints. We aim to bring back those children who have dropped out of school for a variety of reasons into the education system. We want to increase kids' enthusiasm for learning by integrating innovative techniques. </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-11 col-xl-11" data-aos="fade-left" data-aos-duration="1100" data-aos-once="true">
                <div class="single-widget mb-9">
                  <h3 class="w-title gr-text-7 abt-ourmis">Our Mission</h3>
                  <p class="gr-text-9 abt-trty">We aim to provide learners with a rich and diverse learning environment by incorporating international curricula with technologically advanced pedagogical practices. We recognize the significance of holistic education, thus, we have adopted effective teaching methodologies that promote outcome-based experiential learning. We provide an equal education platform and high-quality learning content to learners, assisting them in developing solid conceptual foundations and improving their academic and career prospects. We've also embarked on a journey to bridge the digital divide that exists here, by providing education to those children who belong to remote areas, for whom receiving a quality education is a far-fetched dream.</p>
                </div>
              </div>
              <div class="col-md-6 col-lg-11 col-xl-11" data-aos="fade-left" data-aos-duration="1100" data-aos-once="true">
                {/* <div class="single-widget mb-9">
              <a href="" class="btn btn-red mx-auto gtstrdr">Get Started</a>
                </div> */}
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
