import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const faqs = [
  {
    title: "How does E-learning at Rankpedia work?",
    description:
      "The E-learning at Rankpedia works for the students as well as the schools by providing online study materials to make the learning and teaching process smooth, interactive and experiencing. Rankpedia provides the study resources as well as intends to keep the students intact with the educational process through the 5-layered assessment model where Bloom’s Taxonomy is the integral part. ",
  },
  {
    title: "Will E-learning replace real classrooms?",
    description:
      "No, E-learning doesn’t intend to replace the classrooms but helps the students and teachers to make the learning process more interactive and lively.",
  },
  {
    title: "What is the 5-layered assessment model at Rankpedia?",
    description:
      "The 5-layered assessment model at Rankpedia is the process of assessing and keeping a track of the student’s learning progress. This process enables them to improve their performance at every stage of their learning process by thoroughly understanding each and every concept.",
  },
  {
    title: "What is Bloom’s Level of Assessment?",
    description:
      "The 5-layered assessment is designed by our subject-matter experts keeping Bloom’s Taxonomy as an integral part with a scoring mechanism where the difficulty level increases from 1 to 10. The six levels of Bloom’s Taxonomy have been incorporated into our assessment process where we make sure the students remember the concept and then the chapter, understand the in-depth concept, apply the concept into a given situation, analyze the concept thoroughly, evaluate the concept and create something new and innovative out of their understanding of the concept.",
  },
];

const Faqsection = ({ className, ...rest }) => {
  return (
    <div className="container">
          <div className="Heading-styling text-center mb-7 mb-lg-9">
            <h1 className="mt-7 font-size-10">
              FAQs
            </h1>
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
                  <AccordionItemButton><b>{faq.title}</b></AccordionItemButton>
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
  );
};

export default Faqsection;
