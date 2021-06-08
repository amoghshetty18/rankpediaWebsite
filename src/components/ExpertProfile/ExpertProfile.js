import { defaults } from "lodash";
import React from "react";


const ExpertProfile = ({ image, name, position, ...rest }) => {
  return (
    <>
      {/* Single Team */}
      <div className="text-center mb-10 mb-lg-15">
        <div className="image-holder">
          <img className="" src={image} alt="" />
        </div>
        {/* <div className=" d-flex justify-content-between align-items-center flex-wrap "> */}
        <div className="d-flex align-items-center mb-5 mr-5 royal-star-icon">
          <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621586264/royal-crown_mko1z6.svg" />
        </div>
      {/* </div> */}
        <div class="d-flex align-items-center justify-content-between py-6 expert-information mr-lg-5 ml-lg-5">
            <div class="mt-0">
             <h6 class="experttype">Get started!</h6>
              <p class="expertname">Sharan kumar M</p>
            </div>
        <div class="mr-7"><a href="/#" class="exprtvideoiconbg text-white expertvdieoicon video-btn">
              <i class="fas fa-play"></i></a>
        </div>
        </div>
        <div className="content teaminfostyling">
          <p className="text-center expert-content">
          Learn with ease and prepare extensively with our support.
          </p>
        </div>
        <div>
      
      
    </div>
      </div>
     
      {/* Single Team */}
    </>
  );
};

export default ExpertProfile;