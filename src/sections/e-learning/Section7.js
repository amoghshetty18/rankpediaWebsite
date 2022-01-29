import React, { useContext } from "react";
import Slider from "react-slick";
const items = [
  {
    bgimage:
      "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1623696143/physics-bg-image-min_ujhe4b.jpg",
    title: "CBSE",
  },
  {
    bgimage:
      "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1623696143/chemistry-bg-img-min_ux9ynt.jpg",
    title: "ANDHRA PRADESH BOARD EDUCATION",
  },
  {
    bgimage:
      "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1623696143/Biology-bg-img-min_ii28zb.jpg",
    title: "MAHARASHTRA BOARD OF EDUCATION",
  },
  {
    bgimage:
      "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1624953877/algebra_urcldx.jpg",
    title: "KARNATAKA BOARD OF EDUCATION",
  },
];
const solutioncard = [
  {
    title: "Engaging Video-based Learning",
  },
  {
    title: "Instant Doubt Clearance",
  },
  {
    title: "Study Materials",
  },
  {
    title: "Practice Tests",
  },
];
const TopicSection = ({ BtnText, LinkTo }) => {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          centerPadding: "2%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-7 pt-md-0 pt-lg-7 pb-7 pb-md-9 pb-lg-7 mb-lg-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="Heading-styling text-center mb-4 mb-lg-5">
              <h2>Indian Boards We Offer in the Current Academic Year </h2>
            </div>
          </div>
        </div>
        <div class="interest-explore-inner">
          <div>
            <Slider
              {...slickSettings}
              css={`
                .slick-slide {
                  margin: 0 1rem;
                }
                .slick-dots {
                  display: flex !important;
                }
              `}
              className="l6-testimonial"
            >
              {items.map(({ link = "/#", title, bgimage }, index) => (
                <div className="revison-section-content" key={index}>
                  <div class="col-md-12">
                    {/* <a href="#"> */}
                    <div class="image-holder">
                      <img src={bgimage} alt="" class="img-fluid" />
                    </div>
                    <p className="grade-class-title">{title}</p>
                    {/* </a>  */}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  );
};

export default TopicSection;
