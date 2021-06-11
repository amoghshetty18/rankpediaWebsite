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
                  <h3 class="w-title gr-text-7 abt-ourmis">Why us?</h3>
                  <p class="gr-text-9 abt-trty">We wish to deepen our roots and provide education in almost every stream, ranging from science and commerce to arts and law. Whether it's a tedious maths problem or a tricky science experiment, RankPedia explains it in a creative and electrifying way. We have brilliant and exceptional educators with extraordinary teaching strategies, which form the base of our online education.  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-11 col-xl-11" data-aos="fade-left" data-aos-duration="1100" data-aos-once="true">
                <div class="single-widget mb-9">
                  <h3 class="w-title gr-text-7 abt-ourmis">Our belief is in giving your child relief!</h3>
                  <p class="gr-text-9 abt-trty">It started with a simple thought of 'Why can't world-class education be affordable?'. This thought gave us a vision of providing education to children at a price they can afford. Not just this, but it also helped us to deliver world-class education by integrating taxonomies, pedagogy and the latest technological advancements to provide students with the best opportunities possible. We try to give the child a different perspective towards challenging concepts. This is achieved by explaining to the child the same concept with remarkable video sessions coupled with easy revision lessons.  </p>
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
