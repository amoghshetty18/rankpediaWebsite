import React from "react";
import { Link } from "gatsby";
import '../../css/styles.css'
import homesection1 from "../../assets/image/home/enagage.png";
import homesection2 from "../../assets/image/home/l6-content2-img.png";
import homesection3 from "../../assets/image/home/enrich.png";
import homesection4 from "../../assets/image/home/prepare.png";
import home from "../../assets/image/homePage-new/main-pic.png"

import group1 from "../../assets/image/home/gallery1.png";
import group2 from "../../assets/image/home/gallery2.png";
import group3 from "../../assets/image/home/gallery3.png";
import group4 from "../../assets/image/home/gallery4.png";


import small1 from "../../assets/image/home/small1.png";
import small2 from "../../assets/image/home/small2.png";
import small3 from "../../assets/image/home/small3.png";
import small4 from "../../assets/image/home/small4.png";

import homebanner from "../../assets/image/home/banner.png";

const Section1 =  ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div class="hero-area"  id="roller-bnr">
          <div className="container-fluid px-10">
            <div className="row">
              <div className="col-lg-6">
                <div class="hero-content dark-mode-texts">
                  <h1 class="gr-text-2 mb-9 learnon">Democratizing Global-Standard Education</h1>
                  <p class="gr-text-8 pr-5 pl-0 pr-xl-11 mb-9 learnpar">We believe in the concept of education for all, so we strive diligently to provide equal educational opportunities to students across the world. We have built an academic ecosystem that provides an affordable world-class educational experience. </p>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                
                <div className="blob-container">
                  <img id="main-background-img" src={ home } alt="not found"/>
                  {/* <img id='main-background-img' src="../../assets/image/homePage_new/main-pic.png" alt="" /> */}
                  {/* <img id='main-background-img' src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1626160479/home-page/banner_mggspd.png" alt="" /> */}
                  <img className="science" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1627282855/home-page/science_2_np2yys.png" alt="" />
                  <img className="bulb" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1627282855/home-page/light-bulb_1_tq3az2.png" alt="" />
                  <img className="book" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1627282855/home-page/agenda_1_qagpxq.png" alt="" />
                  <img className="graduation" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1627282854/home-page/graduation_1_tqjhnv.png" alt="" />
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
