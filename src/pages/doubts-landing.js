import React, {Section} from "react";

import PageWrapper from "../components/PageWrapper";
import StepsCard from "../components/StepsCard";
import GetinTouch from "../components/GetinTouch";
import Banner from "../components/BannerSection";
import Infocard from "../sections/faq/Infocard";
import RespondSec from "../sections/doubts-landing/respondsec";
import ThingsSec from "../sections/doubts-landing/ThingsSec";
import ExpertSec from "../sections/doubts-landing/ExpertsSec";


const Doubtslanding = () => {
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
        bgurl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621515666/doubts-banner-image-min_eteitn.jpg"
        BannerTitle="Get Every doubt answered under 30 mins, by experts"
        BannerContent="Learning has never been easier."
        BannerbtnText="Get started"/>
        {/* End of banner section */}
        {/* Start of who respond section */}
        <RespondSec/>
        {/* End of of who respond section */}
        {/* Start of Stpes section */}
        <StepsCard
        title="What do you need to Do? "
        step1info="Simply capture a clear picture of the question that you want our experts to solve. You can also type and send it to us. "
        step2info="Upload the question on RankPedia's doubt-solving platform. You will be notified when the question has been answered. "
        step3info="In a waiting time of around 24 hours, you will get a detailed solution from an expert. Also, get insights on other concepts from the same chapter to understand the whole topic with more clarity. "
        />
        {/* End of steps section */}
        {/* <ExpertSec/> */}
        {/* Start of Few Things to Know */}
        <ThingsSec/>
        {/* End of Few Things to Know */}
        
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
export default Doubtslanding;
