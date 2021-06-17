import React from "react";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";

const Stats = () => {
  return (
    <div className="fact-section bg-default-4  pt-13 pt-lg-18 pb-7 pb-lg-17">
      <div className="container">
        <div className="row justify-content-center"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          {/* Single Counter */}
          <div className="col-lg-3 col-md-6 col-sm-6 mb-9 mb-lg-0">
            <div
              className="single-fact text-center px-md-9 px-lg-6 px-xl-11"
              // data-aos="fade-up"
              // data-aos-duration={300}
            >
              <h2 className="title mb-7 gr-text-3 abt-num">
                {/* <LazyLoad>
                  <span className="counter">
                    <CountUp duration={3} end={100} />+
                  </span>
                </LazyLoad> */}
                100+
              </h2>

              <p className="gr-text-8 mb-0 abt-pnm">
               Active Students
              </p>
            </div>
          </div>
          {/* End Single Counter */}
          {/* Single Counter */}
          <div className="col-lg-3 col-md-6 col-sm-6 mb-9 mb-lg-0">
            <div
              className="single-fact text-center px-md-9 px-lg-6 px-xl-11"
              // data-aos="fade-up"
              // data-aos-duration={600}
            >
              <h2 className="title mb-7 gr-text-3 abt-num">
                {/* <LazyLoad>
                  <span className="counter">
                    <CountUp duration={3} end={10} />
                  </span>
                  +
                </LazyLoad> */}
                10+
              </h2>
              <p className="gr-text-8 mb-0 abt-pnm">
               School Collaborations
              </p>
            </div>
          </div>
          {/* End Single Counter */}
          {/* Single Counter */}
          <div className="col-lg-3 col-md-6 col-sm-6 mb-9 mb-lg-0">
            <div
              className="single-fact text-center px-md-9 px-lg-6 px-xl-11"
              // data-aos="fade-up"
              // data-aos-duration={900}
            >
              <h3 className="title mb-7 gr-text-3 abt-num">
                {/* <LazyLoad>
                   <span className="counter">
                    <CountUp duration={3} end={40} />
                  </span> 
                  40+
                </LazyLoad> */}
              40+
              </h3>
              <p className="gr-text-8 mb-0 abt-pnm">
                Active Teachers
              </p>
            </div>
          </div>
          {/* End Single Counter */}
          {/* Single Counter */}
          <div className="col-lg-3 col-md-6 col-sm-6 mb-9 mb-lg-0">
            <div
              className="single-fact text-center px-md-9 px-lg-6 px-xl-11"
              // data-aos="fade-up"
              // data-aos-duration={1200}
            >
              <h2 className="title mb-7 gr-text-3 abt-num">
                {/* <LazyLoad> 
                  <span className="counter">
                    <CountUp duration={3} end={100} />
                  </span>
                  100+
                {/* </LazyLoad> */}
                100+
              </h2>
              <p className="gr-text-8 mb-0 abt-pnm">
                Learning Practices
              </p>
            </div>
          </div>
          {/* End Single Counter */}
        </div>
      </div>
    </div>
  );
};

export default Stats;
