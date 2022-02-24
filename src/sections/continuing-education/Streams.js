import React from "react";
import InformationCard from "./InformationCard";

const items = [
  {
    icon: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621493472/Group_251_lolkh3.svg",
    title: "Performing Arts",
    // content:
    //   "Practice complex concepts",
      color:"#E5F5FF"
  },
  {
    icon: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621493472/Group_252_th9057.svg",
    title: "Agriculture",
    // content:
    //   "Get doubts cleared",
      color: "#F5F5D4"
  },
  {
    icon: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621493671/Group_253_ljdjq8.svg",
    title: "Healthcare",
    // content:
    //   "Enjoy guided learning",
      color: "#F5DEDE"
  },
  {
    icon: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621493472/Group_251_lolkh3.svg",
    title: "Engineering",
    // content:
    //   "Practice complex concepts",
      color:"#E5F5FF"
  },
  {
    icon: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621493472/Group_252_th9057.svg",
    title: "Management",
    // content:
    //   "Get doubts cleared",
      color: "#F5F5D4"
  },
  {
    icon: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621493671/Group_253_ljdjq8.svg",
    title: "Education and Teacher Training ",
    // content:
    //   "Enjoy guided learning",
      color: "#F5DEDE"
  }
];

const Streams = () => {
  return (
    <div className="pb-9 pb-md-0 pb-lg-0">
      <div className="container">
        <div className="row justify-content-center">
          {items.map((item, index) => (
            // <div
            //   className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-xs-11 mb-7 mb-lg-15 faqInfocardstyling"
            //   data-aos="fade-up"
            //   data-aos-duration={900}
            //   key={index}
            // >
              <InformationCard key={index} options={item} />
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Streams;
