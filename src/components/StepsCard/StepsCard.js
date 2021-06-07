import React from "react";

import imgA1 from "../../assets/image/home-2/png/arrow-1.png";
import imgA2 from "../../assets/image/home-2/png/arrow-2.png";
import imgS from "../../assets/image/home-2/png/search.png";
import imgE from "../../assets/image/home-2/png/event-confirm.png";
import imgR from "../../assets/image/home-2/png/right-layer.png";

const StepsCard = ({ title,step1title,step2title,step3title, step1info, step2info, step3info ,className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-xs-10">
              <div className="Heading-styling text-center pt-5 pt-lg-10 pb-13 pb-lg-12 pr-lg-10 pr-xl-0">
                <h2 className=" mb-0">
                  {title}
                </h2>
              </div>
            </div>
          </div>
          {/* <!-- Section Title --> */}
          {/* <!-- Progress Items --> */}
          <div className="row justify-content-center">
            <div className="col-sm-12 col-xs-8">
              <div className="timeline-area d-sm-flex just justify-content-lg-between flex-wrap flex-lg-nowrap position-relative">
                {/* <!-- Image Group --> */}
                <div className="image-group-3">
                  <div
                    className="arrow-shape-1 d-none d-lg-block absolute-top-left"
                    data-aos="fade-in"
                    data-aos-delay={600}
                    data-aos-once="true"
                  >
                    <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621527072/Line_1_o7ov8y.svg" alt="" />
                  </div>
                  <div
                    className="arrow-shape-2 d-none d-lg-block absolute-top-right"
                    data-aos="fade-in"
                    data-aos-delay={600}
                    data-aos-once="true"
                  >
                    <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621527072/Line_1_o7ov8y.svg" alt="" />
                  </div>
                </div>
                {/* <!-- Single Progress --> */}
                <div
                  className="single-bar pr-md-18 pr-lg-0 col-lg-4 mb-10 mb-lg-0 text-center text-md-left aos-init aos-animate"
                  data-aos="fade-in"
                  data-aos-delay={500}
                  data-aos-once="true"
                >
                  <div className="square-97 bg-dodger-red stepradius mb-10 shadow-bg-dodger-blue-2 mx-auto mx-md-0">
                    <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621529050/Repeat_Grid_1_vasjbr.svg" alt="" />
                  </div>
                  <div className="pt-10 pt-lg-10 pb-lg-15 pl-lg-10 pr-lg-10 text-center">
                    <h6>{step1title}</h6>
                    <p className="font-size-5 line-height-28 mb-0">
                     {step1info}
                    </p>
                  </div>
                </div>
                {/* <!-- End Single Progress --> */}
                {/* <!-- Single Progress --> */}
                <div
                  className=" single-bar pr-md-18 pr-lg-0 col-lg-4 mb-10 mb-lg-0 text-center text-md-left aos-init aos-animate"
                  data-aos="fade-in"
                  data-aos-delay={500}
                  data-aos-once="true"
                >
                  <div className="square-97 bg-dodger-red stepradius mb-10 shadow-bg-dodger-blue-2 mx-auto mx-md-0">
                    <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621529166/2_yagkws.svg" alt="" />
                  </div>
                  <div className="pt-10 pt-lg-10 pb-lg-15 pl-lg-10 pr-lg-10 text-center">
                  <h6>{step2title}</h6>
                    <p className="font-size-5 line-height-28 mb-0">
                      {step2info}
                    </p>
                  </div>
                </div>
                {/* <!-- End Single Progress --> */}
                {/* <!-- Single Progress --> */}
                <div
                  className="single-bar pr-md-18 pr-lg-0 col-lg-4 mb-10 mb-lg-0 text-center text-md-left aos-init aos-animate"
                  data-aos="fade-in"
                  data-aos-delay={500}
                  data-aos-once="true"
                >
                  <div className="square-97 bg-doger-green stepradius mb-10 shadow-bg-dodger-blue-2 mx-auto mx-md-0">
                    <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621529167/Icon_ionic-md-checkmark-circle-outline_ckmtzk.svg" alt="" />
                  </div>
                  <div className="pt-10 pt-lg-10 pb-lg-15 pl-lg-10 pr-lg-10 text-center">
                  <h6>{step3title}</h6>
                    <p className="font-size-5 line-height-28 mb-0">
                      {step3info}
                    </p>
                  </div>
                </div>
                {/* <!-- End Single Progress --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Progress Items --> */}
        </div>
      </div>
    </>
  );
};

export default StepsCard;
