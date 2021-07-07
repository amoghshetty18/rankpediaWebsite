import React from "react";
import { Link } from "gatsby";

import imgLB from "../../assets/image/logo-main-black.png";
import imgLW from "../../assets/image/logo-main-white.png";
import imgFS from "../../assets/image/inner-page/png/yellow-footer-shape.png";

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div
        className={` position-relative footerstyling ${className}`}
        {...rest}
      >
         <div class="footer-section dark-mode-texts ">
      <div class="container">
        <div class="footer-top pt-15 pt-lg-25 pb-lg-19">
          <div class="row">
            <div class="col-6 col-lg-2">
              <div class="single-footer mb-13 mb-lg-9">
                <p class="footer-title gr-text-11 mb-7">Company</p>
                <ul class="footer-list list-unstyled">
                  <li class="py-2"><a class="gr-text-9 gr-text-color" href="/about"  >About Us</a></li>
                  <li class="py-2"><a class="gr-text-9 gr-text-color" href="/why-rankpedia"  >Why Rankpedia</a></li>
                  {/* <li class="py-2"><a class="gr-text-9 gr-text-color" href="">Class/Courses</a></li>
                  <li class="py-2"><a class="gr-text-9 gr-text-color" href="">Study Material</a></li> */}
                  <li class="py-2"><a class="gr-text-9 gr-text-color" href="https://medium.com/rankpedia">Blog</a></li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-lg-2">
              <div class="single-footer mb-13 mb-lg-9">
                <p class="footer-title gr-text-11 mb-7">Product</p>
                <ul class="footer-list list-unstyled">
                  <li class="py-2"><a class="gr-text-9 gr-text-color" href="/">For Students</a></li>
                  <li class="py-2"><a class="gr-text-9 gr-text-color" href="/mentors-landing">For Teachers</a></li>
                  <li class="py-2"><a class="gr-text-9 gr-text-color" href="/for-schools">For Schools</a></li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-lg-2">
              <div class="single-footer mb-13 mb-lg-9">
                <p class="footer-title gr-text-11 mb-7">Support</p>
                <ul class="footer-list list-unstyled">
                  <li class="py-2"><a class="gr-text-9 gr-text-color" href="/contact">Contact Us</a></li>
                  {/* <li class="py-2"><a class="gr-text-9 gr-text-color" href="">Help Desk</a></li> */}
                  <li class="py-2"><a class="gr-text-9 gr-text-color" href="/faq">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-lg-2">
              <div class="single-footer mb-13 mb-lg-9">
                <p class="footer-title gr-text-11 mb-7">Terms & Conditions</p>
                <ul class="footer-list list-unstyled">
                  <li class="py-2"><a class="gr-text-9 gr-text-color" href="/privacy-policy">Privacy Policy</a></li>
                  <li class="py-2"><a class="gr-text-9 gr-text-color" href="/course-policy">Course Policy</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 txt-rgty">
              <div class="single-footer mb-13 mb-lg-9 footerrightsection">
                {/* <p class="footer-title gr-text-11 mb-7">Download Our App from</p> */}
                <p class="footer-title gr-text-11 mb-7"> Coming Soon</p>
                {/* <!-- <ul class="footer-list list-unstyled">
                  <li class="py-2"><a class="gr-text-9 text-primary font-weight-bold hover-underline active text-white" href="mailto:support@grayic.com">support@grayic.com</a></li>
                  <li class="py-2"><a class="gr-text-9 text-primary font-weight-bold hover-underline active text-white" href="tel:+133-394-3439-1435">+133-394-3439-1435</a></li>
                </ul> --> */}
                <div className="border-top border-default-color-4 pt-10">
                    <div className="mb-3">
                      <img className="w-auto" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1620129434/l6-download-appstore-min_eqbhmm.png" alt="" />
                    </div>
                    <div className="mb-3">
                      <img className="w-auto" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1620129434/l6-download-gplay-min_yawhnz.png" alt="" />
                    </div>
                  </div>
                {/* <div class="download-btns">
                  <a href="#"><img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1620129434/l6-download-appstore-min_eqbhmm.png" alt="" class="mb-5  w-xs-auto"/></a>
                  <a href="#"><img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1620129434/l6-download-gplay-min_yawhnz.png" alt="" class=" w-xs-auto"/></a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area border-top pt-9 pb-8">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <p class="copyright-text gr-text-11 mb-6 mb-lg-0 gr-text-color-opacity text-center text-lg-left">
                {/* © 2021 Copyright, All Right Reserved */}
                2021 Rankpedia, All Rights Reserved
              </p>
            </div>
            <div class="col-lg-6 text-center text-lg-right">
              <ul class="social-icons list-unstyled mb-0">
                <li class="ml-7"><a href="https://www.facebook.com/RankPedia-110504914518895" class="gr-text-color"><i class="icon icon-logo-facebook"></i></a></li>
                <li class="ml-7"><a href="https://www.linkedin.com/company/rankpediaedutech" class="gr-text-color"><i class="icon icon-logo-linkedin"></i></a></li>
                <li class="ml-7"><a href="https://twitter.com/Rankpedia_" class="gr-text-color"><i class="icon icon-logo-twitter"></i></a></li>
                <li class="ml-7"><a href="https://www.instagram.com/official_rankpedia/" class="gr-text-color"><i class="icon icon-logo-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* <div className="footer-yellow-shape-img">
          <img src={imgFS} alt="" />
        </div> */}
      </div>
    </>
  );
};

export default Footer;
