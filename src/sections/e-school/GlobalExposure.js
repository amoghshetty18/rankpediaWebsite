import React from "react";
import ImagePara from "../../components/ImageLeft";
function GlobalExposure() {
  return (
    <div>
      <ImagePara
        imgPos={"left"}
        title={"A Global Exposure"}
        paragraph={
          "Rankpedia aspires to educate every child in the world, not just in the country and provides opportunities to interact with students from all over the world."
        }
        extraParagraph={
          "By learning along with pupils from different parts of the world, they will be able to assimilate new cultures and practice diversity. They participate in activities with kids and teachers from different cultural and social backgrounds. Direct contact with mentors and educators will help them develop their personalities and boost their confidence. The interactive learning patterns on Rankpedia will help students improve their communication, leadership, and interpersonal skills."
        }
        imgUrl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643352911/e-school/A-Global-Exposure_qzwdbo.png"
      />
      <ImagePara
        imgPos={"right"}
        imgUrl={
          "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625558541/shutterstock_1701863368-min_idibkf_qunxo7.jpg"
        }
        title={"How do we make a Difference?"}
        paragraph={
          "We hope to build learners who are self-assured, responsible, introspective, innovative, and engaged, and who are prepared for success in the modern world, in collaboration with the Cambridge curriculum."
        }
        imgUrl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643352927/e-school/How-do-we-make-a-difference_n9wpeu.png"
      >
        <ul>
          <li>
            We hope to build learners who are self-assured, responsible,
            introspective, innovative, and engaged, and who are prepared for
            success in the modern world, in collaboration with the Cambridge
            curriculum.
          </li>
          <li>
            Our students receive a high-quality private school online education
            with our internationally certified curriculum and tailored approach.
          </li>
          <li>
            We believe that the students can benefit from individual and
            one-on-one support for which we are providing student.
          </li>
          <li>
            Support team who will help students academically as well as in their
            personal lives.
          </li>
          <li>
            Our teachers work directly with each student in every grade to
            monitor topic understanding, accelerate learning where possible, and
            provide many opportunities for students to flourish.
          </li>
          <li>
            While our professional teachers lead lessons, parents have the
            chance to remain involved in their children's daily education as
            Learning Coaches.
          </li>
        </ul>
      </ImagePara>
      
    </div>
  );
}

export default GlobalExposure;
