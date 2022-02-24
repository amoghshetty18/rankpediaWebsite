import React from "react";
import PageWrapper from "../components/PageWrapper";
import Section1 from "../sections/e-learning/Section1";
import Section2 from "../sections/e-learning/Section2";
import Section3 from "../sections/e-learning/Section3";
import Section4 from "../sections/e-learning/Section4";
import Section5 from "../sections/e-learning/Section5";
import Section6 from "../sections/e-learning/Section6";
import Section7 from "../sections/e-learning/Section7";
import Section8 from "../sections/e-learning/Section8";
import Section9 from "../sections/e-learning/Section9";
import AssesmentSection from "../sections/e-learning/AssesmentSection"
import ConnectForm from "../sections/home/ConnectForm";

const tagManagerArgs = {
  dataLayer: {
    page: "Home",
  },
  dataLayerName: "PageDataLayer",
};

const ELearning = () => {
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
        <Section1
          title={"Smarter Learning for a Smarter Generation"}
          description={
            "Check Rankpedia’s E-learning platform and get various online study resources to help you with the learning process. Use the best technologically advanced learning resources here."
          }
        />
        <Section2 />
        <Section3 />
        <AssesmentSection/>
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <ConnectForm/>
        <Section9 />
      </PageWrapper>
    </>
  );
};
export default ELearning;
