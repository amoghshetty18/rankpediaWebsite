import React, {useState} from "react";
import JobCard2 from "../../components/JobCard2";
import Quizimage1 from "../../assets/gif/Algebraic-Expressions-and Identities.gif";
import Quizimage2 from "../../assets/gif/CONSERVATION-OF-PLANTS-AND -ANIMALS.gif";
import Quizimage3 from "../../assets/gif/Mensuration.gif";
import Quizimage4 from "../../assets/gif/Linear Equation in One Variable.gif";
import Quizimage5 from "../../assets/gif/Rational Numbers.gif";
import Quizimage6 from "../../assets/gif/MICROORGANISMS FRIEND AND FOE.gif";
import Quizimage7 from "../../assets/gif/CROP PRODUCTION AND MANAGEMENT.gif";
import Quizimage8 from "../../assets/gif/synthetic.gif";
const items = [
  {
    image: Quizimage8,
    bgcolor: "#1771bf",
    quizname: "SYNTHETIC FIBRES AND PLASTICS",
    quizlink: "https://quizizz.com/pro/join?gc=13676454"
  },
  {
    image: Quizimage7, 
    bgcolor: "#ff0000",
    quizname: "CROP PRODUCTION AND MANAGEMENT",
    quizlink: "https://quizizz.com/pro/join?gc=55783334"
  },{
    image: Quizimage6,
    bgcolor: "#8854C0",
    quizname: "MICROORGANISMS: FRIEND AND FOE",
    quizlink: "https://quizizz.com/pro/join?gc=28111974"
  },
  ,{
    image: Quizimage2,
    bgcolor: "#8854C0",
    quizname: "CONSERVATION OF PLANTS AND ANIMALS",
    quizlink: "https://quizizz.com/pro/join?gc=22606950"
  },
  {
    image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1627989225/playingwithnumbers_x4dqqw.png",
    // badgeColor: "#fff",
    quizname: "Playing with numbers",
    quizlink: "https://quizizz.com/pro/join?gc=46161830"
  },{
    image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/c_scale,w_362/v1627989225/funwithshapes_kw5o8b.jpg",
    // badgeColor: "#fff",
    quizname: "Visualizing Solid Shapes",
    quizlink: "https://quizizz.com/pro/join?gc=47210406"
  },{
    image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1627987748/a69b5ce0-451b-4a77-addf-3eb68ef96a02_90_90_zv6mug.jpg",
    // badgeColor: "#fff",
    quizname: "Cubes and Cube roots",
    quizlink: "https://quizizz.com/pro/join?gc=47936614"
  },{
    image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1627989225/quiz-on-perpostion_kkhemy.jpg",
    // badgeColor: "#fff",
    quizname: "Direct & Inverse proporton",
    quizlink: "https://quizizz.com/pro/join?gc=41645158"
  },{
    image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1627989225/datahandling_nyklsa.png",
    // badgeColor: "#fff",
    quizname: "Data Handling",
    quizlink: "https://quizizz.com/pro/join?gc=29848678"
  },
  {
    image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1627989225/quadraletirals_xxwn2m.png", 
    // badgeColor: "#fff",
    quizname: "Understanding Quadrilaterals",
    quizlink: "https://quizizz.com/pro/join?gc=40334438"
  },
  {
    image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1627989226/quiz_bxjqjm.gif",
    // badgeColor: "#fff",
    quizname: "Squares and square roots",
    quizlink: "https://quizizz.com/pro/join?gc=26702950"
  },
  {
    image: Quizimage5,
    // badgeColor: "#fff",
    quizname: "Rational Numbers",
    quizlink: "https://quizizz.com/pro/join?gc=58160230"
  },
  {
    image: Quizimage4, 
    // badgeColor: "#fff",
    quizname: "Linear Equation in one variable",
    quizlink: "https://quizizz.com/pro/join?gc=42955878"
  },
  {
    image: Quizimage1,
    // badgeColor: "#fff",
    quizname: "Algebric Expressions and Identities",
    quizlink: "https://quizizz.com/pro/join?gc=53441638"
  },
  {
    image: Quizimage3,
    // badgeColor: "#fff",
    quizname: "Mensuration",
    quizlink: "https://quizizz.com/pro/join?gc=53441638"
  },

];

const Quizcard8 = () => {

  const [userAttempts, setUserAttempts] = useState(0)

  const handleUserAttempts = () => {
    const result = userAttempts + 1
    setUserAttempts(result)
  }

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
                Quizzes for 8th Standard Students
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
                <JobCard2 options={item} handleUserAttempts={handleUserAttempts} userAttempts={userAttempts} data-aos="fade-up" />
              {/* </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quizcard8;
