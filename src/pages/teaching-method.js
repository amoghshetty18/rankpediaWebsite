import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home1/Hero";
import Company from "../sections/home1/Compnay";
import Categories from "../sections/home1/Categories";
import Jobs from "../sections/home1/Jobs";
import Content1 from "../sections/home1/Content1";
import Blog from "../sections/home1/Blog";
// import Section from "../layout/Section";

import GetinTouch from "../components/GetinTouch";
import Banner from "../components/BannerSection";
import Infocard from "../sections/teachingmethod/Infocard";
import Content4 from "../sections/practicetest/Content4";

import VisionMission from "../sections/teachingmethod/vision-mission";
import ThingsSec from "../sections/teachingmethod/ThingsSec";
import Bloom from "../sections/teachingmethod/bloom";

import Section1 from "../sections/home/Section1";
import Section2 from "../sections/home/Section2";
import Section3 from "../sections/home/Section3";
import Section4 from "../sections/home/Section4";
import Section5 from "../sections/home/Section5";
import Section6 from "../sections/home/Section6";
import Section7 from "../sections/home/Section7";
import Section8 from "../sections/home/Section8";

const Teachingmethod = () => {
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

     <Banner 
        bgurl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621595518/banner-image_rw7lnc.jpg"
        BannerTitle=" Learn at your pace & style, with practice "
        // BannerContent=" RankPedia follows the Bloom's taxonomy for teaching "
        BannerbtnText="Our teaching method"/>

      <VisionMission 
        Title="Understand as you solve"
        Paragraph="We strive hard to make quality education more affordable and accessible. Our pedagogical approach embraces Blooms’ Level for mastering education."
      />

      <ThingsSec
      Title="Recall, Remember, Understand and Apply"
      Paragraph=" Our teaching is based on Bloom’s Taxonomy. Starting with Recall, we move forward to Remember, Understand, Apply, Create, Evaluate and Analyse."
      />

      <Bloom
      Title="Learn how it works for you"
      Paragraph="Our best curriculum design helps communicate primary education with the best teaching methods."
      />


      <Content4 className="bg-default-6 pb-6  overflow-hidden position-relative" 
      Title="Instantly ask for doubts and seek help"
      Paragraph="We believe in teaching with remedial action. We offer a comprehensive academic performance reporting system to raise the bar of learning."
      />

      <Infocard/>
     
        <GetinTouch
        title="Ready to get started?"
       disc="Register as a student"/>
      
      

      </PageWrapper>
    </>
  );
};
export default Teachingmethod;
