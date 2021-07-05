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

const Rightsideimg2 = (props) => {

  const gContext = useContext(GlobalContext);

  return (
    <div className="row mx-10 justify-content-center " id="drds-pnptrep">
      

          <div className="">
          <div className="col-sm-6 flt-lft">
      <div
              className="mt-13 mt-lg-0"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true"
            >
        {/* <div className="col-8"> */}
         <h3 className="why-pdrspt-scxr mb-12">
           3. Opportunity for Reflection
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
              className="bg-images d-flex align-items-center justify-content-center max-w-540 py-18  rounded-10 mx-auto"
              id="jyjn-jbnvgrd"
            >
             
             <img className="why-pkd-fig rounded-10" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1624956260/why-rankpedia_b69cfd.jpg"/>
                {/* <img className="why-pkd-fig" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622400485/Group_247_qi0bq6.png"/> */}
              
            </div>


      </div>
          <p className="gr-text-8 clscls">
          Reflection is the intrinsic part of the experiential learning theory. When students reflect on the results and combine realistic experiences with the concepts, they use more areas of their brains.  
          </p>
           <p className="gr-text-8 clscls">
           Experiential learning aids in the transition from novice to expert. Students learn to analyse how their activities influence the outcome. This analysis allows them to see how the concepts that they have learnt can be applied to different situations.  
           </p> 
           <p className="gr-text-8 clscls">
          <b>School’s voice validating this point - Experiential learning aids in the transition from novice to expert.</b> 
          </p>
           <p className="gr-text-8 clscls">
          <b>Parent’s voice validating this point - Reflecting allows them to see how the concepts that they had learnt can be applied to different situations.</b>
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
              className="bg-images d-flex align-items-center justify-content-center max-w-540 py-18  rounded-10 mx-auto"
              id="jyjn-jbnvgrd"
            >
             
             <img className="why-pkd-fig rounded-10" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1624956260/why-rankpedia_b69cfd.jpg"/>
                {/* <img className="why-pkd-fig" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622400485/Group_247_qi0bq6.png"/> */}
              
            </div>


      </div>
      </div>

</div>
        
    </div>
  )
}

export default Rightsideimg2
