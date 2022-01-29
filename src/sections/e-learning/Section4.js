import React from "react";
import ImageLeft from "../../components/ImageLeft";
import InformationCard from "./InformationCard";
const items = [
  {
    icon:
      "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621493472/Group_251_lolkh3.svg",
    title: "Audited Video Scripts",
    // content:
    //   "Practice complex concepts",
    color: "#E5F5FF",
  },
  {
    icon:
      "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621493472/Group_252_th9057.svg",
    title: "Concept notes or videos",
    // content:
    //   "Get doubts cleared",
    color: "#F5F5D4",
  },
  {
    icon:
      "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621493671/Group_253_ljdjq8.svg",
    title: "Mention Requirements for 3D models and Simulations     ",
    // content:
    //   "Enjoy guided learning",
    color: "#F5DEDE",
  },
  {
    icon:
      "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621493671/Group_253_ljdjq8.svg",
    title: "Activities: Case studies/ Experiments/ Designed Activities",
    // content:
    //   "Enjoy guided learning",
    color: "#F5DEDE",
  },
  {
    icon:
      "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621493671/Group_253_ljdjq8.svg",
    title: "Assessments: Concept Level and Chapter Level",
    // content:
    //   "Enjoy guided learning",
    color: "#F5F5D4",
  },
  {
    icon:
      "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621493671/Group_253_ljdjq8.svg",
    title: "Mock Test",
    // content:
    //   "Enjoy guided learning",
    color: "#E5F5FF",
  },
];

function Section4({ className, ...rest }) {
  return (
    <>
      <div class={className} {...rest}>
        <div class="new-bg">
            <ImageLeft
              imgPos={"left"}
              title="Our Assessment Process "
              paragraph="Bloom's Level is an important aspect of our assessment standards, and each question has been mapped to the corresponding chapter and topic."
              extraParagraph="We have incorporated unique methodologies to assess students throughout their academic journey. This enables them to improve their performance at every stage of their learning process by thoroughly understanding each and every concept. Learning does not end with the test, we encourage them to implement the acquired knowledge and develop something innovative and distinctive through our assessments and activities."
            >
              <ul class="text-align-left">
                <li>
                  Bloom's Level is an important aspect of our assessment
                  standards, and each question has been mapped to the
                  corresponding chapter and topic.
                </li>
                <li>
                  Rankpedia's tests monitor students' academic performance as
                  they progress through each test.
                </li>
                <li>
                  Rankpedia's tests monitor students' academic performance as
                  they progress through each test.
                </li>
                <li>
                  Different sets of questions are used to analyze performance in
                  terms of stream, subject, and overall understanding.
                </li>
                <li>
                  Students will be engaged in a variety of activities such as
                  case studies, experiments, and academic exercises.
                </li>
                <li>
                  The 3D animated simulations will help children imbibe and
                  critically analyze each concept.
                </li>
              </ul>
            </ImageLeft>
            <ImageLeft
              imgPos="right"
              title="What is unique about our Assessment model? "
              paragraph="We try to engage the child in various ways using Bloom's Taxonomy in order to make them creative and innovative. This assessment module aids the children in comprehending each chapter's concept."
              extraParagraph="The assessment is a 5-layered model where Bloom's Taxonomy is the core element. We try to engage the child in various ways using Bloom's Taxonomy in order to make them creative and innovative. This assessment module aids the children in comprehending each chapter's concept. This method of learning is effective as they are encouraged to create or innovate something new out of their understanding. All of these learning resources and approaches are given below to provide students with a solid comprehension of all of the curriculum's concepts and chapters.
            "
            />
          
          <div className="container mt-7">
            <div className="row justify-content-center d-flex align-items-strech">
              {items.map((item, index) => (
                <InformationCard i={index} options={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
