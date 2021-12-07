import React from "react";
// import TagManager from 'react-gtm-module/dist/TagManager'
import PageWrapper from "../components/PageWrapper";
import Faqsection from "../sections/faq/Faqsection";
import Infocard from "../sections/faq/Infocard";
import GetinTouch from "../components/GetinTouch";

const tagManagerArgs = {
  dataLayer: {
    page: "FAQs"
  },
  dataLayerName: "PageDataLayer"
}

const Faq = () => {

  // TagManager.dataLayer(tagManagerArgs)

  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right test",
          headerLogoClassName: "mx-auto text-center",
          headerButton: (
            <>
          <a href="/login">   <button className="btn btn btn-blue-3 header-btn1 head-login">
                Login
              </button> </a> 

            
            </>
          ),
          footerStyle: "style3",
        }}
       
      >
        <div className="bg-default-4">
        <div className="pt-30 pt-md-26 pt-lg-30 bg-default-4">
        {/* pb-13 pb-md-18 pb-lg-23 */}
          <div className="container">
            {/* Section Title */}
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-9">
                <div className="Heading-styling text-center mb-13 mb-lg-18">
                  <h2 className="mb-7">
                    FAQ<br/>
                    Pre & post sales report
                  </h2>
                </div>
              </div>
            </div>
            {/* End Section Title */}
            {/* start of faq accordion section */}
            <Faqsection/>
            </div>
            <Infocard/>
            <GetinTouch
            title="Ready for an Experience of 
            Blended Learning?"
            disc="Register to experience blended learning like never before and stay ahead."/>
          
        </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Faq;
