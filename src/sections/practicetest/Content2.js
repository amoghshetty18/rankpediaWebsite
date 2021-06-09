import React from "react";

import imgM from "../../assets/image/home-6/png/content-2-mobile.png";
import imgS from "../../assets/image/home-6/png/yellow-small-shape.png";

const Content2 = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center justify-content-center justify-content-lg-start">
          {/* Content Section */}
          <div className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-md-1 pd-lft-0">
            <div className="pt-7 pb-7 pr-sm-5 pr-md-9 pr-lg-0">
              <h2
                className="font-size-11 mb-9 pr-sm-18 pr-md-10 pr-lg-5 pr-xl-5 engag"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                Solve problems and revise effectively
              </h2>
              <p
                className="clscls mb-0"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                Begin with solving <b> important questions for CBSE </b> exams and gradually move on to more complex issues to become conceptually strong.
              </p>
            </div>
          </div>
          {/* Content Image Section */}
          <div className="col-xl-6 offset-xl-1 col-lg-6 col-xs-4 order-1 order-md-2">
            <div className="l6-content-image-group-2-fortwods">
              <div className="img-2">
                <img
                  className="w-100"
                  src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621335958/pexels-cottonbro-4778404_ovixhf.png"}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
