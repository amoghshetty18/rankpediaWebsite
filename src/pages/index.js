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

const IndexPage = () => {
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
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        {/* <Hero className="position-relative z-index-1" />
        <Company className="bg-default-1 pt-13 pt-md-17 pt-lg-24 pb-13 pb-md-14 pb-lg-23" />
        <Categories className="bg-default-1 pt-lg-13 pb-md-7 pb-lg-11 position-relative" />
        <Jobs className="pt-14 pt-md-18 pt-lg-30 bg-default-2 pb-9 pb-md-13 pb-lg-29" />
        <Content1 className="pt-21 pt-md-24 pt-lg-32 pb-15 pb-md-19 pb-lg-30" />
        <Blog className="bg-default-1 pt-14 pt-md-18 pt-lg-27 pb-13 pb-md-17 pb-lg-26" /> */}
      </PageWrapper>
    </>
  );
};
export default IndexPage;
