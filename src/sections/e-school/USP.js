import React from "react";
import ImageLeft from "../../components/ImageLeft";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

const faqs = [
  {
    title: "What is E-school by Rankpedia?",
    description:
      "Rankpedia’s E-school is an Internationally accredited online school that focuses on the child’s holistic development and helps children to excel academically and throughout their lives by providing a high-quality educational experience.",
  },
  {
    title: "How does one get global exposure in Rankpedia’s E-school?",
    description:
      "The E-school of Rankpedia aims to educate the students of different countries in the world. The enrolled students will be involved in various activities and various learning processes along with the students of different countries. The students will get to communicate with them and bring out their own ideas along with them.",
  },
  {
    title: "What role do the parents play in the students’ learning process in Rankpedia’s E-school?",
    description:
      "The parents will be a part of the students’ learning process to revive the Indian Education system. The parents will be aware of the child’s progress and will be able to keep a track of the learning process as well.",
  },
  {
    title: "What are the different curricula provided by Rankpedia’s E-school?",
    description:
    "The various curriculum provided by Rankpedia will be Cambridge IGCSE, Montessori, Discovery Education, and American Common Core."
  },
];

function USP() {
  return (
    <div>
    <div class="new-bg">
      <ImageLeft imgPos="right" title={"Our Unique Selling Points (USPs)"}>
        <ul>
          <li>
            Accredited International curricula like Montessori, American Common
            Core, IGCSE, etc. Along with the different curriculum, the students
            get to join the micro-courses offered by Discovery education.
          </li>
          <li>
            Multidisciplinary learning via live classes will be offered to the
            interested students.
          </li>
          <li>The courses offered will be Affordable to students.</li>
          <li>
            The curriculum designed for the students is aligned with NEP 2020
            and implements the best practices as mentioned in it which keeps the
            students involved in the learning process.
          </li>
          <li>
            Counseling to both parents and students for the development of
            children. Parents are also encouraged and trained to be a part of
            the child's learning process.
          </li>
          <li>
            Students can gain international exposure by interacting with
            students and professors from all around the world.
          </li>
          <li>
            Personalized growth monitoring helps the students and parents to
            keep track of their progress in the learning process.
          </li>
          <li>
            The Experiential Assessment model encourages students to put the
            knowledge they've learned in class into practice through learning
            exercises.
          </li>
          <li>
            Social clubs are available for the students to be engaged in various
            different activities of their interest.
          </li>
        </ul>
      </ImageLeft>
      </div>
      <div className="container">
        <div className="Heading-styling text-center mb-7 mb-lg-9">
          <h1 className="font-size-10 mt-7">FAQs</h1>
        </div>
        <div>
          <Accordion id="accordianarrow" preExpanded={["a"]}>
            <AccordionItem uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <b>What is E-learning at Rankpedia?</b>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="accordiondisc">
                  E-learning at Rankpedia is the edtech platform that delivers
                  various online study materials to students as well as the
                  schools with an aim to replace the traditional methods of
                  learning and make the teaching as well as learning procedure
                  easier.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            {faqs.map((faq) => {
              return (
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <b>{faq.title}</b>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="accordiondisc">{faq.description}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default USP;
