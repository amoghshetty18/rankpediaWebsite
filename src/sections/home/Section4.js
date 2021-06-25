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

import imgM from "../../assets/image/home-6/png/practicetest-2.png";
import imgG from "../../assets/image/home-6/png/green-dot-pattern.png";

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

const Section4 = ({ className, ...rest }) => {
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
    <>
      <div className={className} {...rest}>
       
      <div class="content-section  pt-25 pb-35 bg-default-4" id="heth">
      <div class="container">
        <div class="row align-items-center pt-20">
          <div class="col-lg-6" data-aos="flip-right" data-aos-duration="1000" data-aos-once="true">
            {/* <div class="content-img sxrty">
            <img src={ homesection3 } alt="" />
            </div> */}

        

            <div className="content-img ">
            <div className="l6-content-image-group-2-new">
              <div className="img-1">
                <img
                  className=""
                  src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621250871/Group_101_pqsme8.png"}
                  alt=""
                  data-aos="fade-down"
                  data-aos-delay={800}
                />
              </div>
              <div className="img-2">
                <img
                  className="ltrdtyu"
                  src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621251206/Image_jiq2mb.png"}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={500}
                />
              </div>
            </div>
          </div>


          </div>
          <div class="col-10 col-lg-6 imgs-imt">
            <div class="section-title content-text mb-13" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
              <h2 class="title gr-text-3 mb-10 mt-0 engag" id="engngnt-yrsrt">Engaging Videos</h2>
              <p class="gr-text-8 clscls">We provide a diverse field of videos ranging from biology and chemistry to physics and maths. You will get 2D and 3D animations in our videos with consistent expert guidance from the subject specialist. These engaging videos will mould you into an achiever. </p>
              {/* <a href="#" class="btn btn-red mx-auto gtstrdr">Study Materials</a> */}
            </div>
            <div class="content-widget">
              <div class="row">
                
              </div>
            </div>
          </div>
        </div>

        {/* <div class="row align-items-center justify-content-center">
            
            <div class="col-10 col-lg-6 col-xl-6 pr-xl-13 order-lg-1 formob">
              <div class="section-title content-text mb-13" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
                <h2 class="title gr-text-3 mb-6 engag">Doubt solving</h2>
                <p class="gr-text-8 clscls">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                 <a href="#" class="btn btn-red mx-auto gtstrdr">Learn more</a>
              </div>
              <div class="content-widget">
                <div class="row mb-n9">
                 
                </div>
              </div>
            </div>

            <div class="col-lg-6 order-lg-2 extclt" data-aos="flip-right" data-aos-duration="2000" data-aos-once="true">
              <div class="content-img text-right">
              
              <div className="l6-content-image-group-2-new">
              <div className="img-1">
                <img
                  className=""
                  src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621250871/Group_101_pqsme8.png"}
                  alt=""
                  data-aos="fade-down"
                  data-aos-delay={800}
                />
              </div>
              <div className="img-2">
                <img
                  className="ltrdtyu"
                  src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621255964/My_doubts_2x_bv1kp4.png"}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={500}
                />
              </div>
            </div>
              
              </div>
            </div>


          </div> */}



<div class="row align-items-center justify-content-center mt-30">

<div class="col-10 col-lg-6 col-xl-6 pr-xl-13 order-lg-1 mt-30 formob" id="slhlkjvn">
  <div class="section-title content-text mb-13" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
    <h2 class="title gr-text-3 mb-6 engag">Doubt-solving Sessions</h2>
    <p class="gr-text-8 clscls">
    If your mind is flooded by doubts regarding any chapter, then the solutions to all your doubts are just a click away. Send all your doubts to the most approachable teachers and get them cleared within 24 hours to master every concept and get a clear vision of the video.</p>
      {/* <a href="#" class="btn btn-red mx-auto gtstrdr">Learn More</a> */}
  </div>
  <div class="content-widget">
    <div class="row mb-n9">
     
    </div>
  </div>
</div>

<div class="col-lg-6 order-lg-2 rd-bhr" id="fnct-hanst" data-aos="flip-right" data-aos-duration="2000" data-aos-once="true">
  <div class="content-img text-right">
  
  
  <div className="l6-content-image-group-4-new">
              <div className="img-1">
                <img
                  className=""
                  src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621256211/Rectangle_jns94x.png"}
                  alt=""
                  data-aos="fade-down"
                  data-aos-delay={800}
                />
              </div>
              <div className="img-2">
                <img
                  className=""
                  src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621255964/My_doubts_2x_bv1kp4.png"}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={500}
                />
              </div>
            </div>
  
  
  </div>
</div>

</div>


      </div>
    </div>
        
        
      </div>
    </>
  );
};

export default Section4;
