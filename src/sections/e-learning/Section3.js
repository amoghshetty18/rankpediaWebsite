import React from "react";
import ImageLeft from "../../components/ImageLeft";
import Card from "./Card";

const cards = [
  {
    card_image:
      "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621597016/worldicon_bxklhm.svg",
    title: "Core essentials",
    text: "Curriculum to be reduced in all subjects to its core essentials.",
  },
  {
    card_image:
      "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621597016/worldicon_bxklhm.svg",
    title: "Critical thinking-",
    text:
      "Focus on critical thinking, inquiry, discovery, discussion, and analysis-based teaching and learning methods for holistic education.",
  },
  {
    card_image:
      "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621597016/worldicon_bxklhm.svg",
    title: "Interactive Classes",
    text:
      "Interactive teaching with reduced dependency on textbooks and questions from students are promoted.",
  },
  {
    card_image:
      "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621597016/worldicon_bxklhm.svg",
    title: "Experiential learning-",
    text:
      "Fun, creative, collaborative, and exploratory activities in the classroom.",
  },
];

function Section3({ className, ...rest }) {
  return (
    <>
      <div class={className} {...rest}>
          <div class="container">
            <ImageLeft
              title="National Education Policy 2020 "
              imgPos="left"
              paragraph="We've incorporated all of the best practices mentioned in the NEP 2020, such as the holistic learning system, assessment methodologies that develop analytical and critical thinking, vocational skills, etc."
              extraParagraph="The New Education Policy (NEP) highlights fundamental changes in how India perceives, teaches, and administers education. We've incorporated all of the best practices mentioned in the NEP 2020, such as the holistic learning system, assessment methodologies that develop analytical and critical thinking, vocational skills, etc. As mentioned in the NEP, we aim to provide equitable and inclusive education. We use all the new technologies involving artificial intelligence, machine learning, blockchains, smart boards, handheld computing devices, adaptive computer testing for student development, and other forms of educational software and hardware that will not just change what students learn in the classroom but how they learn, and thus these areas and beyond will require extensive research both on the technological as well as educational fronts.
              "
              imgUrl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643447578/e-learning/NEP-2020_ezzmc3.png"
            />


            <div class="row d-flex align-items-strech justify-content-between">
              {cards.map((item) => {
                return (
                  <Card props={item} />
                );
              })}
            </div>
          </div>
      </div>
    </>
  );
}

export default Section3;
