import React from "react";
import InformationCrad from "../../components/InformationCard";
import imgE from "../../assets/image/inner-page/png/explore.png";

const items = [
  {
    icon: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1623083031/digitize_qxsjgo.svg",
    title: "Digitise",
    // content:
    //   "Learning has never been easier.",
      color:"#E5F5FF"
  },
  {
    icon: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1623083031/simplify_dnexif.svg",
    title: "Simplify",
    // content:
    //   "Learning has never been easier.",
      color: "#F5F5D4"
  },
  {
    icon: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1623083031/make_it_fun_o7xgup.svg",
    title: "Make it Fun",
    // content:
    //   "Learning has never been easier.",
      color: "#F5DEDE"
  }
];

const schoolinfocard = () => {
  return (
    <div className="pb-9 pb-md-0 pb-lg-0">
      <div className="container">
        <div className="row justify-content-center">
          {items.map((item, index) => (
            <div
              className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-xs-11 mb-7 mb-lg-15 faqInfocardstyling"
              data-aos="fade-up"
              data-aos-duration={900}
              key={index}
            >
              <InformationCrad options={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default schoolinfocard;
