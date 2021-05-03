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

const Section3 = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
      <div class="content-section pt-6 pt-lg-19 pb-7 bg-default-4">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-6 order-lg-2 extclt" data-aos="flip-right" data-aos-duration="2000" data-aos-once="true">
              <div class="content-img text-right">
              <img src={ homesection2 } alt="" />
              </div>
            </div>
            <div class="col-10 col-lg-6 col-xl-6 pr-xl-13 order-lg-1 formob">
              <div class="section-title content-text mb-13" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
                <h2 class="title gr-text-3 mb-6 engag">Got a Doubt? We solve it instantly</h2>
                <p class="gr-text-8 clscls">Get your doubts solved instantly, no matter what time it is or where you are. Our experts are just a click away.</p>
                  <a href="" class="btn btn-red mx-auto gtstrdr">Get Started</a>
              </div>
              <div class="content-widget">
                <div class="row mb-n9">
                 
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

export default Section3;
