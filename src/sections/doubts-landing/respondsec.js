import React from "react";
import { Link } from 'gatsby';
import imageOne from "../../assets/image/home-4/png/content-2-img.png";

const ContentTwo = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
        <div className="pt-15 pb-10 pb-lg-15 pt-lg-25">
      <div className="container">
        <div className="row align-items-center justify-content-center">
         
          {/* Right Image */}
          <div className="pr-5 pl-10 col-xl-5 offset-xl-1 col-lg-5 col-md-8 col-xs-11 order-1 order-lg-1">
            <div
              className="l4-content-img-2 ml-lg-10 ml-xl-7 rounded-10 text-center"
              data-aos="fade-left"
              data-aos-duration={600}
              data-aos-delay={500}
              data-aos-once="true"
            >
              <img
                className="w-75 w-md-100"
                src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621520128/respond_banner-min_ondf4h.jpg"
                alt=""
              />
              <div class="respond-banner-img"  data-aos="fade-right"
              data-aos-duration={600}
              data-aos-delay={500}
              data-aos-once="true">
                  <img class="w-100" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621520067/Group_9_x1xbvq.png" alt=""/>
            </div>
              <div className="respond-notification image-card w-fit-content rounded-15 d-flex align-items-center shadow-10 p-8">
                <div className="mr-6 square-59 rounded-10 text-dodger-blue-1 font-size-7">
                  <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621521196/notificaton_kxum5y.png" alt="notification"/>
                </div>
                <div className="text-left">
                  
                  <p className="notification-title text-stone mb-0">
                    You’ve received a new notification
                  </p>
                  <h4 className="notification-content mb-0 line-height-26">
                    New Feature
                  </h4>
                </div>
              </div>
            </div>
          </div>
           <div className="col-xl-6 col-lg-7 col-md-9 order-2 order-lg-2 pr-lg-15 pl-lg-15">
            <div
              className="mt-13 mt-lg-0"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true"
            >
              <h2 className="font-size-10 mb-8 letter-spacing-n83">
              Who'd Respond & How Early They Can Help
              </h2>
              <p className="font-size-7 mb-0">
              Getting your doubts cleared in time is an important thing but getting them answered by an expert is even more critical. If you do not get detailed solutions logically, your difficulties will not be resolved and may increase further. 
              <br/>
              Doubt-clearing is one of the most imperative parts of our teaching strategy. That's why we have a dedicated team of subject-matter experts to look into your doubts and answer them quickly. 
              <br/>
              Be it the most basic or the advanced questions, you can ask them on our online doubt-solving platform anytime. The experts who will be answering your questions have decades of teaching experience and know-how to make complex questions simpler for students. 
              <br/>
              Just send your questions, and the experts will respond to every doubt within 30 minutes. This way, resolve queries faster, with emphasis on delivering concept clarity.

              </p>
            </div>
          </div>
          {/* End Right Image */}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContentTwo;
