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

const Ready = ({ className, ...rest }) => {
  

  return (
    <>
      <div className={className} {...rest}>
      {/* <div class="position-relative bg-default-2 bg-pattern pattern-2 pdr-sct pb-sm-5">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-9 col-md-7 col-lg-5 offset-xl-1  order-lg-2">
            <div class="hero-img position-relative flt-rgthr" id="at-dns-btms" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
              <div class="hero-btn">
                <a href="#" class="btn btn-red mx-auto gtstrdr mrgrt">Contact us</a>
              </div>
            </div>
          </div>
          <div class="col-11 col-md-9 col-lg-7 col-xl-6 order-lg-1" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
            <div class="hero-content mt-11 mt-lg-0">
              <h1 class="title gr-text-2 mb-8 rdstr">All set to gear up!</h1>
              <p class="gr-text-8 mb-11 pr-md-12 gtrsngtr">To dive deeper into the world of Rankpedia, tap on the 'Contact us' and our team will reach out to you the earliest.</p>
            </div>
          </div>
        </div>
      </div>
    </div>      */}

<div class="position-relative bg-default-2 bg-pattern pattern-2 pdr-sct">
       <div class="container">
         <div class="row justify-content-center align-items-center">
          
           <div class="col-lg-8 order-lg-1" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
             <div class="hero-content mt-11 mt-lg-0">
               <h1 class="title gr-text-2 mb-6 mt-6 rdstr" id="amhver">All set to gear up!</h1>
               <p class="gr-text-8 mb-11 pr-md-12 clscls">To dive deeper into the world of RankPedia, tap on 'Contact Us' and our team will reach out to you at the earliest.</p>
             </div>
           </div>
           <div class="col-10 col-lg-4  order-lg-2">
             <div class="hero-img position-relative flt-rgthr" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
               <div class="hero-btn" >
                 <a href="#" class="btn btn-red mx-auto gtstrdr mrgrt" id="hmgst-cntrd">Contact Us</a>
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

export default Ready;
