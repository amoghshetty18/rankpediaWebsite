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

const Section6 = ({ className, ...rest }) => {
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
       
    //   <section id="fourimg">
    //   <div class="content-section fr-sct">
    //     <div class="container">
    //       <div class="row align-items-center justify-content-center">

    //         <div class="col-sm-10 col-lg-6">
    //           <div class="content-text">
    //             <h2 class="engag mb-7">Building an Ecosystem for Students, Teachers, and Parents</h2>
    //             <p class="clscls" id="cm-ash-acmash">Join this <b>educational portal </b> covering CBSE and NCERT curriculum, an insightful environment created by schools and teachers focusing on comprehensive learning to help you fulfill your dreams.</p>
    //           </div>
    //         </div>
            
    //         <div class="col-sm-10 col-lg-6 mb-9 mb-lg-0 mstlylst">
    //           <div class="content-grid-image-group d-flex  mx-sm-n3">
    //             <div class="single-image d-flex flex-column pt-11 px-3 px-sm-6">
    //             <img src={ "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625509187/gallery1-99f71ca0b8b3c2a9f7174d02efcca499-min_kgp8kq.png" } alt=""  data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400" data-aos-once="true" class=" pb-6 pb-sm-9" />
    //             <img src={ "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625509422/gallery2-430795fe3b7f2c93f36ec5d18c3dfaad-min_uhx2dg.png" } alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000" data-aos-once="true" class=" pb-6" />
                 
    //             </div>
    //             <div class="single-image d-flex flex-column  px-3 px-sm-6">
    //             <img src={ "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625509335/gallery3-e98e88dee569a3f52f717c314c373c98-min_zoaa3s.png" } alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400" data-aos-once="true" class=" pb-6 pb-sm-9" />
    //             <img src={ "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625509488/gallery4-b3f2355127cd69b57de82e1333c09c7a-min_bikxxu.png" } alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000" data-aos-once="true" class=" pb-6" />
                  
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
          className="section-2-heading-phone mx-auto"
        >
          Teaching Methodology We Implement
        </h2>
        <div 
          className="col-md-6" 
          data-aos="flip-right" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <img 
            src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643103621/home-page/Teaching_Methodology_We_Implement_1_mccqyc.png" 
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
            Teaching Methodology We Implement
          </h2>
          <p>
            We have adopted the best teaching methodologies by incorporating the latest technologies to help the students in their learning journey. This enables students to learn the concepts easily and comprehensively.
          </p>
        </div>
      </div>

      <div className="row align-items-center">
        <h2 
          style={{
            fontWeight: 100
          }}
          className="section-2-heading-phone mx-auto"
        >
          Our Futuristic Approach
        </h2>
        <div 
          className="col-md-6 order-md-last" 
          data-aos="flip-right" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <img 
            src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643103883/home-page/NEP-2020_1_cnc4le.png" 
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
            Our Futuristic Approach
          </h2>
          <p>
            We have adopted all the best practices mentioned in the National Education Policy 2020 to help the children in their holistic development. The curriculum has been reduced to the core essentials and the teaching methodologies foster inquiry-based learning and analysis-based learning methodologies build the analytical skills of the students. In alignment with NEP, we emphasize providing holistic education to every child, which promotes outcome-based experiential learning that enhances the analytical and vocational skills of the students. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section6;
