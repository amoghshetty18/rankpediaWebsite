import React from "react";

import PageWrapper from "../components/PageWrapper";
import Company from "../sections/home1/Compnay";
import Categories from "../sections/home1/Categories";
import Jobs from "../sections/home1/Jobs";
import Content1 from "../sections/home1/Content1";
import Blog from "../sections/home1/Blog";
// import Section from "../layout/Section";

import Hero from "../sections/pricinglanding/Hero";
import Pricing from "../sections/pricinglanding/Pricing";
import ThingsSec from "../sections/doubts-landing/ThingsSec";
import Infocard from "../sections/faq/Infocard";
import GetinTouch from "../components/GetinTouch";

import Section1 from "../sections/home/Section1";
import Section2 from "../sections/home/Section2";
import Section3 from "../sections/home/Section3";
import Section4 from "../sections/home/Section4";
import Section5 from "../sections/home/Section5";
import Section6 from "../sections/home/Section6";
import Section7 from "../sections/home/Section7";
import Section8 from "../sections/home/Section8";

const Pricinglanding = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right test",
          headerButton: (
            <>
            <a href="/login">  <button className="btn btn btn-blue-3 header-btn1 head-login">
                Login
              </button> </a>

              {/* <div class="header-btn  ml-auto ml-lg-5 mr-6 mr-lg-0 d-none d-xs-block" id="login-tpr">
            <a class="btn bggr gr-text-9 d-none d-xs-inline-flex " href="#">
              Login
            </a>
          </div> */}
            </>
          ),
          footerStyle: "style3",
        }}
      >
         <Hero />
        <Pricing />


        
         {/* Start of Few Things to Know */}
         <ThingsSec  
         
         Title="How will your kid learn?"
         Accordianheading1="How many classes will be there per week?"
         Accordianpara1="There will be 3-4 classes every week."

         Accordianheading2="How can my kid ask questions during a class?"
         Accordianpara2="Your kid can use the chatbox to ask questions during the live online classes. Our subject matter experts will clear their doubts instantly."

         Accordianheading3="How will the homework be evaluated?"
         Accordianpara3="The teacher will assign the homework during the session. The completed homework will be evaluated on the portal. "

         Accordianheading4="Does my kid need RankPedia if they are already attending tuitions?"
         Accordianpara4="RankPedia is a comprehensive education ecosystem where the best mentors across the country teach students and help them exceed their limitations. Teaching sessions followed by quizzes and assessments help them strengthen their areas of improvement. Our all-inclusive classes will help your child learn and master the concepts seamlessly."

         Accordianheading5="What are all payment methods available?"
         Accordianpara5="RankPedia accepts various payment methods, including Net Banking, UPI, Credit Cards, Debit Cards and Wallet."
         
         Accordianheading6="At what time will my plan get activated?"
         Accordianpara6="Your plan will get activated as soon as the payment is successful. However, please wait for 24 hours after subscribing. "

         Accordianheading7="What to do if it shows a payment error?"
         Accordianpara7="In this case, we suggest you check your internet connection and look if there is an issue with your bank server."
         Accordianpara71="If the amount is already debited from your account and the error occurs, please contact us. Kindly fill out the necessary information. We shall get back to you as soon as possible."

         />
        {/* End of Few Things to Know */}
        <Infocard/>
        {/* Start of get in touch section */}
        <GetinTouch
        title="Ready for an Experience of 
        Blended Learning?"
       disc="Register to experience blended learning like never before and stay ahead."/>
       {/* End of get in touch section */}


      </PageWrapper>
    </>
  );
};
export default Pricinglanding;
