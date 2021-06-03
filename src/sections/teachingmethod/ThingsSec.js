import React, { useContext } from "react";
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
import Faqsection from "../faq/Faqsection"
const ThingsSec = () => {
  const gContext = useContext(GlobalContext);

  return (
    <div className="pt-14 pt-md-19 pt-lg-15 pb-15 pb-md-18 pb-lg-15 mb-lg-1">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          
          <div className="col-lg-6 col-md-10 col-sm-11">
          <div class="section-title content-text mb-13">
            <h2 class="title gr-text-3 mb-6 vision-msn-hdret">Apply, analyse & recall</h2>
            </div>
          <div class="content-widget">
            <div class="row">
              <div class="col-md-5 col-lg-11 col-xl-11" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
                <div class="single-widget mb-9">
                  <p class="gr-text-9 abt-trty">Learning has never been easier. Learn with ease and prepare extensively with Rankpedia to stay ahead of the learning curve and exceed expectations. </p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-10 col-sm-11"
            data-aos="fade-right"
            data-aos-duration={500}
          >
            <div
              className="bg-images d-flex align-items-center justify-content-center max-w-540 py-18 py-sm-28 rounded-10 mx-auto"
              css={`
                background-image: url(${"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622021133/pexels-max-fischer-5212687_bqsk70.png"});
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
      </div>
    </div>
  );
};

export default ThingsSec;
