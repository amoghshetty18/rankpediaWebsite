import React from "react";
import { Link , url} from "gatsby";
import homebanner from "../../assets/image/home/banner.png";

const Banner = ({ className, ...rest }) => {
  return (
   
      <div className={className} {...rest}>
      <div class="co-working bg-image bg-overlay overlay-2 pb-13 pt-24 pt-lg-32 pb-lg-28 d-lg-flex align-items-center lg:min-h-vh-100" id="about-banner-image">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-xl-9" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              <div class="hero-content section-title dark-mode-texts">
              {/* <h1 class="gr-text-2 abth">Democratising Education, One Milestone at a Time</h1> */}
              <h1 class="gr-text-2 abth">Democratising Education, One Milestone at a Time </h1>
                  <p class="abt-prgt">We have embarked on a mission to escalate the vision of children and provide education to them at a price they can afford. </p>
            
                <div class="more-btn case-btn">
                  <a href="#" class="btn-link with-icon text-green gr-text-7 font-weight-bold">Get started<i class="icon icon-tail-right font-weight-bold"></i></a>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <a href="#second-section" class="circle-40 border border-white gr-abs-bx-center mx-auto mt-13 goto">
          <i class="fas fa-chevron-down text-white mx-auto gr-text-8"></i>
        </a>
      </div>
    </div>
  );
};

export default Banner;
