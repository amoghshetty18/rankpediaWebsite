import React from "react";
// import '../css/styles.css'
import PageWrapper from "../components/PageWrapper";
//import Hero from "../sections/home1/Hero";
// import Company from "../sections/home1/Compnay";
// import Categories from "../sections/home1/Categories";
// import Jobs from "../sections/home1/Jobs";
// import Content1 from "../sections/home1/Content1";
// import Blog from "../sections/home1/Blog";
// import Section from "../layout/Section";

import Section1 from '../sections/neplanding/Section1'
import Section2 from '../sections/neplanding/Section2'
import Section3 from '../sections/neplanding/Section3'
import Section4 from '../sections/neplanding/Section4'
import Section5 from '../sections/neplanding/Section5'

import Banner from "../components/BannerSection";

import Hero from '../sections/home3/Hero'

import GetinTouch from "../components/GetinTouch";
// import TagManager from "react-gtm-module/dist/TagManager";

//import Section1 from "../sections/home/Section1";
//import Section2 from "../sections/home/Section2";
// import Section3 from "../sections/home/Section3";
//import Section4 from "../sections/home/Section4";
//import Section5 from "../sections/home/Section5";
// import Section6 from "../sections/home/Section6";
// import Section7 from "../sections/home/Section7";
// import Section8 from "../sections/home/Section8";
// import FeatureCard from "../components/JobCard1";

const tagManagerArgs = {
  dataLayer: {
    page: "NEP Landing"
  },
  dataLayerName: "PageDataLayer"
}

const Neplanding = () => {

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
       
           {/* <Section1 />  */}
           <Banner 
           id="neplanding-banner-button-hide"
        bgurl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625558950/banner-image_rw7lnc_hgazsj.jpg"
        BannerTitle=" NEP 2020 Compliant  [National Education Policy] "
        BannerContent=" Learn how Rankpedia is compliant with the country's new educational policies "
        BannerbtnText="Learn More"/>

<div className="container">
          <Section2 />
           <Section3 /> 


          <Section4 />
          <Section5 />

         

        </div>

        <GetinTouch
        title="Ready for an Experience of 
        Blended Learning?"
       disc="Register to experience blended learning like never before and stay ahead."/>

      </PageWrapper>
    </>
  );
};
export default Neplanding;
