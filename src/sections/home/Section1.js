import React from "react";
import { Link } from "gatsby";

import homesection1 from "../../assets/image/home/enagage.png";
import homesection2 from "../../assets/image/home/l6-content2-img.png";
import homesection3 from "../../assets/image/home/enrich.png";
import homesection4 from "../../assets/image/home/prepare.png";

import group1 from "../../assets/image/home/gallery1.png";
import group2 from "../../assets/image/home/gallery2.png";
import group3 from "../../assets/image/home/gallery3.png";
import group4 from "../../assets/image/home/gallery4.png";


import small1 from "../../assets/image/home/small1.png";
import small2 from "../../assets/image/home/small2.png";
import small3 from "../../assets/image/home/small3.png";
import small4 from "../../assets/image/home/small4.png";

import homebanner from "../../assets/image/home/banner.png";

const Section1 = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
      <div class="hero-area position-relative " id="roller-bnr">
      
      <div class="container">
        <div class="row justify-content-center align-items-center">
        <div class="col-lg-8 col-md-9 order-lg-1 mt-9 mt-lg-0 tt-sct" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
            <div class="hero-content dark-mode-texts">
              <h1 class="gr-text-2 mb-9 learnon">Smarter Learning for a 
                 smarter generation</h1>
              <p class="gr-text-8 pr-5 pl-0 pr-xl-11 mb-9 learnpar">Learning has never been easier. Learn with ease and prepare extensively with RankPedia to stay ahead of the learning curve and exceed expectations. </p>
              <div class="hero-btn">
                <a href="#" class="btn-link with-icon text-green1 gr-text-7 font-weight-bold">Get started <i class="icon icon-tail-right font-weight-bold"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-9 order-lg-2">
            <div class="hero-img" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
              <div class="hero-video-thumb position-relative">
              <img src={ homebanner } class="clrs-rtd rounded-8" alt="" />
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
      </div>
    </>
  );
};

export default Section1;
