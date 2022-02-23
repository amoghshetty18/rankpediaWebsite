import React from "react";
import ButtonModal from "../../components/Modal/ConnectButton/ButtonModal";
import "../../css/styles.css";


function Banner({ className, title, description, ...rest }) {
  return (
    <>
    <div className={className} {...rest}>
      <div class="hero-area" id="roller-bnr" style={{backgroundImage: `url(${"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643352279/e-school/hero/Slide_2_mkc37d.png"})`}}>
        <div className="container-fluid px-10">
          <div className="row">
            <div className="col-lg-6">
              <div class="hero-content dark-mode-texts">
                <h4 class="gr-text-2 mb-9 learnon">Study from various International Curriculum.</h4>
                <p class="gr-text-8 pr-5 pl-0 pr-xl-11 mb-9 learnpar">
                Join Rankpedia's E-school & study various International curricula: Cambridge IGCSE, Montessori, American Common Core, & Discovery Education. Join the Smart Learning Online school.
                </p>
                <ButtonModal/>                
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="blob-container">
                <img
                  id="main-background-img"
                  src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643352273/e-school/hero/Slide_2-sub-pic_wd5gl6.png"
                  alt=""
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Banner;
