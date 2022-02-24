import React from "react";
import ImageLeft from "../../components/ImageLeft";
import Doubts from "./Doubts";

function AssesmentSection({ className, ...rest }) {
  return (
    <>
      <div class={className} {...rest}>
        <div class="container">
          <div className="pt-7 pt-md-9 pt-lg-13 pb-7 pb-md-9 pb-lg-12 mb-lg-1">
            <div className="container">
              <div className={`row align-items-center d-flex flex-row-reverse`}>
                <h2 className="section-2-heading-phone mx-auto">
                  Assesment Types
                </h2>
                <div
                  className="col-md-6"
                  data-aos="flip-right"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <img
                    src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643458609/e-learning/Our-Assessment-Process-_yaqpdl.png"
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
                    Assesment Types
                  </h2>
                  <p>
                    We have assessments to suit every learners' need
                    <ul>
                      <li>
                        Tests to enhance conceptual and Chapter level
                        understanding Adaptively{" "}
                      </li>
                      <li>Tests to enhance practical understanding</li>
                      <li>Students can create their own test for practice</li>
                      <li>
                        Attend Mock Tests for better preparedness towards Exams
                      </li>
                    </ul>
                  </p>
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
            <Doubts />
          </div>
        </div>
      </div>
    </>
  );
}

export default AssesmentSection;
