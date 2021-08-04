

import React from "react";
import JobCard2 from "../../components/JobCard2";
import quiz10image1 from "../../assets/gif/10thstd/REFLECTION OF LIGHT.gif";
import quiz10image2 from "../../assets/gif/10thstd/REFRACTION OF LIGHT.gif";
import quiz10image3 from "../../assets/gif/circles.gif";
import quiz10image4 from "../../assets/gif/10thstd/Real Numbers.gif";
import quiz10image5 from "../../assets/gif/10thstd/Triangles.gif";
import quiz10image6 from "../../assets/gif/10thstd/Coordinate Geometry.gif";
import quiz10image7 from "../../assets/gif/10thstd/Polynomials.gif";
import quiz10image8 from "../../assets/gif/10thstd/Arithmetic Progression.gif";
import quiz10image9 from "../../assets/gif/10thstd/Quadratic Equation.gif";
const items = [
  {
    image: quiz10image1,
    // quiztime: "Full-time",
        bgcolor: "#1771bf",
    quizname: "Reflection of light",
    quizlink: "https://quizizz.com/pro/join?gc=06691942"
  },
  {
    image: quiz10image2,
    // quiztime: "Full-time",
        bgcolor: "#5DE2A5",
    quizname: "Refraction of light",
    quizlink: "https://quizizz.com/pro/join?gc=44440678"
  },{
    image: quiz10image3,
    bgcolor: "#6B7C93",
    quizname: "Circles",
    quizlink: "https://quizizz.com/pro/join?gc=33217638"
  },{
    image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1627991038/some_application_on_trignometry_tk6q7l.gif",
    // bgcolor: "#F14D76",
    quizname: "Some Applications of Trigonometry",
    quizlink: "https://quizizz.com/pro/join?gc=25615462"
  },{
    image: quiz10image4,
    // quiztime: "Full-time",
        bgcolor: "#F14D76",
    quizname: "Real Numbers",
    quizlink: "https://quizizz.com/pro/join?gc=57597030"
  },{
    image: quiz10image5,
    // quiztime: "Full-time",
        bgcolor: "#8854C0",
    quizname: "Triangles",
    quizlink: "https://quizizz.com/pro/join?gc=65133670"
  },{
    image: quiz10image6,
    // quiztime: "Full-time",
        bgcolor: "#1771bf",
    quizname: "Coordinate Geometry",
    quizlink: "https://quizizz.com/pro/join?gc=35249254"
  },{
    image: quiz10image7,
    // quiztime: "Full-time",
        bgcolor: "#ff0000",
    quizname: "Polynomials",
    quizlink: "https://quizizz.com/pro/join?gc=21355622"
  },
  {
    image: quiz10image8,
    // quiztime: "Full-time",
        bgcolor: "#ff0000",
    quizname: "Arithmetic Progression",
    quizlink: "https://quizizz.com/pro/join?gc=35904614"
  },
  {
    image: quiz10image9,
    // quiztime: "Full-time",
        bgcolor: "#ff0000",
    quizname: "Quadratic Equation",
    quizlink: "hhttps://quizizz.com/pro/join?gc=16768102"
  },
];

const quizcard10 = () => {
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
                Quiz for 10th Standard Students
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

export default quizcard10;
