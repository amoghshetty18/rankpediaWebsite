

import React from "react";
import JobCard2 from "../../components/JobCard2";
import quiz9image1 from "../../assets/gif/9thstd/IMPROVEMENT IN FOOD RESOURCES.gif";
import quiz9image2 from "../../assets/gif/9thstd/MATTER IN OUR SURROUNDINGS.gif";
import quiz9image3 from "../../assets/gif/9thstd/Lines And Angles.gif";
import quiz9image4 from "../../assets/gif/9thstd/Coordinate Geometry.gif";
import quiz9image5 from "../../assets/gif/9thstd/Triangles.gif";
import quiz9image6 from "../../assets/gif/9thstd/Number System.gif";
import quiz9image7 from "../../assets/gif/9thstd/Area of Parallelograms and Triangles.gif";
import quiz9image8 from "../../assets/gif/9thstd/Quadrilaterals.gif";
const items = [
  {
    image: quiz9image8,
    bgcolor: "#1771bf",
    quizname: "Quadrilaterals",
    quizlink: "https://quizizz.com/pro/join?gc=46132326"
  },
  {
    image: quiz9image3,
    bgcolor: "#5DE2A5",
    quizname: "Lines and Angles",
    quizlink: "https://quizizz.com/pro/join?gc=17833062"
  },
  {
    image: quiz9image2,
    bgcolor: "#ff0000",
    quizname: "MATTER IN OUR SURROUNDINGS",
    quizlink: "https://quizizz.com/pro/join?gc=49310822"
  },
  {
    image: quiz9image4,
    bgcolor: "#F14D76",
    quizname: "Coordinate Geometry",
    quizlink: "https://quizizz.com/pro/join?gc=09301094"
  },{
    image: quiz9image6,
    bgcolor: "#8854C0",
    quizname: "Number System",
    quizlink: "https://quizizz.com/pro/join?gc=43904102"
  },{
    image: quiz9image7,
    bgcolor: "#ff0000",
    quizname: "Area of Parellelograms and Triangles",
    quizlink: "https://quizizz.com/pro/join?gc=18082918"
  },{
    image: quiz9image1,
    bgcolor: "#1771bf",
    quizname: "IMPROVMENT IN FOOD RESOURCES",
    quizlink: "https://quizizz.com/pro/join?gc=41266278"
  },
  {
    image: quiz9image5,
    bgcolor: "#6B7C93",
    quizname: "Triangles",
    quizlink: "https://quizizz.com/pro/join?gc=34204774"
  }
];

const quizcard9 = () => {
  return (
    <div className="bg-default-3 pt-12 pt-md-18 pb-md-19 pb-15 pt-lg-22 pb-lg-26">
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div
              className="text-center mb-7"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <h2 className="font-size-10 mb-7 letter-spacing-n83">
              Quiz for 9th standard students
              </h2>
            </div>
          </div>
        </div>
        {/* career roles */}
        <div className="row mt-lg-9">
          {items.map((item, index) => (
            <div className="col-lg-4 col-md-6 mt-9"  key={index}>
              
              {/* <a
                href="/#"
                className="pt-9 pb-9 pl-11 pr-10 bg-white d-block rounded-0 shadow-2"
                data-aos="fade-up"
                data-aos-duration={900}
              > */}
                <JobCard2 options={item} data-aos="fade-up" />
              {/* </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default quizcard9;
