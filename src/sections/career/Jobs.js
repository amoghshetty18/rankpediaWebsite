import React from "react";
import JobCard2 from "../../components/JobCard2";

const items = [
  {
    image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1626324777/home-page/science_2_mde8xg.png",
    quiztime: "Full-time",
    // badgeColor: "#fff",
    quizname: "Senior UX Designer",
    quizlink: "https://quizizz.com/pro/join?gc=54183974"
  },
  {
    image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1626324777/home-page/science_2_mde8xg.png",
    quiztime: "Full-time",
    // badgeColor: "#fff",
    quizname: "Senior UX Designer",
    // quizlink: "https://quizizz.com/pro/join?gc=54183974"
  },{
    image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1626324777/home-page/science_2_mde8xg.png",
    quiztime: "Full-time",
    // badgeColor: "#fff",
    quizname: "Senior UX Designer",
    // quizlink: "https://quizizz.com/pro/join?gc=54183974"
  },{
    image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1626324777/home-page/science_2_mde8xg.png",
    quiztime: "Full-time",
    // badgeColor: "#fff",
    quizname: "Senior UX Designer",
    // quizlink: "https://quizizz.com/pro/join?gc=54183974"
  },{
    image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1626324777/home-page/science_2_mde8xg.png",
    quiztime: "Full-time",
    // badgeColor: "#fff",
    quizname: "Senior UX Designer",
    // quizlink: "https://quizizz.com/pro/join?gc=54183974"
  },{
    image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1626324777/home-page/science_2_mde8xg.png",
    quiztime: "Full-time",
    // badgeColor: "#fff",
    quizname: "Senior UX Designer",
    // quizlink: "https://quizizz.com/pro/join?gc=54183974"
  },{
    image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1626324777/home-page/science_2_mde8xg.png",
    quiztime: "Full-time",
    // badgeColor: "#fff",
    quizname: "Senior UX Designer",
    // quizlink: "https://quizizz.com/pro/join?gc=54183974"
  },{
    image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1626324777/home-page/science_2_mde8xg.png  ",
    quiztime: "Full-time",
    // badgeColor: "#fff",
    quizname: "Senior UX Designer",
    // quizlink: "https://quizizz.com/pro/join?gc=54183974"
  },
];

const Jobs = () => {
  return (
    <div className="bg-default-3 pt-12 pt-md-18 pb-md-19 pb-15 pt-lg-22 pb-lg-26">
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div
              className="text-center mb-7"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <h2 className="font-size-10 mb-7 letter-spacing-n83">
                Open roles
              </h2>
              <p className="font-size-6 font-weight-light mb-0 px-md-5 px-lg-0">
                These companies release their own versions of the operating
                systems with minor changes, and yet always.
              </p>
            </div>
          </div>
        </div>
        {/* career roles */}
        <div className="row mt-lg-9">
          {items.map((item, index) => (
            <div className="col-lg-4 col-md-6 mt-9"  key={index}>
              
              {/* <a
                href="/#"
                className="pt-9 pb-9 pl-11 pr-10 bg-white d-block rounded-0 shadow-2"
                data-aos="fade-up"
                data-aos-duration={900}
              > */}
                <JobCard2 options={item} data-aos="fade-up" />
              {/* </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
