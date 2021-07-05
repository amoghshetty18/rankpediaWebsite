import React, { useContext } from "react";
import { Link } from "gatsby";

import GlobalContext from "../../context/GlobalContext";
import imgC from "../../assets/image/inner-page/png/video-bg.png";


const Videosection = () => {
  const gContext = useContext(GlobalContext);

  return (
    <div className="pt-14 pt-md-19 pt-lg-27 pb-15 pb-md-18 pb-lg-25 mb-lg-1">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div
            className="col-xl-6 col-lg-6 col-md-10 col-sm-11"
            data-aos="fade-right"
            data-aos-duration={500}
          >
           <div class="Mobile-view">
           <h2
                className=" font-size-10 mb-8 letter-spacing-n83"
                data-aos="fade-up"
                data-aos-duration={600}
              >
              Integrated Curriculum and Hybrid Learning
              </h2>
           </div>
            <div
              className="bg-images d-flex align-items-center justify-content-center max-w-540 py-18 py-sm-28 rounded-10 mx-auto"
              css={`
                background-image: url("https://res.cloudinary.com/ddo1ag5nz/image/upload/v1624874128/shutterstock_1701863368-min_idibkf.jpg");
              `}
            >
              
              <div
              
                className="video-btn sonar text-white circle-98 font-size-8"
                onClick={(e) => {
                  e.preventDefault();
                  gContext.toggleVideoModal();
                }}
              >
                               {/* <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621536971/Icon_material-play-circle-outline_rpwskz.svg"/> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10 col-sm-11">
            <div className="pt-9 pt-lg-0 pr-xs-10 pr-sm-5 pr-md-25 pr-lg-0 pl-xl-10">
              <h2
                className="Desktop-view font-size-10 mb-8 letter-spacing-n83"
                data-aos="fade-up"
                data-aos-duration={600}
              >
              Integrated Curriculum and Hybrid Learning
              </h2>
              <p
                className="font-size-6 mb-0 pr-xs-15 pr-sm-10 pr-xl-10"
                data-aos="fade-up"
                data-aos-duration={900}
              >
                Provide comprehensive, thorough, and remote learning programs to students. Get a detailed scope of topics, classes, and practice tests. {" "}
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videosection;
