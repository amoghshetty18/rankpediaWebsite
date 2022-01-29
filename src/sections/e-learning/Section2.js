import React from "react";
import ImageLeft from "../../components/ImageLeft";

function Section2({ className, ...rest }) {
  return (
    <div class="new-bg">
      <ImageLeft
        imgPos="left"
        title={"E-Learning"}
        paragraph={
          "Rankpedia believes in Education for All, with the aim of providing high-quality education to people from all walks of life. E-learning is a Rankpedia platform that delivers online education and online tutoring to students who want to learn and develop knowledge in a more efficient manner by utilizing innovative learning methods. "
        }
        extraParagraph={
          "Rankpedia integrates a variety of learning methodologies as well as technologically enhanced study materials that are measurable and keep all stakeholders in the educational system accountable.  The online teaching, live tutoring, and online doubt clearing procedure help the kids to stay connected with the learning process. We have come up with the greatest possible methods to educate the students of the country and the world who have problems accessing schools and quality education. Our objective is to maintain the quality education for the students of different state boards as well as the central board. Rankpedia's main goal is to see that every child receives a good education, that dropout rates are reduced, and that educational delivery enables Future-Ready Leaders. In alignment with NEP, we have come up with the most interactive and effective learning methodologies to help students develop their holistic skills. The assessment model designed by Rankpedia is more competency-based and tests higher-order thinking skills such as analysis, critical thinking, and conceptual clarity. "
        }
        imgUrl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643447577/e-learning/E-Learning-2nd-page_ikqgr0.png"
      />
      <ImageLeft
        imgPos="right"
        title={"Why E-learning by Rankpedia?"}
        paragraph={
          "Our assessment model has been designed in line with NEP 2020. We have developed a fun and engaging Playful/Hands-On Learning Curriculum that fosters the critical thinking of students."
        }
        extraParagraph={
          "The National Education Policy 2020 focuses on moving away from rote learning and toward a comprehensive learning method. Our assessment model has been designed in line with NEP 2020. We have developed a fun and engaging Playful/Hands-On Learning Curriculum that fosters the critical thinking of students. We emphasize outcome-based experiential learning that is centered on the holistic development of the child. With the 80:20 blended strategy, students can learn at their own pace and clear their doubts through live interactive sessions with SMEs on our online platform. Along with students,  parents can utilize our platform to keep track of their child's progress. "
        }
        imgUrl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643447590/e-learning/Why-E-learning-by-Rankpedia_liqsnc.png"
      />
    </div>
  );
}

export default Section2;
