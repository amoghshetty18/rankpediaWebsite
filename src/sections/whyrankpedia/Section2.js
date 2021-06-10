import React,{ useContext } from 'react'

import { Link } from "gatsby";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import GlobalContext from "../../context/GlobalContext";
import imgC from "../../assets/image/inner-page/png/video-bg.png";

const Section2 = (props) => {

  const gContext = useContext(GlobalContext);

  return (
    <div className="row mt-18 mb-20 ">
      <div className="col-sm-6 section-2-column">
      <div
              className="l4-content-img-2 ml-lg-10 ml-xl-7 rounded-10 text-center"
              data-aos="fade-right"
              data-aos-duration={600}
              data-aos-delay={500}
              data-aos-once="true"
            >
        {/* <img id="kid_video" className="img-fluid" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621605779/kid_watching_video_zamtkc.png"} alt="" /> */}


        <div
              className="bg-images d-flex align-items-center justify-content-center max-w-540 py-18 py-sm-28 rounded-10 mx-auto"
              css={`
                background-image: url(${"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622110971/pexels-daria-shevtsova-1560932_ahh5y9.png"});
              `}
            >
              <a
                href="https://www.youtube.com/watch?v=lK2HwzB-unE&list=RDdYReZzz8vu4&index=10"
                className="video-btn sonar text-white circle-98 font-size-8"
                onClick={(e) => {
                  e.preventDefault();
                  gContext.toggleVideoModal();
                }}
              >
                <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621536971/Icon_material-play-circle-outline_rpwskz.svg"/>
              </a>
            </div>


      </div>
      </div>
      <div className="col-sm-6 ">
      <div
              className="mt-13 mt-lg-0"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true"
            >
        {/* <div className="col-8"> */}
          <h3 className="engag mb-6">
          Technology Integration for Holistic Learning Outcomes
          </h3>
          <p className="gr-text-8 clscls">
          Academically aligned technology fulfils the requirements of teachers and students parallelly. Digital tools blended with educational resources weave a far more effective learning experience. 
          </p>
         </div> 
      </div>
    </div>
  )
}

export default Section2
