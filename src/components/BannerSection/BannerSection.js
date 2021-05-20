import React from "react";
import { Link } from "gatsby";
import backgroundImage from "../../assets/image/home-2/jpg/promo-bg-img.jpg";
import imgAS from "../../assets/image/home-6/png/app-store-img.png";
import imgPS from "../../assets/image/home-6/png/play-store-img.png";
const BannerSection = ({ className, bgurl, BannerTitle, BannerContent,BannerbtnText,  ...rest }) => {
  return (
    <>
      <div
        className={className}
        {...rest}
        style={{ backgroundImage: `url(${bgurl})`, backgroundRepeat: 'no-repeat' }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div
                className="text-center pt-25 pb-15 py-lg-25 dark-mode-texts"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <h2 className="font-size-11 mb-7">
                  {BannerTitle}
                </h2>
                <p className="BannerTitle line-height-28 px-md-10 px-lg-16 px-xl-25 mb-0">
                  {BannerContent}
                </p>
                <Link to={"#"} className="btn btn-banner-green rounded-5 mt-12">
                  {BannerbtnText}
                </Link>
              <div className="pt-6 pt-lg-9 col-lg-7 offset-xl-1 col-md-8 col-sm-10 m-auto">
              <div className="text-center text-lg-left">
                <div className="btn-group d-flex banner-store-infore align-items-center ">
                  <Link to="/#">
                    <img
                      className="w-sm-100 w-xl-auto max-h-64 mb-3 mb-lg-0 mx-auto mx-sm-3"
                      src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1620129434/l6-download-appstore-min_eqbhmm.png"
                      alt=""
                      data-aos="fade-up"
                      data-aos-delay={500}
                    />
                  </Link>
                  <Link to="/#">
                    <img
                      className="w-sm-100 w-xl-auto max-h-64 mb-3 mb-lg-0 mx-auto mx-sm-3"
                      src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1620129434/l6-download-gplay-min_yawhnz.png"
                      alt=""
                      data-aos="fade-up"
                      data-aos-delay={800}
                    />
                  </Link>
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

export default BannerSection;
