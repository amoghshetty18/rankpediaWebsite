import React from "react";
import { Link , url} from "gatsby";
import homebanner from "../../assets/image/home/banner.png";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const Faqsection = ({ className, ...rest }) => {
  return (
   <div>
        <Accordion id="accordianarrow" preExpanded={['a']}> 
            <AccordionItem uuid="a">
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Who are the faculty members that are going to teach me? 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    We have a faculty of award-winning teachers, many of them having more than 20 years of teaching experience. They are well-versed with the curriculum of their respective subjects and are determined to share their knowledge with students who enroll with Rankpedia. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How is Rankpedia different from other online learning platforms?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p className="accordiondisc">
                Rankpedia is a flexible learning platform where the entire control of learning is in the students’ hands. Students can learn at their own pace, with complete guidance from our experts. With advanced technology integration, learning with Rankpedia is fast, exciting, and meaningful. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What are the advantages of taking online classes at Rankpedia?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    The most significant advantage of online learning at Rankpedia is the personalized attention that every child gets. Teaching methods, performance analysis, and even scheduling of tests are as per the preferences and availability of every student. Our online classes include engaging audio-visual content with exciting quizzes and assessments. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How can I track my progress using Rankpedia's learning solutions? 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    Along with the continuous evaluation, a weekly and monthly report is also prepared for all students. Detailed analysis of these progress reports helps in identifying each student's strengths and weaknesses. Teachers inform the students and their parents about the progress and discuss the plan to improve from thereon. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Will teachers just hand out the notes or answers in every class? 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    Live classes at Rankpedia are:
                    </p>
                    <ul>A combination of engaging video-based content.
                        <li>Detailed explanations by teachers.</li>
                        <li>Step-wise discussion of multiple problems.</li>
                    </ul>
                    <p className="accordiondisc">
                    Students get complete guidance, and every chapter/topic is completed in its entirety. Besides this, students will also get notes, question banks, and answers to all the practice questions. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What if I am not convinced with the teaching style of a teacher? 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    Students always have the option to provide their valuable feedback. If you are not satisfied with a teacher, you can report the problem to us. We shall provide the most suitable solution in the form of a replacement or re-evaluate your request.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What will be the minimum requirement to attend a course/classes on Rankpedia? 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    There are no eligibility criteria as such for enrolling on Rankpedia. However, there is a minimum requirement for either a mobile phone, laptop, or tablet to join the platform and attend online classes. Along with this, you will need a stable internet connection as well.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What are the methods by which we can pay the course fees? 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    The course fee depends on the class in which the child is currently in or the number of subjects they wish to study at Rankpedia. Depending on that, the cost shall be conveyed to you. You can make the complete payment or deposit it with flexible monthly installments via online bank transfer or cheque. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Can we cancel our enrollment midway through the course? 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                    Yes, you can cancel your subscription and can also switch between courses. However, it is recommended that you go through all course descriptions thoroughly to make the best decision the first time itself. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion>
   </div>
  );
};

export default Faqsection;
