import React from "react";
import "../../css/styles.css";

function Section1({ className, title, description, ...rest }) {
  return (
    <>
      <div className={className} {...rest}>
        <div
          class="hero-area"
          id="roller-bnr"
          style={{
            backgroundImage: `url(${"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643352216/continuing-education/hero/Slide_3_k3j96i.png"})`,
          }}
        >
          <div className="container-fluid px-10">
            <div className="row">
              <div className="col-lg-6">
                <div class="hero-content dark-mode-texts">
                  <h4 class="gr-text-5 mb-9 learnon">
                    Join any course of your
                    choice
                  </h4>
                  <p
                    class="gr-text-8 pr-5 pl-0 pr-xl-11 mb-9 learnpar"
                    style={{ color: "white" }}
                  >
                    Rankpedia's Continuing Education provides online courses for
                    people irrespective of any barriers or hurdles. Take up any
                    course of your choice. Get the freedom of learning with us.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="blob-container">
                  <img
                    id="main-background-img"
                    src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643352212/continuing-education/hero/Slide_3-sub-pic_vujytn.png"
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

export default Section1;
