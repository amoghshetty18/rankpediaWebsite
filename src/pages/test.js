import React from "react";
import PageWrapper from "../components/PageWrapper";

import Banner from "../sections/e-school/Banner";
import Curriculum from "../sections/e-school/Curriculum";
import ESchool from "../sections/e-school/ESchool";
import GlobalExposure from "../sections/e-school/GlobalExposure";
import StudentServices from "../sections/e-school/StudentServices";
import WhyJoin from "../sections/e-school/WhyJoin";
import USP from "../sections/e-school/USP"


const E_School = () => {

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
        <Banner/>
        </PageWrapper>
    </>
  );
};
export default E_School;
