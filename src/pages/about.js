import React, {Section} from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/about/Hero";
import Masonry from "../sections/about/Masonry";
import Stats from "../sections/about/Stats";
import VisionMission from "../sections/about/vision-mission";
import Content from "../sections/about/Content";
import Banner from "../sections/about/Banner";
import Service from "../sections/about/Service";
import OurTeam from "../sections/about/Ourteam";
import Ready from "../sections/about/ready";

const PricingPage = () => {
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
        <Banner />
        <Stats />
        <VisionMission />
        <Service />
        {/* <OurTeam className="bg-charade pt-20 pt-lg-25 pb-15 pb-lg-10"/> */}
        <Ready />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
