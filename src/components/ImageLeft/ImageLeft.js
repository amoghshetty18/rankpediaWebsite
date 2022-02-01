

import React from "react";

import Modal from "../Modal";

const ImageLeft = (props) => {
  const { title, paragraph, extraParagraph, children, imgPos } = props;
  let {imgUrl} = props;
  imgUrl ??=  "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643352084/e-learning/hero/Slide_1-pic_gprkll.png";

  return (
    <div className="pt-7 pt-md-9 pt-lg-13 pb-7 pb-md-9 pb-lg-12 mb-lg-1">
      <div className="container">
<div className={`row align-items-center 
${imgPos === "right" ? "d-flex flex-row-reverse" : ""}`}>
        <h2 
          
          className="section-2-heading-phone mx-auto"
        >
          {title}
        </h2>
        <div 
          className="col-md-6" 
          data-aos="flip-right" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <img 
            src={imgUrl}
            alt="" 
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 
            
            className="section-2-heading-desktop"
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          >
            {title}
          </h2>
          <p>
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
  );
};

export default ImageLeft;
