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
import imgDP from "../../assets/image/home-2/png/dot-pattern-black.png";

const Rightsideimg = (props) => {

  const gContext = useContext(GlobalContext);

  return (
    <div className="row mx-10 justify-content-center ">
      <div className="col-12">
        <div className="text-center">
          <h3 className="wat-exprt"> When students participate in experimental education, everything improves </h3>
          </div>
          </div>

          <div className="">
          <div className="col-sm-6 flt-lft">
      <div
              className="mt-13 mt-lg-0 gsrt-smgth"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true"
            >
        {/* <div className="col-8"> */}
         <h3 className="why-pdrspt-scxr mb-6">
           1. Real-world Relevance
          </h3> 
          <div
              className="Mobile-view l4-content-img-2 ml-lg-10 ml-xl-7 rounded-10 text-center"
              data-aos="fade-right"
              data-aos-duration={600}
              data-aos-delay={500}
              data-aos-once="true"
            >
        {/* <img id="kid_video" className="img-fluid" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621605779/kid_watching_video_zamtkc.png"} alt="" /> */}


        <div
              className="bg-images d-flex align-items-center rounded-10 justify-content-center max-w-540 py-18 py-sm-28 rounded-10 mx-auto
            en-tmsr-ods"
            >
             
                <img className="why-pkd-fig rounded-10" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625559506/shutterstock_414856957-min_vusnxi_mwdtkk.jpg"/>
              
            </div>


      </div>
          <p className="gr-text-8 clscls">
          'Why do I have to study this? Am I going to use any of it after my graduation?' Students frequently ask these questions. Experiential learning will enable them to understand that the courses they are taking are not as pointless as they believe. 
          </p>
          <p className="gr-text-8 clscls">
          Experiential learning integrates facts, concepts, and theories into hands-on tasks, resulting in real-world solutions. The experiential curriculum thereby mimics the ‘real’ society. 
        </p>  
        <p className="gr-text-8 clscls">
        <b>Student’s voice validating this point - It is easier when I know how it is going to help me in the ‘real world’.</b>
        </p>
         </div> 
      </div>


      <div className="Desktop-view col-sm-6 flt-lft">
      <div
              className="l4-content-img-2 ml-lg-10 ml-xl-7 rounded-10 text-center"
              data-aos="fade-right"
              data-aos-duration={600}
              data-aos-delay={500}
              data-aos-once="true"
            >
        {/* <img id="kid_video" className="img-fluid" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621605779/kid_watching_video_zamtkc.png"} alt="" /> */}


        <div
              className="mt-md-10 bg-images d-flex align-items-center rounded-10 justify-content-center max-w-540 py-18 py-sm-28 rounded-10 mx-auto
            en-tmsr-ods"
            >
             
                <img className="why-pkd-fig rounded-10" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625559506/shutterstock_414856957-min_vusnxi_mwdtkk.jpg"/>
              
            </div>


      </div>
      </div>






      


   










          </div>
        
    </div>
  )
}

export default Rightsideimg
