import React from "react";
import ButtonModal from "../../components/Modal/ConnectButton/ButtonModal";
import "../../css/styles.css";

function Section1({ className, title, description, ...rest }) {
  return (
    <>
      <div className={className} {...rest}>
        <div class="hero-area" id="roller-bnr" style={{backgroundImage: `url(${"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643697306/e-learning/hero/Slide_1-pic-_COrrected-FINAL_umdynh.png"})`}}>
          <div className="container-fluid px-10">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div class="hero-content dark-mode-texts">
                  <h1 class="gr-text-5 mb-9 learnon">{title}</h1>
                  <p class="gr-text-8 pr-5 pl-0 pr-xl-11 mb-9 learnpar">
                    {description}
                  </p>
                  <ButtonModal/>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                <div className="blob-container">
                  <img
                    id="main-background-img"
                    src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643352073/e-learning/hero/Slide_1--sub-pic_wsgoza.png"
                    alt=""
                  />
                  <img
                    className="science"
                    src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1627282855/home-page/science_2_np2yys.png"
                    alt=""
                  />
                  <img
                    className="bulb"
                    src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1627282855/home-page/light-bulb_1_tq3az2.png"
                    alt=""
                  />
                  <img
                    className="book"
                    src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1627282855/home-page/agenda_1_qagpxq.png"
                    alt=""
                  />
                  <img
                    className="graduation"
                    src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1627282854/home-page/graduation_1_tqjhnv.png"
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
