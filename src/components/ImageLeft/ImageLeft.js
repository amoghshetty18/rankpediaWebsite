import React, { useContext } from "react";

import GlobalContext from "../../context/GlobalContext";
import Modal from "../Modal";

const ImageLeft = (props) => {
  const { title, paragraph, extraParagraph, children, imgPos } = props;
  let {imgUrl} = props;
  imgUrl ??=  "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643352084/e-learning/hero/Slide_1-pic_gprkll.png";
  const gContext = useContext(GlobalContext);

  return (
    <div className="pt-7 pt-md-9 pt-lg-13 pb-7 pb-md-9 pb-lg-12 mb-lg-1">
      <div className="container">
        <div
          className={`row align-items-center justify-content-center ${
            imgPos === "right" ? "d-flex flex-row-reverse" : ""
          }`}
        >
          <div
            className="col-xl-6 col-lg-6 col-md-10 col-sm-11"
            data-aos="fade-right"
            data-aos-duration={500}
          >
            <div class="Mobile-view">
              <h2
                className=" font-size-10 mb-8 letter-spacing-n83"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                {title}
              </h2>
            </div>
            <div
              className="bg-images d-flex align-items-center justify-content-center max-w-540 py-18 py-sm-28 rounded-10 mx-auto"
              css={`
                background-image: url(${imgUrl});
              `}
            >
              <div className="video-btn sonar text-white circle-98 font-size-8">
                {/* <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621536971/Icon_material-play-circle-outline_rpwskz.svg"/> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10 col-sm-11">
            <div className="pt-9 pt-lg-0 pr-xs-10 pr-sm-5 pr-md-25 pr-lg-0 pl-xl-10">
              <h2
                className="Desktop-view font-size-10 mb-8 letter-spacing-n83"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                {title}
              </h2>
              <p
                className="font-size-6 mb-0 pr-xs-15 pr-sm-10 pr-xl-10"
                data-aos="fade-up"
                data-aos-duration={900}
              >
                {paragraph}
              </p>
              {(Boolean(extraParagraph) === false &&
                Boolean(children) === false) || (
                <Modal
                  title={title}
                  paragraph={paragraph}
                  extraParagraph={extraParagraph}
                  child={children}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLeft;
