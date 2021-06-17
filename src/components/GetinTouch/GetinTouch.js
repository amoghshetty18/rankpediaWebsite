import React from "react";
import { Link } from "gatsby";

import imgAS from "../../assets/image/home-6/png/app-store-img.png";
import imgPS from "../../assets/image/home-6/png/play-store-img.png";

const GetinTouch = ({ className, title , disc, ...rest }) => {
  return (
    <div className={className} {...rest}>
        <div className="GetinTouchBackground">
      <div className="container">
        <div className="border-bottom pt-13 pt-md-18 pt-lg-21 pb-13 pb-md-17 pb-lg-22">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="text-center text-lg-left mb-13 mb-lg-0">
                <h3
                  className="font-size-9 mb-7"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  {title}
                </h3>
                <p
                  className="Getintouchtext mb-0 "
                  data-aos="fade-up"
                  data-aos-delay={800}
                >
                  {disc}
                </p>
              </div>
            </div>
            <div className="col-lg-4 offset-xl-1 col-md-2 col-sm-10">
              <div className="contact-us-btn " data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
                <div class="hero-btn">
                <a href="#" class="btn contact-btn-styling mx-auto mrgrt">Get Started</a>
              </div>
              </div>
              <div className="readfaq-btn"  data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
                <div class="hero-btn">
                <a href="#" class="btn readfaq-btn-styling  mx-auto ">Read FAQs</a>
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

export default GetinTouch;
