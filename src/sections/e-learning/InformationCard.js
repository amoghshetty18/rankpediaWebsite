import React from "react";

const InformationCard = ({ options }) => {
  
  return (
    <div
      className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-xs-11 mb-10  faqInfocardstyling"
      
    >
      <div
        className="pt-13 pt-lg-15 Informationcardstyling"
        style={{ height: "100%",backgroundColor: options.color }}
        data-aos="fade-up"
        data-aos-delay={500}
      >
        <div className="square-60 rounded-10 text-white m-auto font-size-7">
          <img src={options.icon} alt="" />
        </div>
        <div className="mt-12 InformationContentStyling">
          <h4 className="font-size-7 mb-5">{options.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
