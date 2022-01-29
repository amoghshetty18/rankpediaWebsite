import React from "react";
import ImageLeft from "../../components/ImageLeft";
import Doubts from "./Doubts"

function AssesmentSection({ className, ...rest }) {
  return (
    <>
      <div class={className} {...rest}>
          <div class="container">
          
            {/* <ImageLeft
              imgPos="right"
            //   paragraph="We've incorporated all of the best practices mentioned in the NEP 2020, such as the holistic learning system, assessment methodologies that develop analytical and critical thinking, vocational skills, etc."
              extraParagraph="The New Education Policy (NEP) highlights fundamental changes in how India perceives, teaches, and administers education. We've incorporated all of the best practices mentioned in the NEP 2020, such as the holistic learning system, assessment methodologies that develop analytical and critical thinking, vocational skills, etc. As mentioned in the NEP, we aim to provide equitable and inclusive education. We use all the new technologies involving artificial intelligence, machine learning, blockchains, smart boards, handheld computing devices, adaptive computer testing for student development, and other forms of educational software and hardware that will not just change what students learn in the classroom but how they learn, and thus these areas and beyond will require extensive research both on the technological as well as educational fronts.
              "
              imgUrl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621243440/blooms_pges2w.png"
            /> */}
            <div className="pt-7 pt-md-9 pt-lg-13 pb-7 pb-md-9 pb-lg-12 mb-lg-1">
      <div className="container">
        <div
          className={"row align-items-center justify-content-center d-flex flex-row-reverse"}
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
              Assesment Types
              </h2>
            </div>
            <div
              className="bg-images d-flex align-items-center justify-content-center max-w-540 py-18 py-sm-28 rounded-10 mx-auto"
              css={`
                background-image: url(${"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643458609/e-learning/Our-Assessment-Process-_yaqpdl.png"});
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
              Assesment Types
              </h2>
              <p
                className="font-size-6 mb-0 pr-xs-15 pr-sm-10 pr-xl-10"
                data-aos="fade-up"
                data-aos-duration={900}
              >
                {/* {paragraph} */}
                We have assessments to suit every learners' need 
                <ul>
                  <li>Tests to enhance conceptual and Chapter level understanding Adaptively </li>
                  <li>Tests to enhance practical understanding</li>
                  <li>Students can create their own test for practice</li>
                  <li>Attend Mock Tests for better preparedness towards Exams</li>
                </ul>
              </p>
              {/* {(Boolean(extraParagraph) === false &&
                Boolean(children) === false) || (
                <Modal
                  title={title}
                  paragraph={paragraph}
                  extraParagraph={extraParagraph}
                  child={children}
                />
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>

            <ImageLeft
            imgPos="left"
            title="Rich Actionable Analytics"
            paragraph="Solve class 8 to class 10 exam questions created by subject matter experts with decades of experience to outperform your competitors. Get access to thousands of topic-wise questions, ranging between all levels of difficulty.
            "
            imgUrl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621277812/Dashboard_Overview_2x_pj1fff.png"
            />            
            <div>

            <Doubts/>
            </div>
            
          </div>
      </div>
    </>
  );
}

export default AssesmentSection;

// We have assessments to suit every learners' need 
// - Tests to enhance conceptual & Chapter level understanding Adaptively 
// - Tests to enhance practical understanding
// - Students can create their own test for practice
// - Attend Mock Tests for better preparedness towards Exams