import React from "react";
import GrayCards from "../../components/GrayCards";
import ImageLeft from "../../components/ImageLeft";

const Curriculum = () => {
  //   const gContext = useContext(GlobalContext);
  const solutioncard = [
    {
      title: "Montessori",
      text:
        "Montessori emphasizes hands-on learning, which encourages students' active participation in the learning process. Montessori classrooms encourage children to make creative learning choices, while the classroom and teacher guide them through various activities. Children work in groups and individually to expand their knowledge of the world and reach their full potential. The Montessori approach helps children and adolescents to make rigorous, self-motivated progress in all aspects of their development, including cognitive, emotional, social, and physical development.",
    },
    {
      title: "Cambridge IGCSE",
      text:
        "Cambridge IGCSE encourages inquiry-based learning and learner-centered approaches to education. The IGCSE curriculum is based on the GCSE curriculum of the United Kingdom and it enhances students' creative thinking, inquiry, and problem-solving skills, preparing them for the next stage of their education. Cambridge IGCSE is compatible with other curricula, as well as being globally relevant and culturally sensitive. Cambridge IGCSE improves students' subject knowledge, understanding, and skills while also preparing them to apply what they've learned in real-life situations.",
    },
    {
      title: "American Common Core",
      text:
        "It highlights the relevance of real-world application in children's skill development. The American Common Core prioritizes critical thinking skills and comprehension depth over the breadth of knowledge and rote learning. It equips pupils to succeed in college and in their chosen profession. It allows students to progress towards their objectives.",
    },
    {
      title: "Discovery Education",
      text:
        "Discovery Education delivers equal and interesting learning opportunities for all students. Educators will be taught how to leverage high-quality content, ready-to-use lesson activities, and novel collaboration tools to engage all learners and have a lasting educational effect in any learning context. Discovery Education's STEM Connect program has been integrated across disciplines. Our instructors have all the materials they require to introduce STEM to our students. Learners who want to broaden their knowledge in STEM subjects can enroll in Discovery Education's courses.",
    },
  ];
  return (
    <div>
      <ImageLeft
      imgPos={"left"}
      
      title={"Our Curriculum"}
      paragraph={"The curriculum's purpose is to create an environment that encourages peer learning, celebrates diversity, and fosters a love for learning in today's students."}
      extraParagraph={"The curriculum's purpose is to create an environment that encourages peer learning, celebrates diversity, and fosters a love for learning in today's students. Students can choose from a variety of multidisciplinary courses and take advantage of the best facilities available. Rankpedia offers a variety of international curricula, including Cambridge IGCSE, Montessori, American Common Core, and Discovery Education micro-courses, etc."}
      imgUrl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643381273/e-school/4-Verticals_oav45s.png"
      />
      <GrayCards
      solutioncard={solutioncard}
      />
      </div>
  );
};

export default Curriculum;
