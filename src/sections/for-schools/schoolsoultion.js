import React, { useContext } from "react";
import { Link } from "gatsby";

import GlobalContext from "../../context/GlobalContext";
import imgC from "../../assets/image/inner-page/png/video-bg.png";
import SolutinCard from "../../components/Solutioncard"

const schoolsolution = () => {
//   const gContext = useContext(GlobalContext);
const solutioncard = [
    {
      title: "Unable to track the potential of every student?",
      text:
        "Get your students an in-depth understanding of every concept through adaptive and personalised learning methodology. Access study materials and engaging hands-on activities for their practice. ",
    },
    {
      title: "Couldn’t aid educators in taking timely and productive action?",
      text:
        "Accessibility of overall progress reports to students, teachers, school admin, and parents, all-inclusive performance analysis and sharing of the data of the school management to the Principal.",
    },
    {
        title: "Find it challenging to improve student enrollment?",
        text:
          "Help teachers to do their job with ease. Arrange classroom schedules, topic-wise revision routines, relevant additional videos, and resources for improved teaching results.",
      },
      {
        title: "Couldn't find leads?",
        text:
          "Devise a Systematic Learning Programme. Balance the student-teacher ratio for each class to reduce the pressure on educators and gauge the capability of students.",
      },  
];
  return (
    <div className="pt-14 pt-md-0 pt-lg-0 pb-15 pb-md-18 pb-lg-15 mb-lg-1">
      <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-9">
                <div className="Heading-styling text-center mb-8 mb-lg-10">
                  <h2>
                  Features for Schools
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
            {solutioncard.map(({  title, text }, index) => {
              return (
                <div className="col-lg-6 col-sm-6 col-xs-8 pb-lg-10">
                <SolutinCard  title={title} text={text} key={index} />
                </div>
              );
            })}
            </div>
      </div>
    </div>
  );
};

export default schoolsolution;
