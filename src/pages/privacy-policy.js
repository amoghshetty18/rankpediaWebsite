import React from "react";

import PageWrapper from "../components/PageWrapper";
import Faqsection from "../sections/faq/Faqsection";
import Infocard from "../sections/faq/Infocard";
import GetinTouch from "../components/GetinTouch";
const Privacypolicy = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right test",
          headerLogoClassName: "mx-auto text-center",
          headerButton: (
            <>
          <a href="/login">   <button className="btn btn btn-blue-3 header-btn1 head-login">
                Login
              </button> </a> 

            
            </>
          ),
          footerStyle: "style3",
        }}
       
      >
         <main className="pt-23 pt-md-27 pb-13 pb-md-19 pt-lg-29 pb-lg-27">
          <div className="">
            <div className="row justify-content-center">
              <div className="col-xl-12">
                {/* job-details-content */}
                <div className="text-center pb-0">
                  {/* job-top-header */}
                 
                  <h2 className="font-size-10 font-weight-bold text-center mb-lg-15 mb-0">
                      Privacy Policy
                  </h2>
                </div>
              </div>
              <div className="col-xl-9 col-lg-10 px-xl-0 px-lg-6 px-md-0 px-6 pr-0">
                {/* terms-contents  */}
                <div className="pt-lg-0 pt-10 pl-lg-10 px-xl-15">
                  <p className="clscls heading-default-color mb-9">
                  Your trust is our chief priority. This privacy policy discloses all the privacy practices for Rankpedia Private Limited about your use of the online platform <a href="https://rankpedia.com">https://rankpedia.com</a>. Rankpedia Private Limited is fully committed to safeguarding the privacy and accuracy of confidential information obtained from you to the extent possible. The terms mentioned below describe how we use your personal information. We request you to go through the privacy policy carefully before using the website, its services and products. This Privacy Policy along with ‘Course Policy’ describes our practices regarding, including your choices concerning how we collect, store, use, share and secure your personal information across our website. It also includes your choices regarding the use, access and rectification of your personal information and your rights with your personal information and how to contact us or supervisory authorities in the event you have a complaint. To be specific, we do not re-distribute or exchange personal information assembled on our network servers. 
                  </p>
                  <div className="article-block mt-11 mt-lg-15">
                    <h5 className="why-pdrspt-scxr mb-6 mt-0">Information collected: </h5>
                    {/* <p className="font-size-5 heading-default-color mb-9">
                      A Senior Data Engineer provides technical and delivery
                      leadership for a team of developers working on data
                      integration and processing projects. This role will work
                      with stakeholders and other developers to design and
                      implement technical data solutions for the business in a
                      way that balances quality, cost, time and maintainability.
                    </p> */}
                  </div>
                  {/* article-block */}
                  <div className="mt-8">
                    {/* block-title */}
                    <h5 className="font-size-8 mb-7">
                    Rankpedia servers collect the following analytics: 
                    </h5>
                    {/* term-list */}
                    <ul className="p-0 m-0 list-disc">
                      <li className="position-relative font-size-7 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        Internet Protocol (IP) address of computer being used 
                      </li>
                      <li className="position-relative font-size-7 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        Web pages requested 
                      </li>
                      <li className="position-relative font-size-7 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        Referring Web page
                      </li>
                      <li className="position-relative font-size-7 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        Browser Used 
                      </li>
                      <li className="position-relative font-size-7 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        Date and Time
                      </li>
                    </ul>
                  </div>

                  <p className="clscls mt-10 heading-default-color mb-9">
                  Rankpedia does not link this data to individual user identities. In addition to the IP address/browser information obtained from unidentified visitors to the site, other information is gathered and reserved when users log in to see the restricted content or submit forms. 
                  </p>

                  {/* article-block */}
                  <div className="mt-8 mt-md-12">
                    <h5 className="font-size-8 mb-7">Cookies</h5>
                    <p className="clscls mt-7 heading-default-color mb-7">
                    A “cookie” is a binder that websites send to a visitor’s computer or other internet-connected gadgets to uniquely find out the visitor’s browser or to keep information or settings in the browser. A “web beacon”  is a technology that can identify particular cookies and share information about that browser (may include details such as your web request, internet protocol address, browser type, browser language, the date and time of your request). We do not capture personally identifiable information from these technologies. Rankpedia site may use "cookies" to send web content particular to independent users' interests or to track the online buying transactions. Private or personal details are not stored inside the cookies.
                    </p>
                  </div>




                  <div className="mt-8 mt-md-12">
                    <h5 className="font-size-8 mb-7">Webforms</h5>
                    <p className="clscls mt-7 heading-default-color mb-9">
                    Rankpedia utilises webforms forms. These forms need users to give contact information. All the contact details and personal information from the registration forms and documents are used only to deliver material relating to the course for which it was collected and will not be given to another party. 
                    </p>
                  </div>


                  <div className="mt-8 mt-md-12">
                    <h5 className="font-size-8 mb-7">Use of collected information:</h5>
                    <ul className="p-0 m-0 list-disc">
                      <li className="position-relative font-size-7 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        We will only use private details collected from this site for communication back to people who contact us via the site. 
                      </li>
                      <li className="position-relative font-size-7 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        We use browser-IP-address details and anonymous browser history to report information about site accesses and for profiling purposes. This data is used to improve Web presentation and utilization. IP address information may also be used for troubleshooting usages. 
                      </li>
                      <li className="position-relative font-size-7 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        The information collected by us is used to recognise users accessing secure content, and to pre-fill forms or documents with details about the user finally submitting the form.
                      </li>
                    </ul>
                  </div>


                  <div className="mt-8 mt-md-12">
                    <h5 className="font-size-8 mb-7">Distribution of collected information:</h5>
                    <ul className="p-0 m-0 list-disc">
                      <li className="position-relative font-size-7 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        We will not reveal, without your consent, private information collected about you, except for some explicit situations in which disclosure is required by law and clauses.
                      </li>
                      <li className="position-relative font-size-7 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        We will not distribute or give personal information to third-party corporations.
                      </li>
                    </ul>
                  </div>

                  <p className="clscls mt-10 heading-default-color mb-9">
                  This Privacy Statement is not applicable to the other Rankpedia websites. You should read the privacy statement posted on other Rankpedia websites when you go on those websites and visit them. 
                  </p>

                  <div className="mt-8 mt-md-12">
                    <h5 className="font-size-8 mb-7">Privacy Statement Revisions:</h5>
                    <p className="clscls mt-7 heading-default-color mb-9">
                    This Privacy Statement was last amended on <b>[Date of last revision]</b>. We may alter this Privacy Statement at any time for some reasons. We advise you to keep a check on this Privacy Statement each time you visit the website.
                    </p>
                    <p className="clscls mt-7 heading-default-color mb-9">
                    If we make a significant change to our Privacy Statement, we will post a notice on the homepage of our website for some time after the change is made. 
                    </p>
                  </div>


                  <div className="mt-8 mt-md-12">
                    <h5 className="font-size-8 mb-7">Responsibility for External Sites:</h5>
                    <p className="clscls mt-7 heading-default-color mb-9">
                    This website may have links to other websites. Some of those websites may be employed by third parties. We provide the links for your convenience, but we do not check, control, or monitor the privacy practices of websites operated by other parties. 
                    </p>
                    <p className="clscls mt-7 heading-default-color mb-9">
                    We like to convey to our viewers that we are not answerable for the performance of websites used by third parties or for your business dealings with them. Therefore, whenever you leave this website we recommend that you review each website's privacy practices and make your conclusions regarding the adequacy of these practices.
                    </p>
                  </div>

                  <div className="mt-8 mt-md-12">
                    <h5 className="font-size-8 mb-7">How To Contact Us?</h5>
                    <p className="clscls mt-7 heading-default-color mb-9">
                    While using this website, you may encounter hypertext links to the Web pages of other Rankpedia websites or organizations not directly affiliated with Rankpedia. All Rankpedia websites must comply with the Privacy Statement for Rankpedia Websites but may have refined the standard campus privacy statement to include additional or stronger privacy provisions. Rankpedia does not control the content or information practices of external organizations.  We recommend you review the privacy statements of these organizations.
                     </p>
                  </div>


                  <div className="mt-8 mt-md-12">
                    <h5 className="font-size-8 mb-7">How Do We Protect Your Data?</h5>
                    <p className="clscls mt-7 heading-default-color mb-9">
                    It is our effort to have a fully secure website and though we employ best practices towards safeguarding our users and ourselves, we have to be pragmatic. If the biggest and best of corporations have had their websites jeopardised, it would be unfeasible to believe that we are not at risk of such events. We ask you to do your bit by using a strong password to access the site. Please do not share your password with anyone. Do not use a common password for all your online activities and reset your password every so often.
                     </p>
                  </div>

                  <div className="mt-8 mt-md-12">
                    <h5 className="font-size-8 mb-7">Changes To Our Privacy Policy</h5>
                    <p className="clscls mt-7 heading-default-color mb-9">
                    We may change our Privacy Policy as and when deemed necessary, so please do check back from time to time.
                     </p>
                  </div>

                  <div className="mt-8 mt-md-12">
                    <h5 className="font-size-8 mb-7">Your Consent</h5>
                    <p className="clscls mt-7 heading-default-color mb-9">
                    By submitting data to us or using the Site, you consent to our use of your data in the manner set out in this Privacy Policy.
                     </p>
                     <p className="clscls mt-7 heading-default-color mb-9">
                     If you reside outside India, your information will be transferred, processed and stored in accordance with the applicable data protection laws of India.
                     </p>
                  </div>

                  <div className="mt-8 mt-md-12">
                    <h5 className="font-size-8 mb-7">Privileged/exclusive service: </h5>
                    <p className="clscls mt-7 heading-default-color mb-9">
                    By having a Rankpedia account, you have explicitly given permission or consent for us to record images (followed by analysis), camera/mic permissions to allow or make video calls and record the same.
                    </p>
                  </div>


                  <div className="mt-8 mt-md-12">
                    <h5 className="font-size-8 mb-7">Rankpedia may disclose information:</h5>
                    <ul className="p-0 m-0 list-disc">
                      <li className="position-relative font-size-7 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        As required by law, such as to comply with a subpoena or similar legal process;
                      </li>
                      <li className="position-relative font-size-7 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        To enforce applicable to (terms of use), including investigation of potential violations thereof;
                      </li>
                      <li className="position-relative font-size-7 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        When we believe in good faith that the disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, address security or technical issues or respond to a government request;
                      </li>
                      <li className="position-relative font-size-7 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        With our trusted service providers who work on our behalf and do not have an independent use of the information we disclose to them and have agreed to and adhered to the rules set forth in this policy;
                      </li>
                      <li className="position-relative font-size-7 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        To protect against imminent harm to the rights, property or safety of the website or our users or the public as required or permitted by law;
                      </li>
                      <li className="position-relative font-size-7 heading-default-color pl-8 d-flex mb-7">
                        <span className="circle-9 mr-3 mt-4 bg-black" />
                        With third-party service providers in order to personalize the website/services/products for a better user experience and to perform behavioural analysis;
                      </li>
                    </ul>
                  </div>


                  <div className="mt-8 mt-md-12">
                    <h5 className="font-size-8 mb-7">Governing law and jurisdiction: </h5>
                    <p className="clscls mt-7 heading-default-color mb-9">
                    In the event of any disagreement arising between the parties with respect to this agreement, the same shall be referred to the sole arbitrator and the arbitration shall be in accordance with the arbitration and conciliation act of 1996. The language of the arbitration proceeding shall be English. The seat and place of arbitration shall be Bangalore and the decision of the arbitrator shall be final and binding on both parties herein. This contract shall be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka, India and shall be governed by the Indian laws.
                    </p>
                  </div>




                  {/* <div className="apply-btn pt-7 pt-md-13">
                    <a className="btn btn-blue-3 btn-2 rounded-5" href="/#">
                      Apply for this job
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </PageWrapper>
    </>
  );
};
export default Privacypolicy;
