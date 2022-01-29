import React from "react";
import ImageLeft from "../../components/ImageLeft";

function Section6({ className, ...rest }) {
  return (
      <div class={className} {...rest}>
        <div class="new-bg">
            <ImageLeft
              imgPos={"right"}
              title="Why is our 5 layered assessment relevant? "
              paragraph="The 5-layered assessment is designed by our subject-matter experts keeping Bloom’s Taxonomy as an integral part with a scoring mechanism where the difficulty level increases from 1 to 10."
              extraParagraph="Learning should not simply be about regurgitating what we've learned; it should also enable students to practically apply the knowledge to make a difference. This learning standard enhances students' talents and prepares them to become tomorrow's leaders. Our assessment methodologies are designed to strengthen the critical and creative talents of our students. The assessment procedure includes different steps to engage the child in the entire learning process. The assessment will start after a child has completed all the components of a concept or chapter which includes
            "
            imgUrl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643447597/e-learning/Why-is-our-5-layered-assessment-relevant_dwftv2.png"
            >
              <ul>
                <li>Videos from various concepts and chapters.</li>
                <li>
                  Making Concept notes out of what they have learned in the
                  video.
                </li>
                <li>
                  Identify and mention the 3D models and Simulations required
                  for each chapter.
                </li>
                <li>
                  Design case studies, experiments, or activities based on the
                  chapter.
                </li>
                <li>
                  Assessment preparation is based on each chapter and concept
                  where each question has to be mapped with the particular
                  concept or chapter.
                </li>
              </ul>
              The 5-layered assessment is designed by our subject-matter experts
              keeping Bloom’s Taxonomy as an integral part with a scoring
              mechanism where the difficulty level increases from 1 to 10.
              <ul>
                <li>
                  With a concept and practical test and an overall concept test,
                  the performance of the students will be analyzed.
                </li>
                <li>
                  The tests will occur in cycles. After the completion of Cycle
                  1, the students will be able to move to Cycle 2 and so on.
                </li>
                <li>
                  Each set contains 10 questions and one cycle contains
                  10+10+10=30 questions (from each set).
                </li>
                <li>
                  After the concept adaptive test, the students will be able to
                  move to the chapter adaptive tests and stream adaptive tests.{" "}
                </li>
              </ul>
            </ImageLeft>
            <ImageLeft
              title="Our Core Strengths "
              paragraph="Affordability and Accessibility, Employability Quotient, High-quality Education"
              extraParagraph=""
              imgUrl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643447581/e-learning/Our-Core-Strengths_tvzrvj.png"
            >
              <ul>
                <li>
                  Affordability and accessibility are our strategies for
                  alleviating the financial constraints that approximately 1
                  billion students face due to the digital divide.
                </li>
                <li>
                  Students take up jobs to help support their families. As a
                  result of our outcome-based learning, their skill sets would
                  be increased and their employability quotient would increase.
                </li>
                <li>
                  A Digital Learning Platform that provides a high-quality
                  education while also addressing the problem of schools being
                  too far away and having inconvenient scheduling.
                </li>
              </ul>
            </ImageLeft>
          </div>
      </div>
  );
}

export default Section6;
