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
    <div className="row mx-10 justify-content-center ">
      

          <div className="">
          <div className="col-sm-6 flt-lft">
      <div
              className="mt-13 mt-lg-0"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true"
            >
        {/* <div className="col-8"> */}
         <h3 className="why-pdrspt-scxr mb-6">
           3. Provide Opportunity for Reflection
          </h3> 
          <p className="gr-text-8 clscls">
          Learn with ease and prepare extensively with RankPedia to stay ahead of the learning curve and exceed expectations.
          Learn with ease and prepare extensively with RankPedia to stay ahead of the learning curve and exceed expectations.
            Learn with ease and prepare extensively with RankPedia to stay ahead of the learning curve and exceed expectations.
          </p>
          {/* <p className="gr-text-8 clscls">
          Learn with ease and prepare extensively with RankPedia to stay ahead of the learning curve and exceed expectations.
          Learn with ease and prepare extensively with RankPedia to stay ahead of the learning curve and exceed expectations.
            Learn with ease and prepare extensively with RankPedia to stay ahead of the learning curve and exceed expectations.
          </p> */}
         </div> 
      </div>


      <div className="col-sm-6 flt-lft">
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
              
            >
             
             <img className="why-pkd-fig" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622400485/Group_247_qi0bq6.png"/>
                {/* <img className="why-pkd-fig" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622400485/Group_247_qi0bq6.png"/> */}
              
            </div>


      </div>
      </div>

</div>

      <div className="">
      <div className="col-sm-6 flt-lft">
      <div
              className="mt-13 mt-lg-0"
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
          {/* <p className="gr-text-8 clscls">
          Learn with ease and prepare extensively with RankPedia to stay ahead of the learning curve and exceed expectations.
          Learn with ease and prepare extensively with RankPedia to stay ahead of the learning curve and exceed expectations.
            Learn with ease and prepare extensively with RankPedia to stay ahead of the learning curve and exceed expectations.
          </p> */}
         </div> 
      </div>


      <div className="col-sm-6 flt-lft">
      <div
              className="l4-content-img-2 ml-lg-10 ml-xl-7 rounded-10 text-center"
              data-aos="fade-right"
              data-aos-duration={600}
              data-aos-delay={500}
              data-aos-once="true"
            >
        {/* <img id="kid_video" className="img-fluid" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621605779/kid_watching_video_zamtkc.png"} alt="" /> */}


        <div
              className="bg-images d-flex align-items-center justify-content-center max-w-540  rounded-10 mx-auto"
              
            >
             
             <img className="why-pkd-fig" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622400485/Group_247_qi0bq6.png"/>
                {/* <img className="why-pkd-fig" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622400485/Group_247_qi0bq6.png"/> */}
              
            </div>


      </div>
      </div>






      


   










          </div>
        
    </div>
  )
}

export default Rightsideimg2
