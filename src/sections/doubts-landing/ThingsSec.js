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
const ThingsSec = ({ Title,Accordianheading1,Accordianpara1,Accordianheading2,Accordianpara2,Accordianheading3,Accordianpara3,
  Accordianheading4,Accordianpara4,Accordianheading5,Accordianpara5,Accordianheading6,Accordianpara6,Accordianheading7,Accordianpara7,Accordianpara71 }) => {
  const gContext = useContext(GlobalContext);

  return (
    <div className="pt-10 pt-md-19 pt-lg-10 pb-15 pb-md-18 pb-lg-25 mb-lg-1">
      <div className="container">
         {/* <!-- Section Title --> */}
         <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-xs-10">
              <div className="Heading-styling text-center pt-5 pt-lg-10 pb-13 pb-lg-12 pr-lg-10 pr-xl-0">
                <h2 className=" mb-0">
                Few Things to Know
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
                    How many doubts can I ask in a day? 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    Unlimited. 
                    <br/>
                      Send as many questions as you can, and we shall answer each in as much detail as you want. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What if I need a solution urgently?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p className="accordiondisc">
                Our experts are available to help you 24/7. Send your questions any time and get your answer within 24 hours. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    If I have more doubts on the same topic, how can I get them resolved? 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    Firstly, upload all your questions on our doubt-clearing portal. After getting detailed explanations, if you still feel you need more clarity, you can quickly get in touch with an expert and understand everything in a live interaction. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What kind of help can I get? 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    Doubt solving will not just be limited to providing answers to your questions. You will also be guided about the approach to solving similar problems in the future.  
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Will I get all my questions answered by the same teacher? 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    We have an outstanding team of subject-matter experts. They are all a part of this dedicated doubt-solving platform and will help in resolving your queries. 
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
                background-image: url(${imgC});
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
