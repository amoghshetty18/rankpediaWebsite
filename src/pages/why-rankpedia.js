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
import Infocard from "../sections/faq/Infocard";

import Section2 from '../sections/neplanding/Section2'
import Section5 from '../sections/neplanding/Section5'
import Different from '../sections/whyrankpedia/different'
import Leftsideimg from '../sections/whyrankpedia/leftsideimg'
import Leftsideimg2 from '../sections/whyrankpedia/leftsideimg2'
import Rightsideimg from '../sections/whyrankpedia/rightsideimg'
import Rightsideimg2 from '../sections/whyrankpedia/rightsideimg2'



const Whyrankpedia = () => {
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
        BannerTitle=" Creating an atmosphere for immersive experimental learning"
        BannerContent=" RankPedia is complaint with the NEP 2020 for education delivery"
        BannerbtnText="Why RankPedia"/>

      <div className="container">
          <Section2 />

          <Section5 />

          <Different/>

          <Leftsideimg/>

          <Rightsideimg/>

          <Leftsideimg2/>

          <Rightsideimg2/>

          <div className="row mx-10 justify-content-center ">

          <h3>Teaches the value of mistakes</h3>

<p className="clscls">Learn with ease and prepare extensively with RankPedia to stay ahead of the learning curve and exceed expectations.
</p>

          </div>

          

          <Leftsideimg/>

      </div>


      <Infocard/>
     
        <GetinTouch
        title="Ready for an Experience of 
        Blended Learning?"
       disc="Register to experience blended learning like never before and stay ahead."/>
      
      

      </PageWrapper>
    </>
  );
};
export default Whyrankpedia;
