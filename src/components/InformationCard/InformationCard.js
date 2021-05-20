import React from "react";

const InformationCard = ({ options }) => {
  return (
    // <div className="d-xs-flex">
    //   <div className="square-83 d-flex rounded-10 border mt-2">
    //     <img src={options.icon} alt="" />
    //   </div>
    //   <div className="mt-5 mt-xs-0 pl-xs-6">
    //     <h3 className="font-size-7 mb-1">{options.title}</h3>
    //     <p className="font-size-5 line-height-28 mb-0 pr-sm-10 pr-md-0 pr-xs-17 pr-lg-8 pr-xl-5">
    //       {options.content}
    //     </p>
    //   </div>
    // </div>
    <div className="d-xs-flex">
    <div className="">
                    <div
                      className="pt-13 pt-lg-15 Informationcardstyling"
                      data-aos="fade-up"
                      data-aos-delay={500}
                      style={{background: options.color}}
                    >
                      <div className="square-60 bg-blue-3 shadow-dodger-blue-3 rounded-10 text-white m-auto font-size-7">
                      <img src={options.icon} alt="" />
                      </div>
                      <div className="mt-12 InformationContentStyling">
                        <h4 className="font-size-7 mb-5">{options.title}</h4>
                        <p className="font-size-5 mb-0">
                         {options.content}
                        </p>
                      </div>
                    </div>
                  </div>
                  </div>
  );
};

export default InformationCard;
