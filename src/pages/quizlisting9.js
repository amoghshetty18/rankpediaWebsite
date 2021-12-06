import React from "react";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import imgB1 from  "../assets/image/home-1/png/post-thumbnails-2.png"
// "../../assets/image/home-1/png/post-thumbnails-1.png";
import imgB2 from "../assets/image/home-1/png/post-thumbnails-2.png";
import imgB3 from "../assets/image/home-1/png/post-thumbnails-3.png";
import imgB4 from "../assets/image/home-1/png/post-thumbnails-4.png";
// import image1 from "../../assets/gif/circles.gif"
// import Jobs from "../sections/career/Jobs";
import Quizs from "../sections/quizlisting/Quizsection9"
import TagManager from "react-gtm-module/dist/TagManager";

const tagManagerArgs = {
  dataLayer: {
    page: "Quizwizz 9"
  },
  dataLayerName: "PageDataLayer"
}

const Quizlistingpage9 = ({ className, ...rest }) => {

  TagManager.dataLayer(tagManagerArgs)

  return (
    <>
    <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right test",
          headerLogoClassName: "mx-auto text-center",
          headerButton: (
            <>
          <a href="/login">   <button className="btn btn btn-blue-3 header-btn1 head-login">
                Login
              </button> </a> 

            
            </>
          ),
          footerStyle: "style3",
        }}
       
      >
      <div className={className} {...rest}>
      <div className="banner-img-contact-us d-flex justify-content-center align-items-center" >
          <h2 className="text-light  text-align-center" >  Learn Anytime, Anywhere </h2>
          </div>
        <div className="container">
          {/* <!-- Section Title --> */}
          <Quizs />
          {/* <!-- End Section Title --> */}
        </div>
      </div>
      </PageWrapper>
    </>
  );
};

export default Quizlistingpage9;
