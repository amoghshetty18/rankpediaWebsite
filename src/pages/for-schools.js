import React, {Section} from "react";

import PageWrapper from "../components/PageWrapper";
import StepsCard from "../components/StepsCard";
import GetinTouch from "../components/GetinTouch";
import Banner from "../components/BannerSection";
import Videosection from "../sections/for-schools/Videosection";
import SchoolFeaturues from  "../sections/for-schools/schoolfeatures";
import Schoolsolution from "../sections/for-schools/schoolsoultion";
import Infocard from "../sections/for-schools/for-school-info";
import Faqforschools from "../sections/for-schools/faqforschools";
import RespondSec from "../sections/doubts-landing/respondsec";
import ThingsSec from "../sections/doubts-landing/ThingsSec";
import ExpertSec from "../sections/doubts-landing/ExpertsSec";

const Forschools = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
            <a href="/login">  <button className="btn btn btn-blue-3 header-btn1 head-login">
                Login
              </button> </a> 

              {/* <div class="header-btn  ml-auto ml-lg-5 mr-6 mr-lg-0 d-none d-xs-block" id="login-tpr">
            <a class="btn bggr gr-text-9 d-none d-xs-inline-flex " href="#">
              Login
            </a>
          </div> */}
            </>
          ),
          footerStyle: "style3",
        }}
      >
          {/* Start of banner section */}
        <Banner 
        id="for-school-banner-button-hide"
        bgurl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1624955534/for-school-banner_mrezea.png"
        BannerTitle="Integrated Digital Education: RankPedia for Schools, Teachers & Students"
        BannerContent="Features for schools"
        BannerbtnText="Learn More"
        Applink="True"/>
        {/* End of banner section */}

        {/* Strat of second section */}
        <Videosection/>
        {/* End of second section */}
        
        {/* Start of school features */}
         <SchoolFeaturues/>
        {/*End of school features  */}

       {/* Strat of school solution section */}
        <Schoolsolution/>
        {/* End of school solution section */}

        {/* Start of Stpes section */}
        <StepsCard
        title="Get RankPedia for your School in 3 Steps"
        step1title="Create"
        step1info="Get started with your account. Fill in the details as required and click Enter. "
        step2title="Choose"
        step2info="Pick your monthly/yearly pack as per your choice. RankPedia offers three plans - Basic, Self-Paced, and Pro."
        step3title="Get Set Go"
        step3info="Start your first online learning session with RankPedia educational platform today."/>
        {/* End of steps section */}
        
        {/* <ExpertSec/> */}
        
        {/* Start of faq for schools section */}
        <Faqforschools/>
        {/* End of faq for schools section  */}
        
        <Infocard/>
        {/* Start of get in touch section */}
        <GetinTouch
        title="Ready for an Experience of 
        Blended Learning?"
       disc="Register to experience blended learning like never before and stay ahead."/>
       {/* End of get in touch section */}
      </PageWrapper>
    </>
  );
};
export default Forschools;
