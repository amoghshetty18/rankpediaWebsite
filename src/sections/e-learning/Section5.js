import React from "react";
import ImageLeft from "../../components/ImageLeft";

import Assesment from "./Assesment";

const assesments = [
  {
    imgUrl:"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625558128/shutterstock_1958115715_d8etl4.jpg",
    title: "Remember",
    description:
      "Retain, recall, and recognize knowledge.The action verbs for this level of Bloom’s taxonomy are, arrange, define, identify, indicate, label, list, match, memorize, recall, recite, recognize.",
  },
  {
    imgUrl:"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625558206/shutterstock_1827527717_batkfq.jpg",
    title: "Understand ",
    description:
      "Translate and interpret knowledge.The action verbs for this level of Bloom’s taxonomy are, compare, classify, describe, discuss, explain, give examples, interpret, paraphrase, predict, present, report, rewrite, summarize.",
  },
  {
    imgUrl:"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625558289/shutterstock_559949164_skw7lp.jpg",
    title: "Apply ",
    description:
      "Apply knowledge to different situations. The action verbs for this level of Bloom’s taxonomy are, calculate, complete, demonstrate, execute, illustrate, implement, modify, organize, practice, prepare, solve, show, use, write.",
  },
  {
    imgUrl:"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625558128/shutterstock_1958115715_d8etl4.jpg",
    title: "Analyze",
    description:
      "Break down information to look at relationships.    The action verbs for this level of Bloom’s taxonomy are Categorize, contrast, compare, criticize, debate, differentiate, experiment, inspect, infer, investigate, organize, outline, question, separate, test    ",
  },
  {
    imgUrl:"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625558206/shutterstock_1827527717_batkfq.jpg",
    title: "Evaluate",
    description:
      "Make judgments on evidence found. The action verbs for this level of Bloom’s taxonomy are, attribute, argue, assess, check, compare, conclude, contrast, criticize, critique, defend, examine, justify, measure, recommend, support, reflect.",
  },
  {
    imgUrl:"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625558289/shutterstock_559949164_skw7lp.jpg",
    title: "Create ",
    description:
      "Compile information to generate new solutions. The action verbs for this level of Bloom’s taxonomy are, arrange, calculate, compose, construct, design, develop, devise, formulate, generate, hypothesize, plan, prepare, produce, propose, revise, summarize, synthesize.",
  },
];

const Section5 = () => {
  return (
      <div className="pt-10 pt-lg-12">
        <div className="container">
          
          <h2 className="font-size-10 mb-10" style={{ textAlign: "center" }}>
            Bloom's Level of Assesment
          </h2>
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="true"
          >
            {assesments.map((assesment) => {
              return (
                <Assesment
                imgUrl={assesment.imgUrl}
                  title={assesment.title}
                  description={assesment.description}
                />
              );
            })}
          </div>
            <ImageLeft
              imgPos="left"
              paragraph={
                "Students get to choose the Chapter, Concept, Difficulty Level, Blooms Level, Time, etc. to create a test that they can practice at their own pace. Different sets of questions are used to analyze performance in terms of stream, subject, and overall understanding. Our portal contains both subjective and objective questions created by the system as well as questions submitted by experts. Students can upload their works, which will be examined by our Subject Matter Experts. These techniques facilitate the learning process of the students."
              }
              extraParagraph={""}
            />
        </div>
      </div>
  );
};

export default Section5;
