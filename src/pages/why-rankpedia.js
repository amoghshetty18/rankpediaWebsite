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
import Infocard from "../sections/whyrankpedia/Infocard";

import Section2 from '../sections/whyrankpedia/Section2'
import Section5 from '../sections/whyrankpedia/Section5'
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
        BannerTitle=" Creating An Atmosphere For Immersive Experimental Learning"
        BannerContent=" Rankpedia is complaint with the NEP 2020 for education delivery"
        BannerbtnText="Why Rankpedia"
        id="nope-rank-btds"
          />

      <div className="container">
          <Section2 />

          <Section5 />

          <Different/>

          <Leftsideimg/>

          <Rightsideimg/>

          <Leftsideimg2/>

          <Rightsideimg2/>

          <div className="row mx-10 mt-15 justify-content-center " id="esdtr-difg">

          <h3 className="clnt-sjst-sprs">Teaches the Value of Mistake</h3>

<p className="clscls">Experiential learning entails trial-and-error learning. Students get to use trial-and-error methods to evaluate various aspects along the road to improve their chances of success. They learn to embrace their mistakes rather than fear them and rope in ways to discover the potential worth of mistakes. 
</p>

          </div>

          

          {/* <Leftsideimg/> */}

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
