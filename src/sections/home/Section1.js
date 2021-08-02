import React from "react";
import { Link } from "gatsby";
import '../../css/styles.css'
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

const Section1 =  ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div class="hero-area"  id="roller-bnr">
      
          {/* <div class="container">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-8 col-md-9 order-lg-1 mt-9 mt-lg-0 tt-sct" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
                <div class="hero-content dark-mode-texts">
                  <h1 class="gr-text-2 mb-9 learnon">Smarter Learning for a Smarter Generation</h1>
                  <p class="gr-text-8 pr-5 pl-0 pr-xl-11 mb-9 learnpar">When great teachers meet great technology, learning becomes easy. Enjoy trouble-free learning, and boost your preparation with RankPedia to unlock new possibilities.  </p>
                  <div class="hero-btn">
                    <a href="#" class="btn-link with-icon text-green1 gr-text-7 font-weight-bold">Get Started <i class="icon icon-tail-right font-weight-bold"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-9 order-lg-2">
                <div class="hero-img" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
                  <div class="hero-video-thumb position-relative">
                  <img src={ "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625508835/banner-0ff164b5601283a714f182a6c289998b_1_-min_fcvjts.png" } class="clrs-rtd rounded-8" alt="" />
                    <div className='blob-container'>
                      <img id='main-background-img' src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1626160479/home-page/banner_mggspd.png" alt="" />
                      <img className="science" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1626324777/home-page/science_2_mde8xg.png" alt="" />
                      <img className="bulb" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1626324777/home-page/light-bulb_1_lmqgdn.png" alt="" />
                      <img className="book" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1626324777/home-page/Books_kdj8sd.png" alt="" />
                      <img className="graduation" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1626324777/home-page/graduation_1_ueocam.png" alt="" />
                      <div className='blob1'>
                        
                      </div>
                      <div className='blob2'>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div> */}

          <div className="container-fluid px-10">
            <div className="row">
              <div className="col-lg-6">
                <div class="hero-content dark-mode-texts">
                  <h1 class="gr-text-2 mb-9 learnon">Smarter Learning for a Smarter Generation</h1>
                  <p class="gr-text-8 pr-5 pl-0 pr-xl-11 mb-9 learnpar">When great teachers meet great technology, learning becomes easy. Enjoy trouble-free learning, and boost your preparation with Rankpedia to unlock new possibilities.  </p>
                  {/* <div class="hero-btn">
                    <a href="#" class="btn-link with-icon text-green1 gr-text-7 font-weight-bold">Get Started <i class="icon icon-tail-right font-weight-bold"></i></a>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                
                <div className="blob-container">
                  <img id='main-background-img' src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1626160479/home-page/banner_mggspd.png" alt="" />
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
