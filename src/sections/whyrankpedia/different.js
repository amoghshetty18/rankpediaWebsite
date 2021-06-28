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

const Different = (props) => {

  const gContext = useContext(GlobalContext);

  return (
    <div className="row mt-18 mb-20 " id="no-desgn-wstr">

<div className="col-sm-6 ">
      <div
              className="mt-13 mt-lg-0  rdsr-cvxq-snc"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true"
            >
        {/* <div className="col-8"> */}
          {/* <h3 className="engag mb-6">
            Rankpedia is an NEP compliant edtech solution 
          </h3> */}
          <p className="gr-text-8 clscls">
          Experiential education is the process of learning through doing. This form of learning allows students to explore their own interests while also enabling them to solve challenges as they arise in a real-life context. 
          </p>
          <p className="gr-text-8 clscls">
          Students can apply ideas and knowledge they learn in the classroom to real-world circumstances when they engage in hands-on activities, experiences, and evaluation. 
            </p>
         </div> 
      </div>


      <div className="col-sm-6">
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
                background-image: url(${"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1624876169/shutterstock_257483128-min_v9v06j.jpg"});
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
    
    </div>
  )
}

export default Different
