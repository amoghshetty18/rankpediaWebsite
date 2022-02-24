import React from "react";
import PageWrapper from "../components/PageWrapper";
import BannerSection from "../sections/continuing-education/BannerSection";
import Intro from "../sections/continuing-education/Intro";
import BetterNetworking from "../sections/continuing-education/BetterNetworking";
import StandOut from "../sections/continuing-education/StandOut";
import Features from "../sections/continuing-education/Features";
import Streams from "../sections/continuing-education/Streams";
import Purpose from "../sections/continuing-education/Purpose"
import ConnectForm from "../sections/home/ConnectForm";

const tagManagerArgs = {
  dataLayer: {
    page: "Home",
  },
  dataLayerName: "PageDataLayer",
};

const ContinueEducation = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
              <a href="/login">
                {" "}
                <button className="btn btn btn-blue-3 header-btn1 head-login">
                  Login
                </button>{" "}
              </a>
            </>
          ),
          footerStyle: "style3",
        }}
      >
        <BannerSection
          title={
            "Continuing Education by Rankpedia| Join any course of your choice"
          }
          description={
            "Rankpedia's Continuing Education provides online courses for people irrespective of any barriers or hurdles. Take up any course of your choice. Get the freedom of learning with us."
          }
        />
        <Intro />
        <BetterNetworking />
        <StandOut />
        <Features />
        <Streams />
        <Purpose/>
        <ConnectForm/>
      </PageWrapper>
    </>
  );
};
export default ContinueEducation;
