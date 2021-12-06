import React, {Section} from "react";

import PageWrapper from "../components/PageWrapper";
import GetinTouch from "../components/GetinTouch";
import Banner from "../components/BannerSection";
import Infocard from "../sections/doubts-landing/Doubts-infocard";
import Revisesection from "../sections/grade-landing/revision-sec";
import TopicSection from "../sections/grade-landing/topics-sec";
import TagManager from "react-gtm-module/dist/TagManager";

const tagManagerArgs = {
  dataLayer: {
    page: "Grade 8"
  },
  dataLayerName: "PageDataLayer"
}

const Gradelanding8 = () => {

  TagManager.dataLayer(tagManagerArgs)

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
        bgurl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625558404/grade-landing-banner_vw04si_mtzshy.jpg"
        BannerTitle={<div>Classes 8 - CBSE <br/> Maths, Physics, Chemistry, Biology</div>}
        // BannerContent="Features for schools"
        BannerbtnText="Download Study Material"
        Linkto="/grade8"
        Applink="false"/>
        
        {/* Revise section */}
        <Revisesection
        />
        <TopicSection
        LinkTo="/pricinglanding"
        BtnText=" Grade 8 subscription plans"/>
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
export default Gradelanding8;
