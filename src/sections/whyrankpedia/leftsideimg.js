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
    <div className="row mt-18 mb-20 ">
      <div className="col-sm-6">
      <div
              className="l4-content-img-2  rounded-10 text-center"
              data-aos="fade-right"
              data-aos-duration={600}
              data-aos-delay={500}
              data-aos-once="true"
            >
        {/* <img id="kid_video" className="img-fluid" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621605779/kid_watching_video_zamtkc.png"} alt="" /> */}


        <div
              className="bg-images d-flex align-items-center justify-content-center max-w-540  rounded-10 mx-auto"
             
            >
              
              <img className="lfrte-igst" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622190942/Group_178_kx3tbk.png"/>
             
            </div>


      </div>
      </div>
      <div className="col-sm-6 ">
      <div
              className="mt-13 mt-lg-0 ml-12"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true"
            >
        {/* <div className="col-8"> */}
          <p className="gr-text-8 clscls">
          Learn with ease and prepare extensively with RankPedia to stay ahead of the learning curve and exceed expectations.
          Learn with ease and prepare extensively with RankPedia to stay ahead of the learning curve and exceed expectations.
            Learn with ease and prepare extensively with RankPedia to stay ahead of the learning curve and exceed expectations.
          </p>

          <p className="gr-text-8 clscls">
          Learn with ease and prepare extensively with RankPedia to stay ahead of the learning curve and exceed expectations.
          Learn with ease and prepare extensively with RankPedia to stay ahead of the learning curve and exceed expectations.
            Learn with ease and prepare extensively with RankPedia to stay ahead of the learning curve and exceed expectations.
          </p>
         </div> 
      </div>
    </div>
  )
}

export default Leftsideimg
