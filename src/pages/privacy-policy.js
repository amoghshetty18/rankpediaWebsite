import React, { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import Introduction from "../sections/privacy-policy/Introduction";
import PersonalInformation from "../sections/privacy-policy/PersonalInformation";
import Links from "../sections/privacy-policy/Links";
import TermsConditions from "../sections/privacy-policy/TermsConditions";

const PrivacyPolicy = () => {
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
                </button>
              </a>
            </>
          ),
          footerStyle: "style3",
        }}
      >
        <div className="blogs-privacy-header">
          <div className="mt-10">Privacy Policy</div>
        </div>
        <div className="blogs-privacy-body my-10">
          <Introduction />
          <PersonalInformation />
          <Links />
          <TermsConditions />
        </div>
      </PageWrapper>
    </>
  );
};
export default PrivacyPolicy;
