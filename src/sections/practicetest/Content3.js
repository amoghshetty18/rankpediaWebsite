import React from "react";
import { Link } from "gatsby";

import imgM from "../../assets/image/home-6/png/content-3-mobile.png";
import imgS from "../../assets/image/home-6/png/green-shape.png";

const Content3 = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
       
        <div class="content-section pt-10">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 pd-lft-0" data-aos="flip-right" data-aos-duration="1000" data-aos-once="true">
            <div class="content-img sxrty-prprs">
           <img class="" src={ "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621243440/blooms_pges2w.png" } alt="" />
              {/* <img src="homesection1" alt="" class="w-100" /> */}
            </div>
          </div>
          <div class="col-10 col-lg-6 imgs-imt">
            <div class="section-title content-text mb-13" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
              <h2 class="title gr-text-3 mb-6 mt-3 engag" >Learn how it works for you </h2>
              <p class="gr-text-8 clscls">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                
            </div>
            <div class="content-widget">
              <div class="row">
                
              </div>
            </div>
          </div>
        </div>


     



        </div>
      </div>
    </div>
  );
};

export default Content3;
