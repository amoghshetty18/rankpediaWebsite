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
const Faqforschools = () => {
  const gContext = useContext(GlobalContext);

  return (
    <div className="pt-10 pt-md-19 pt-lg-10 pb-15 pb-md-18 pb-lg-25 mb-lg-1">
      <div className="container">
         {/* <!-- Section Title --> */}
         <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-xs-10">
              <div className="Heading-styling text-center pt-5 pt-lg-10 pb-13 pb-lg-12 pr-lg-10 pr-xl-0">
                <h2 className=" mb-0">
                FAQ From Schools and Teachers
                </h2>
              </div>
            </div>
          </div>
          {/* <!-- Section Title --> */}
        <div className="row align-items-center justify-content-center">
          
          <div className="col-lg-6 col-md-10 col-sm-11">
          <Accordion id="accordianarrow2" preExpanded={['a']}> 
            <AccordionItem uuid="a">
                <AccordionItemHeading>
                    <AccordionItemButton>
                   <b> What does RankPedia offer? </b>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <ul className="accordiondisc">
                RankPedia is built with scalable technology that offers:
                <li>Unique teaching methods for educators and schools</li>
                <li>A detailed plan with teaching materials, case studies, mock tests, sample papers, and more.</li>
                <li>Comprehensive and regular reports of student outcomes to teachers, learners, and school admin.</li>
                </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <b>  How can RankPedia benefit the school and teachers? </b>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    The school can keep a track of the development of its students. It can check if its policies are implemented appropriately or not.<br/><br/>
RankPedia helps teachers to learn about the subjects and topics that students are interested in. Teachers can recognise the critical areas on the topics and subjects where the students need more attention. They can provide various assignments or homework to their students for practice. 

                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <b>  What if the school or the teacher doesn't possess a laptop? </b>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    Schools and teachers can use their mobile phones and tablets in case of unavailability of laptops. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <b>   How to access the Dashboard? </b>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    The school admin and teachers can access their dashboards with their credentials given after the registration. Check your email and message on the given mobile number for the information.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-10 col-sm-11"
            data-aos="fade-right"
            data-aos-duration={500}
          >
            <div
              className="bg-images d-flex align-items-center justify-content-center max-w-540 py-18 py-sm-28 rounded-10 mx-auto"
              css={`
                background-image: url("https://res.cloudinary.com/ddo1ag5nz/image/upload/v1624874683/shutterstock_1606120399-min_iuzzwg.jpg");
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
    </div>
  );
};

export default Faqforschools;
