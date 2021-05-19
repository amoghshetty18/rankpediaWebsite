import React from "react";

import PageWrapper from "../components/PageWrapper";
import Faqsection from "../sections/faq/Faqsection"
const Faq = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
              <button className="btn btn btn-blue-3 header-btn-2 font-size-3 rounded-5">
                Start 14 Days Free Trial
              </button>
            </>
          ),
          footerStyle: "style3",
        }}
      >
        <div className="pt-23 pt-md-26 pt-lg-25 pb-13 pb-md-18 pb-lg-23">
          <div className="container">
            {/* Section Title */}
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-9">
                <div className="Heading-styling text-center mb-13 mb-lg-18">
                  <h2 className="mb-7">
                    FAQ<br/>
                    Pre & post sales reprot
                  </h2>
                </div>
              </div>
            </div>
            {/* End Section Title */}
            {/* start of faq accordion section */}
            <Faqsection/>

          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Faq;
