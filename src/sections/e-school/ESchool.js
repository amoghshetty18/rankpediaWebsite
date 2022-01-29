import React from "react";
import ImageLeft from "../../components/ImageLeft";

function ESchool({ className, ...rest }) {
  return (
    <div class="new-bg">
      <ImageLeft
        imgPos="left"
        title={"E-School"}
        paragraph={
          "Rankpedia’s E-school is an Internationally accredited online school that focuses on the child’s holistic development and helps children to excel academically and throughout their lives by providing a high-quality and fun learning experience. Our mission is to provide education for all."
        }
        extraParagraph={
          "It enables students to enroll in any course they want at their convenience, as they can learn at their own pace and at any point in their lives.Blended solutions for education help students to come out of the spoon-fed education system which gives no scope for self-paced learning. The learning methodologies will be implemented in the schools and in the lives of students to make this inquiry-based learning rather than making it a one-directional learning procedure. We believe that students should enjoy their learning experience and that whatever they learn should be retained so that they can apply their knowledge in real life. We want kids to be deeply involved in the learning process, which fosters their natural curiosity. When their questions are answered, they gain a thorough understanding of the subject or topic at hand. The courses offered are cost-effective and are designed in a way to empower the students to excel academically. Along with the Indian curriculum, our integration of international curricula like Montessori, Cambridge IGCSE, Discovery Education, and American Common Core makes learning more interactive. Our E-school gives students the opportunity to interact and work with students and teachers from all over the world. This boosts students' confidence and provides a broad perspective, allowing them to develop their competency and skills. Our curriculum is designed with a goal to establish an atmosphere that will prepare today's children to become better global citizens of tomorrow by encouraging peer learning, celebrating diversity, and developing a love for learning. It is cost-effective and allows learners to comprehend concepts thoroughly with the employment of technologically enhanced pedagogy. In accordance with the NEP 2020, we have developed a number of innovative teaching approaches that are student-centric and beneficial to them."
        }

      />
      <ImageLeft
        imgPos="right"
        title={"A Smart Learning Platform "}
        paragraph={
          "Rankpedia strives to provide a world-class education to every child who wishes to learn but lacks the resources to do so. It simplifies learning and makes students learn as much as they want in the privacy of their own homes."
        }
        extraParagraph={
          "They will be able to improve their skills in order to advance in their careers or continue their education. We try to make learning easier for students by allowing them to apply what they've learned in a variety of ways. Our goal is to provide high-quality tools to children that will enable them to attain their full potential."
        }
        imgUrl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643352863/e-school/Smart-Learning-Platform_dpnqlu.png"
      />
    </div>
  );
}

export default ESchool;
