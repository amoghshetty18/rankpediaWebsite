import React from 'react'
import { Link } from "gatsby";

const section1 = (props) => {
  return (
    <div className='row text-center gradelanding-main align-items-center'>
      {/* <div className="col">
        <h2 className=" banner-text font-size-11 mb-7"> NEP 2020 Compliant </h2>
        <h2 className=" banner-text font-size-11 mb-7"> [National Education Policy] </h2>
        <p className="BannerTitle line-height-28 px-md-10 px-lg-16 px-xl-25 mb-0 banner-text"> Learn how RankPedia is compliant with the country's new educational policies </p>
         <a href="#">  
          <button className="btn btn btn-blue-3 header-btn1 head-login">
            Learn More
          </button>
        </a> 
        <Link to={"#"} className="btn btn-banner-green rounded-5 mt-12">
                   Learn More
                </Link>
      </div> */}


      <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div
                className="text-center padforbnr dark-mode-texts"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <h2 className="font-size-10 mb-7 fnt-fmly">
                NEP 2020 Compliant 
                </h2>
                <h2 className="font-size-10 mb-7 fnt-fmly">
                [National Education Policy] 
                </h2>
                 <p className="BannerTitle line-height-28 px-md-10 px-lg-16 px-xl-25 mb-0 fnt-fmly">
                  Learn how RankPedia is compliant with the country's new educational policies 
                </p> 
                <Link to={"#"} className="btn btn-banner-green rounded-5 mt-12 fnt-fmly">
                Learn More
                </Link>
           
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default section1
