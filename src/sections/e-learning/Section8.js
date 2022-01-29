import React from "react";
import ImageLeft from "../../components/ImageLeft";

function Section8({ className, ...rest }) {
  return (
    <div class={className} {...rest}>
      <div class="new-bg">
        <ImageLeft
          title="Our Unique Selling Points (USPs)"
          paragraph="Different Indian Boards- curating the content for various Indian
          Boards to maintain the standard of learning in both Central as
          well as State boards."
          extraParagraph=""
          imgUrl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643447585/e-learning/Our-USP_ohsx8l.png"
        >
          <ul>
            <li>
              Different Indian Boards- curating the content for various Indian
              Boards to maintain the standard of learning in both Central as
              well as State boards.
            </li>
            <li>
              NEP Relevance- The motive of extending our hands to the children
              of our country is based on NEP 2020 which not only be affordable
              but also accessible to the learners. The curriculum is centered on
              outcome-based experiential learning, which allows for a broader
              view of education.
            </li>
            <li>
              5 layered Assessment model- the assessment designed by our
              subject-matter experts is highly interactive and is created as per
              the 5-layered assessment model where Bloom’s Taxonomy becomes the
              central part.{" "}
            </li>

            <li>
              Holistic development curriculum- it helps the child to develop the
              intellectual, emotional, social, physical, artistic, creative, and
              spiritual potentials hidden inside. Our curriculum seeks to assist
              children not only intellectually, but also in their overall
              growth.
            </li>

            <li>
              An Artificial Intelligence Interface that enables the perfect
              blend of Tech and Quality Teaching.
            </li>
            <li>
              Production output on par with International Standards of Teaching
              and Learning.
            </li>
            <li>
              In-house production studio- The educational materials are
              developed in our own studio using cutting-edge technologies.
            </li>
            <li>Assessment and study resources are 100% plagiarism-free.</li>
            <li>
              Personalized growth monitoring helps the students as well as the
              parents to keep a track of the student’s progress.{" "}
            </li>
            <li>
              We are adopting vocational skills training for the students as per
              the NEP 2020 as a support to the government.
            </li>
            <li>
              Experiential Assessment model that keeps the students engaged with
              the learning process and makes them apply the same in their daily
              life.
            </li>
            <li>
              Blended solutions for education help students to come out of the
              spoon-fed education system which gives no scope for self-paced
              learning. Our learning methods and the assessments are designed in
              a way that the students get their own pace and space for doubt
              clearing.
            </li>
          </ul>
        </ImageLeft>
      </div>
    </div>
  );
}

export default Section8;
