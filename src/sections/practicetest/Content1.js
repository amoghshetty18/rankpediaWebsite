import React from "react";

import imgM from "../../assets/image/home-6/png/practicetest-2.png";
import imgG from "../../assets/image/home-6/png/green-dot-pattern.png";

const Content1 = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center justify-content-center justify-content-lg-start">
          {/* Image Section */}
          <div className="col-xl-5 col-xs-4 col-lg-6">
            <div className="l6-content-image-group-practice-test">
              <div className="img-1">
                <img
                  className="w-100"
                  src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621328729/Group_9_sk7ue3.png"}
                  alt=""
                  data-aos="fade-down"
                  data-aos-delay={800}
                />
              </div>
              <div className="img-2">
                <img
                  className="w-100"
                  src={imgM}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={500}
                />
              </div>
            </div>
          </div>
          {/* Content Section */}
          {/* <div className="col-lg-6 col-md-8 col-xs-10 ml-lg-10 ml-xl-10">
            <div className="pt-7 pb-7 pb-lg-17 pl-sm-5 pl-md-9 pl-lg-10">
              <h2
                className=" mb-9 pr-xs-23 pr-sm-8 pr-md-18 pr-lg-18 engag"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                Want to improve in a specific subject chapter?
              </h2>
              <p
                className=" mb-0 pr-xl-13 clscls"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                Learning has never been easier. Learn with ease and prepare extensively with RankPedia to stay ahead of the learningcurve and exceed expectation.
              </p>
            </div>
          </div> */}


<div class="col-10 col-lg-6 imgs-imt-practice-test">
            <div class="section-title content-text mb-13" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
              <h2 class="title gr-text-3 mb-10 engag" >Want to improve in a specific subject chapter?</h2>
              <p class="gr-text-8 clscls">Practice tests are the best way to revise difficult chapters and topics. Get access to <b>CBSE practice tests </b>for all subjects and chapters at RankPedia.</p>
              
            </div>
            <div class="content-widget">
              <div class="row">
                
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Content1;
