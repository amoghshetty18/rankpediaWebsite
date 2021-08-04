import React, { useRef, Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Slider from "react-slick";
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Thumbs, Mousewheel, Parallax } from 'swiper';
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../../assets/image/home-1/png/analytics.png";
import img2 from "../../assets/image/home-1/png/business-agent.png";
import img3 from "../../assets/image/home-1/png/code.png";
import img4 from "../../assets/image/home-1/png/headphones-2.png";
import img5 from "../../assets/image/home-1/png/coins.png";
import img6 from "../../assets/image/home-1/png/drop.png";
// import InformationCrad from "../../components/Cur"
const SliderStyled = styled(Slider)`
  .slick-slide div {
    &:focus {
      outline: nnone !important;
    }
  }
`;

const items = [
    {
        icon: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622811954/Mask_Group_22_fj8tta.png",
        title: "Physics",
        content:
          "Explanations, derivations, numerical questions",
          color:"#E5F5FF"
      },
      {
        icon: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1623685507/maths-icon_eszouk.svg",
        title: "Maths",
        content:
          "Step-wise solutions with tests",
          color: "#F5F5D4"
      },
      {
        icon: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1623687175/geography-icon_mwtvsn.svg",
        title: "Geography",
        content:
          "Tricks to revise maps and names",
          color:"#E5F5FF"
      },
      {
        icon: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1623685507/maths-icon_eszouk.svg",
        title: "English",
        content:
          "Tricks to revise maps and names",
          color: "#F5DEDE"
      }
];

const RevisionSection10 = ({ className, ...rest }) => {
    
        const swiper = new Swiper('.revision-swiper', {
            slidesPerView:2,
            spaceBetween: 5,
            autoplay: true,
            // direction: 'vertical',
            speed: 300,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView:1,
                    spaceBetween: 20,
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                // when window width is >= 480px
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                // when window width is >= 640px
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }
        });
  const elSlider = useRef();

  const slickSettings = {
    dots: false,
    // arrows:true,
    autoplay: false,
    infinite: true,
    speed: 500,
    centerPadding: "5%",
    // centerMode: true,
    slidesToShow: 3,
    arrows: false,
    className: "single-slide",

    responsive: [
      {
        breakpoint: 1800,
        settings: {
        //   centerPadding: "15%",
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
        <div className="Revision-Section pt-20 pb-15">
        <Container>
        {/* </Container> */}
        <div className="col-xl-8 col-lg-9 pb-15">
            <h5 className="Revison-title text-center pb-sm-10 p-lg-0">Get engaging video tutorials & revision material</h5>
            {/* <Link to="/#" className="btn btn-banner-green rounded-5 fnt-fmly pr-10 pl-10">
                  Download Study material
            </Link> */}
        </div>
        <div
          className="category-one"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <SliderStyled ref={elSlider} {...slickSettings}>
            {items.map(({ link = "/#", title, color, content, icon }, index) => (
              <div className="row col-sm-12 revison-section-content" key={index}>
                <Link
                  href={link}
                  className="single-category  mx-lg-4 focus-reset slick-slide"
                  tabIndex="-1"
                >
                    {/* <InformationCrad options={items} /> */}
                    <div
                className="card-same rounded-15 text-center px-10 pt-10 gr-hover-3 mb-9 border border-default-color grade-landing-subject-card"
                data-aos="zoom-in"
                data-aos-duration={600}
              >
                <div className="mb-10">
                <img className="intr-intr-omgs" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1623687054/revison-note_xhor4e.svg"} alt="" />
                  <img className="wdts-mgdtr" src={icon} alt="" />
                </div>
                {/* <span className="badge bg-dodger-blue-1-op1 text-dodger-blue-1 rounded-40 px-5 py-2 line-height-reset min-w-63 font-size-5 d-inline-block mb-7">
                  $99
                </span> */}
                <div className="mb-10">
                <h5 className="text-bunker font-size-7 line-height-reset mb-7 line-height-26">
                  {title}
                </h5>
                <p className="dwnlds-crts-str">{content}</p>
                </div>
                {/* <Link
                  to="/#"
                  className="btn btn-sunset rounded-5 min-w-144 h-55"
                >
                  Buy now
                </Link> */}
              </div>
                </Link>
              </div>
            ))}
          </SliderStyled>
        </div>
        </Container>
        </div>
      </div>
    </>
  );
};

export default RevisionSection10;
