import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Section12 = () => {
    return (
        <div className="container section-margins">
            <div className="row">
                <div className="col-12">
                    <h2 
                        className='text-center'
                        style={{
                            fontWeight: "100"
                        }}
                    >
                        FAQs
                    </h2>
                </div>
                <div className="col-12">
                    <Accordion id="accordianarrow" preExpanded={['a']}> 
                        <AccordionItem uuid="a">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What do you mean by Experiential Learning? 
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="accordiondisc">
                                    Experiential Learning is a method of instruction in which students "learn by doing." The students are expected to reflect on their real-life learning experiences. Students are given opportunities to participate in the learning process in a variety of ways, including intellectually, creatively, emotionally, socially, and physically.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What is Bloom’s Taxonomy?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                            <p className="accordiondisc">
                                Bloom's taxonomy is a classification system for differentiating and defining levels of human cognition, such as thinking, learning, and understanding. 
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How will the E-learning platform of Rankpedia be helpful to schools?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="accordiondisc">
                                    The E-learning platform of Rankpedia helps the students as well as the schools with the best study materials that keep a kid intact with the learning system. At Rankpedia, we want the students to have a fun learning experience.  
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What is the Assessment process of Rankpedia?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="accordiondisc">
                                    Rankpedia designs the curriculum with a 5-layered assessment module to keep a track of the kid’s learning progress and to keep the kids engaged in the entire learning process. Learning activities assist in a complete understanding of the subjects and leave an everlasting impression on their minds.  
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What is E-school by Rankpedia? 
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="accordiondisc">
                                    The E-school by Rankpedia is an online school that provides an International curriculum to the students and gives them the freedom of choosing courses of their own. At Rankpedia, we provide the required space to the students for their learning. We follow the 80:20 blended learning process where the students are expected to learn on their own along with online tutoring and online doubt clearing. 
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How do we get the Question banks? 
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="accordiondisc">
                                    The question banks are created by the experts of Rankpedia. The students get unlimited questions from a particular concept or chapter after they have logged in to the website.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How does Rankpedia help the students with their doubt clearing? 
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="accordiondisc">
                                    The students can connect with their mentors for any doubts. The mentors will connect with the students for the online doubt clearing sessions.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How is Rankpedia different from other edtechs? 
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="accordiondisc">
                                    Rankpedia believes in quality education for all. The best learning approaches and the futuristic methodologies make us different. We align with NEP 2020 to bring advanced technology into the education curriculum of the children. 
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Which are the International curricula offered by Rankpedia’s E-school?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="accordiondisc">
                                    The International Curriculum offered by Rankpedia is Montessori, Cambridge IGCSE, Discovery Education, American Common Core. Students will have the privilege to choose the course of their choice from the various micro-courses available.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How will the kids get global exposure?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="accordiondisc">
                                    The kids will be introduced to the different international curricula and they will also be learning along with kids and teachers from different countries. The activities will be designed in a way that the kids will be engaged and will interact with the students from all over the world. 
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Section12;
