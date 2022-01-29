import React from 'react';
import GrayCards from '../../components/GrayCards/GrayCards';
import ImagePara from '../../components/ImageLeft';

const solutioncard = [
    {
      title: "Academic Orientation",
      text:
        "A brief outline of our program is provided to enrolled students during academic orientation. Students will have a broader idea of what to expect during the school year.",
    },
    {
      title: "Tech Orientation",
      text:
        "Technical orientation will be provided to students from a variety of backgrounds in addition to academic orientation. The learning technologies that are employed, such as the Learning Management System (LMS) platform, numerous Ed-tech tools that are used in the classroom, and so on, will be explained during the orientation." 
    },
    {
      title: "Personal Growth Tracker ",
      text:
        "Students and parents can use our system to keep track of their children's academic progress. The portal will also offer teachers anecdotal comments for the kids' development. This will help children to work on their weaknesses and improve their academic performance.",
    },
    {
      title: "Student Assistance",
      text:
        "Students that enroll in Rankpedia's E-school will receive a variety of learning aids. This will be provided to students who require additional assistance in order to achieve their academic objectives.",
    },
    {
        title: "Counseling Services ",
        text:
          "The social, emotional, and cognitive well-being of students is important and should be addressed. Therefore, the Rankpedia team will be available to students at all times to give psychological support in addition to academic assistance.",
      },
      {
        title: "Social Clubs",
        text:
          "Students can take part in social clubs based on their personal interests. The clubs will primarily serve as learning groups where students can engage in any activity they like, such as chess, music, dancing, painting, MUN, and so on.",
      },
  ];

function Features(){
    return (
        <div>
            <ImagePara
            imgPos={"left"}
            title={"Features of CE"} 
            paragraph={"Flexible Learning, Latest Tech Platform, Personalized growth monitor, Industry mentors, Industry tie-ups, Discussion forums"}
            />
            <GrayCards
            solutioncard={solutioncard}
            />
            
        </div>
    )
}

export default Features;