import React, { useContext } from "react";
import { Link } from "gatsby";
import Slider from "react-slick";
import GlobalContext from "../../context/GlobalContext";
import imgC from "../../assets/image/inner-page/png/video-bg.png";
import SolutinCard from "../../components/Solutioncard"
import RevisionCard from "../../components/RevisionCard";
import Banner from "../../components/BannerSection"
const items = [
    {
        bgimage:"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1623696143/physics-bg-image-min_ujhe4b.jpg",
        title: "Physics",
    },
    {
        bgimage:"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1623696143/chemistry-bg-img-min_ux9ynt.jpg",
        title: "Chemistry",
    },
    {
        bgimage:"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1623696143/Biology-bg-img-min_ii28zb.jpg",
        title: "Biology",
    },
    {
      bgimage:"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1624953877/algebra_urcldx.jpg",
      title: "Algebra",
  },
  {
      bgimage:"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1624954049/Geometry_qxm9gf.jpg",
      title: "Geometry",
  },
  {
    bgimage:"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1624954050/Trignometry_yp3g61.jpg",
    title: "Trignometry",
}
];
const solutioncard =[
    {
        
            title: "Engaging video-based learning"
    },
    {
        title: "Instant doubt clearance"
    },
    {
        title: "Study Materials"
    },
    {
        title: "Practice Tests"
    }
];
const TopicSection9 = ({BtnText,LinkTo}) => {
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
    <div className="pt-14 pt-md-0 pt-lg-15 pb-15 pb-md-18 pb-lg-15 mb-lg-1">
      <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-9">
                <div className="Heading-styling text-center mb-8 mb-lg-10">
                  <h2>
                  Class 9 CBSE - Online learning includes
                  </h2>
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
                        <a href="">
                            <div class="image-holder">
                                 <img src={bgimage} alt="" class="img-fluid" />
                                        </div> 
                                        <p className="grade-class-title">{title}</p>
                                        </a> 
                                    </div>
              </div>))}
                    
              </Slider>
              </div>
                     <div class="swiper-button-next"></div>
                     <div class="swiper-button-prev"></div>
              </div>
              {/* Solution card section */}
              <div className="row justify-content-center pt-15">
                {solutioncard.map(({  title, text }, index) => {
              return (
                <div className="col-lg-6 col-sm-6 col-xs-8 pb-lg-10">
                <RevisionCard  title={title} text={text} key={index} />
                </div>
              );
            })}
            </div>
            {/* <div className="row justify-content-center pt-10">
            <a href={LinkTo}>
        <button className="btn px-17 btn btn-banner-green  btn-read-more">
          {BtnText}
        </button>
      </a>
            </div> */}
                                {/* <!--<a class="btn-default"  data-wow-duration="1s" data-wow-delay=".1s" href="#">Find Your Path</a>--> */}
                </div>
      </div>
  );
};

export default TopicSection9;
