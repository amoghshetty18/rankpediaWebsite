import React from "react";
import { Link } from "gatsby";

import imgBg from "../assets/image/inner-page/jpg/sign-in-right-img.jpg";

import PageWrapper from "../components/PageWrapper";

const Otp = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right test",
          headerLogoClassName: "mx-auto text-center",
          headerButton: (
            <>
          <a href="/login">   <button className="btn btn btn-blue-3 header-btn1 head-login">
                Login
              </button> </a> 

            
            </>
          ),
          footerStyle: "style3",
        }}
       
      >



        <div className="min-height-100vh d-flex align-items-center bg-default-3">
          <div className="container-fluid h-100">
            <div className="row no-gutters align-items-center justify-content-center h-100">
               {/* Right Image */}
               <div className="col-lg-8 col-md-10 min-height-lg-100vh login-img-lft">
                <div
                  className="bg-images min-h-107 min-height-100vh d-none d-lg-block"
                  css={`
                    background-image: url(${imgBg});
                  `}
                />
              </div>
              <div className="col-xl-4 col-lg-6 col-md-10">
                <div
                  className="pt-23 pt-md-17 pt-lg-18 pb-md-4 pb-lg-10 max-w-413 mx-auto"
                  data-aos="fade-up"
                  data-aos-duration={500}
                  data-aos-delay={500}
                >
                  <div className="mb-10">
                    <h2 className="mb-1 letter-spacing-n83 login-head">
                      Enter OTP
                    </h2>
                    <p className="login-para">
                      Please enter the otp you have received to
                    </p>
                    <p
                        className="otp-fnt mt-8 text-bali-gray"
                        data-aos="fade-up"
                        data-aos-duration={1100}
                        data-aos-delay={500}
                      >
                        <b className="otp-nmex">+91 9108286912</b>{" "}
                        <Link to="#" className="text-blue-3 ">
                          Change Number
                        </Link>
                      </p>
                  </div>
                  <form
                    action="/"
                    data-aos="fade-up"
                    data-aos-duration={800}
                    data-aos-delay={500}
                  >
                    {/* Email */}
                    <div className="form-group mb-6 position-relative">
                      <p className="login-mob">Enter OTP</p>
                      {/* <input
                        type="phone"
                        name="phone"
                        className="form-control form-control-lg bg-white text-placeholder-bali-gray pl-7 login-tptrp"
                        id="phone"
                      /> */}
                       <div class="position-relative">
        <div class=" text-center">
            <div id="otp" class="inputs2 d-flex flex-row justify-content-center mt-2"> <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" /> </div>
          
        </div>
    </div>
                    </div>

                   
                   
                    {/* Button */}
                    <div className="button1">
                      <a href="/" className="btn btn-blue-3  w-100 login-proceed">
                        Sign In
                      </a>
                      
                    </div>
                  </form>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Otp;
