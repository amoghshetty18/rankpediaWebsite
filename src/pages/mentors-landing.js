import React, {Section} from "react";

import PageWrapper from "../components/PageWrapper";
import StepsCard from "../components/StepsCard";
import GetinTouch from "../components/GetinTouch";
import Banner from "../components/BannerSection";
import ExpertProfile from "../sections/mentor-landing/mentorprofilesec";
import Converstioncard from "../components/Converstationcard";
import Doubtsinfocard from "../sections/doubts-landing/Doubts-infocard";

import RespondSec from "../sections/doubts-landing/respondsec";
import ThingsSec from "../sections/doubts-landing/ThingsSec";
import ExpertSec from "../sections/doubts-landing/ExpertsSec";


const Mentorlanding = () => {
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
        bgurl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621575884/Group_254-min_tphob2.jpg"
        BannerTitle="Meet Our Expert Educators and Early Achievers!"
        BannerContent="Get comprehensive education at your fingertips."
        BannerbtnText="Get started"/>
        {/* End of banner section */}
       {/* Start of expert cards */}
        <ExpertProfile/>
        {/*  End of expert cards */}
        {/* Start of Conversation card */}
        <Converstioncard 
        id="mqschpo"
        img="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622439453/mentors-second_jgmxvz.png"
        title="Mentor’s availability and doubt clarification"
        Discription="Passionate mentors and domain experts helping students improve their learning outcomes and performance."/>
        {/* End of Conversation card */}
        {/* Strat of infor card */}
        <Doubtsinfocard/>
        {/* End of infor card */}
        {/* Start of get in touch section */}
        <GetinTouch
        title="Ready to get started?"
       disc="Register today!"/>
       {/* End of get in touch section */}
      </PageWrapper>
    </>
  );
};
export default Mentorlanding;
