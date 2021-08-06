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

const Leftsideimg = (props) => {

  const gContext = useContext(GlobalContext);

  return (
    <div id="why-rankpedia-para-margin1" className="row mt-18 mb-20 ">
      <div className="col-sm-6">
      <div
              className="l4-content-img-2  rounded-10 text-center"
              data-aos="fade-right"
              data-aos-duration={600}
              data-aos-delay={500}
              data-aos-once="true"
            >
        {/* <img id="kid_video" className="img-fluid" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621605779/kid_watching_video_zamtkc.png"} alt="" /> */}


        {/* <div
              className="bg-images d-flex align-items-center justify-content-center max-w-540  rounded-10 mx-auto"
             
            >
              
              <img className="lfrte-igst abtus-brdrs-mgs" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1624876259/shutterstock_1827527717_1_-min_mb8bpo.jpg"/>
             
            </div> */}

            
        <div
              className="bg-images d-flex align-items-center justify-content-center max-w-540 py-18 py-sm-28 rounded-10 mx-auto"
              css={`
                background-image: url(${"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625559506/shutterstock_1827527717_1_-min_mb8bpo_fokyqp.jpg"});
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
      </div>
      <div className="col-sm-6 ">
      <div
              className="mt-sm-0 mt-lg-14 ml-12"
              id="pstp-kmstr"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true"
            >
        {/* <div className="col-8"> */}
          <p className="gr-text-8 clscls why-rankpedia-exp-edu-text">
          Experiential learning can significantly boost students motivation to learn. Learning by rote or repetitive learning has long been supplanted by ‘Learning by Doing’. To provide a training module, the experiential learning methodology has become a well-known approach for accelerated learning.  
          </p>

          <p className="gr-text-8 clscls">
          <b>Teacher’s voice validating this point - With accelerated learning, they learn to identify patterns in issues and try to derive solutions. </b>
          </p>
         </div> 
      </div>
    </div>
  )
}

export default Leftsideimg
