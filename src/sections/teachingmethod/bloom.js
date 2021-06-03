import React from "react";
import { Link , url} from "gatsby";
import homebanner from "../../assets/image/home/banner.png";

const Bloom = ({ className, ...rest }) => {
  return (
   
    <div class="content-section bg-default-4 pt-11 pt-lg-13 pb-8 pb-lg-15">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7" data-aos="flip-right"  data-aos-duration="1000" data-aos-once="true">
          <div class="content-img">
            <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622027733/pexels-tima-miroshnichenko-5427671_nan7v2.png" alt="" class="w-100" />
            </div>
        </div>
        <div class="col-lg-5 pl-xl-21">
          <div class="section-title content-text mb-13">
            <h2 class="title gr-text-3 mb-6 vision-msn-hdret">Why Bloom's taxonomy</h2>
            </div>
          <div class="content-widget">
            <div class="row">
              <div class="col-md-5 col-lg-11 col-xl-11" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
                <div class="single-widget mb-9">
                  <p class="gr-text-9 abt-trty">Learning has never been easier. Learn with ease and prepare extensively with Rankpedia to stay ahead of the learning curve and exceed expectations. </p>
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

export default Bloom;
