import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home1/Hero";
import Company from "../sections/home1/Compnay";
import Categories from "../sections/home1/Categories";
import Jobs from "../sections/home1/Jobs";
import Content1 from "../sections/home1/Content1";
import Blog from "../sections/home1/Blog";
// import Section from "../layout/Section";
import Section1 from "../sections/home/Section1";
import Section2 from "../sections/home/Section2";
import Section3 from "../sections/home/Section3";
import Section4 from "../sections/home/Section4";
import Section5 from "../sections/home/Section5";
import Section6 from "../sections/home/Section6";
import Section7 from "../sections/home/Section7";
import Section8 from "../sections/home/Section8";
import Section9 from "../sections/home/Section9";
import Section10 from "../sections/home/Section10";
import Section11 from "../sections/home/Section11";
// import TagManager from "react-gtm-module/dist/TagManager";

const tagManagerArgs = {
  dataLayer: {
    page: "Home"
  },
  dataLayerName: "PageDataLayer"
}

const IndexPage = () => {

  // TagManager.dataLayer(tagManagerArgs)

  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
              <a href="/login">  <button className="btn btn btn-blue-3 header-btn1 head-login">
                  Login
                </button> 
              </a>
            </>
          ),
          footerStyle: "style3",
        }}
      >
        <Section1 />
        <Section2  
        id="msg-hgtr"  />
        {/* <Section3 /> */}
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section9 />
        <Section10 />
        <Section11 />
        <Section8 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
