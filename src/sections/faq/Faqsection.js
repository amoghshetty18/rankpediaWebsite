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
        <Accordion id="accordianarrow"> 
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        How can i?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiondisc">
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       What if?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p className="accordiondisc">
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
   </div>
  );
};

export default Faqsection;
