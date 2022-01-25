import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../../assets/image/home-1/png/analytics.png";
import img2 from "../../assets/image/home-1/png/business-agent.png";
import img3 from "../../assets/image/home-1/png/code.png";
import img4 from "../../assets/image/home-1/png/headphones-2.png";
import img5 from "../../assets/image/home-1/png/coins.png";
import img6 from "../../assets/image/home-1/png/drop.png";

import homesection1 from "../../assets/image/home/enagage.png";
import homesection2 from "../../assets/image/home/l6-content2-img.png";
import homesection3 from "../../assets/image/home/enrich.png";
import homesection4 from "../../assets/image/home/prepare.png";

import group1 from "../../assets/image/home/gallery1.png";
import group2 from "../../assets/image/home/gallery2.png";
import group3 from "../../assets/image/home/gallery3.png";
import group4 from "../../assets/image/home/gallery4.png";


import small1 from "../../assets/image/home/small1.png";
import small2 from "../../assets/image/home/small2.png";
import small3 from "../../assets/image/home/small3.png";
import small4 from "../../assets/image/home/small4.png";

import homebanner from "../../assets/image/home/banner.png";

const SliderStyled = styled(Slider)`
  .slick-slide div {
    &:focus {
      outline: nnone !important;
    }
  }
`;

const items = [
  {
    title: "Marketing",
    image: img1,
    jobs: 472,
  },
  {
    title: "Human Resource",
    image: img2,
    jobs: 172,
  },
  {
    title: "Developer",
    image: img3,
    jobs: 272,
  },
  {
    title: "Customer Support",
    image: img4,
    jobs: 2172,
  },
  {
    title: "Finance",
    image: img5,
    jobs: 422,
  },
  {
    title: "Design",
    image: img6,
    jobs: 222,
  },
];

const Section7 = ({ className, ...rest }) => {
  const elSlider = useRef();

  const slickSettings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    centerPadding: "28%",
    centerMode: true,
    slidesToShow: 3,
    arrows: false,
    className: "single-slide",

    responsive: [
      {
        breakpoint: 1800,
        settings: {
          centerPadding: "25%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1595,
        settings: {
          centerPadding: "15%",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1488,
        settings: {
          centerPadding: "10%",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1360,
        settings: {
          centerPadding: "16%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "12%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          centerPadding: "8%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          centerPadding: "8%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: "5%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 890,
        settings: {
          centerPadding: "18%",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 820,
        settings: {
          centerPadding: "15%",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 790,
        settings: {
          centerPadding: "30%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          centerPadding: "28%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 630,
        settings: {
          centerPadding: "26%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          centerPadding: "24%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          centerPadding: "22%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          centerPadding: "20%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "18%",
          slidesToShow: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          centerPadding: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 370,
        settings: {
          centerPadding: "0",
          slidesToShow: 1,
          autoplay: false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    // <>
    //   <div className={className} {...rest}>
       
    //   <section id="fourimg1">
    //   <div class="content-section fr-sct pb-22">
    //     <div class="container">
    //       <div class="row align-items-center justify-content-center">

    //         <div class="col-sm-10 col-lg-6">
    //           <div class="content-text">
    //             <h2 class="simpli-nono mb-7">Expertly curated question banks with over 100,000 questions</h2>
    //             <p class="clscls text-light">Gain a competitive edge in high school with our comprehensive question banks curated by Subject Matter Experts with years of experience in education.</p>
    //           </div>
    //         </div>
            
    //         <div class="col-sm-10 col-lg-6 mb-9 mb-lg-0">
    //           <div class="content-grid-image-group d-flex  mx-sm-n3">

    //             <div class="content-widget mt-7 mt-lg-0  pl-xl-19">
                  
                  
    //               <div class="row align-items-center">
    //                 <div class="col-md-6 col-lg-12 extr-clst" data-aos="fade-left" data-aos-duration="900" data-aos-once="true">
    //                   <div class="single-widget my-sps media">
                      
    //                     <div class="media-body">
    //                       <div class="col-md-12 innr flt-lft text-center expertly-curated-class">
                            
    //                           <div class="col-md-3 flt-lft mobwdts">
    //                             <a href="/grade8">
    //                               <p class="cltds">Class 8</p>
    //                             </a>
    //                           </div>
    //                           <div class="col-md-3 flt-lft mobwdts">
    //                             <a href="/grade8">
    //                               <p class="cltds">CBSE</p>
    //                             </a>
    //                           </div>                            
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div class="col-md-6 col-lg-12 extr-clst" data-aos="fade-left" data-aos-duration="900" data-aos-once="true">
    //                   <div class="single-widget my-sps media">
    //                     <div class="media-body">
    //                       <div class="col-md-12 innr flt-lft expertly-curated-class">
                            
    //                         <div class="col-md-3 flt-lft mobwdts">
    //                           <a href="/grade9">
    //                             <p class="cltds">Class 9</p>
    //                           </a>   
    //                         </div>
    //                         <div class="col-md-3 flt-lft mobwdts">
    //                           <a href="/grade9">
    //                             <p class="cltds">CBSE</p>
    //                           </a>                              
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div class="col-md-6 col-lg-12 extr-clst" data-aos="fade-left" data-aos-duration="900" data-aos-once="true">
    //                   <div class="single-widget my-sps media">
    //                     <div class="media-body">
    //                       <div class="col-md-12 innr flt-lft expertly-curated-class">
                            
    //                         <div class="col-md-3 flt-lft mobwdts">
    //                           <a href="/grade10">
    //                             <p class="cltds">Class 10</p>
    //                           </a>   
    //                         </div>
    //                         <div class="col-md-3 flt-lft mobwdts">
    //                           <a href="/grade10">
    //                             <p class="cltds">CBSE</p>
    //                           </a>                              
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
                    
    //               </div>




    //             </div>
             
               
    //           </div>
    //         </div>
          
    //       </div>
    //     </div>
    //   </div>
    // </section>
        
        
    //   </div>
    // </>
    <div 
      className="container py-5 my-5"
      style={{
        backgroundColor: "#fff"
      }}
    >
      <div className="row align-items-center">
        <h2 
          style={{
            fontWeight: 100
          }}
          className="section-2-heading-phone mx-auto text-center"
        >
          Best Learning Resources
        </h2>
        <div 
          className="col-md-6" 
          data-aos="flip-right" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <img 
            src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643104285/home-page/Best-Learning-Resources_1_rzvdfu.png" 
            alt="" 
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 
            style={{
              fontWeight: 100
            }}
            className="section-2-heading-desktop"
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          >
            Best Learning Resources
          </h2>
          <p>
            Our learner-friendly resources are crafted using advanced technology to help students understand concepts in the best way possible. Our interactive videos and student-centric evaluation materials have been created with the goal of keeping all students engaged in a continuous learning cycle. Through practical learning, we strive to provide students with opportunities to promote their abilities and skills to reach the ideal career pathway. 
          </p>
        </div>
      </div>

      <div className="row align-items-center">
        <h2 
          style={{
            fontWeight: 100
          }}
          className="section-2-heading-phone mx-auto text-center"
        >
          Interactive Learning 
        </h2>
        <div 
          className="col-md-6 order-md-last" 
          data-aos="flip-right" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <img 
            src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643104525/home-page/Continuing-Education_2_y531ld.png" 
            alt="" 
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 
            style={{
              fontWeight: 100
            }}
            className="section-2-heading-desktop"
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          >
            Interactive Learning 
          </h2>
          <p>
            Do not hesitate or block your mind when you are doubtful. Our team is available 24*7 to assist the students to improve their academic performance and progress through the learning process. Students have the provision of online doubt solving with the best teacher through live sessions.  
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section7;
