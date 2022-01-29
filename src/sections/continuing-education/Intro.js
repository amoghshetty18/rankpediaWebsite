import React from "react";
import ImagePara from "../../components/ImageLeft";

function Section2({ className, ...rest }) {
  return (
    <div className="new-bg">
      <ImagePara 
        imgPos="right"
        title={"Continuing Education "}
        paragraph={"Our Continuing Education program primarily focuses on imparting knowledge and career-oriented skills to learners from any part of the world, with no boundaries around the learners with regard to their age, restricted physical classrooms, etc."}
        extraParagraph={"It refers to learning activities in which students or professionals pursue education in their field of interest with an intention to enhance their professional and personal lives.This vertical addresses the unemployment issues and lack of competency among today's youth. Rankpedia collaborates with top-class universities and industries from around the world to allow our students to grow and thrive. Since theoretical knowledge alone is insufficient to make people employable, we enable the professionals to stay current with the industry's changes and open doors to new employment opportunities in their area or beyond. The main objective of our CE program fosters the employability skills of our learners through opportunities like internships, apprenticeships, and mentorship from industry experts. We collaborate with top-tier international and national universities to provide learners with the opportunity to obtain internationally accredited certifications."}
        
      />
      <ImagePara
        imgPos="left"
        title={"Why Rankpedia's CE program?"}
        paragraph={"Make People Employable, Collaborate With Top-Tier International And National Universities, Employment-Specific Vocational Training, Enhance Their Career Opportunities."}
      >
        <ul>
          <li>
          Since theoretical knowledge alone is insufficient to make people employable, we enable the professionals to stay current with the industry's changes and open doors to new employment opportunities in their area or beyond.
          </li>
          <li>
          Rankpedia's collaboration with top-tier international and national universities provides learners with the opportunity to obtain internationally accredited certifications.
          </li>
          <li>
          We focus on employment-specific vocational training delivered through cutting-edge learning technologies tailored to the field in which they wish to work, making the transition to a new career easier.
          </li>
          <li>
          We also aim to introduce graduates, postgraduates to a wide spectrum of knowledge in order to enhance their career opportunities.
          </li>
        </ul>
      </ImagePara>
    </div>
  );
}

export default Section2;
