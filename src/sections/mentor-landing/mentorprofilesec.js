import React from "react";

import ExpertProfileCrd from "../../components/ExpertProfile";

const mentorprofilesec = ({ className, ...rest }) => {
  const TeamData = [
    {
      image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621585739/expertprofile-1-min_m71g2a.jpg",
      name: "Joe Bridges",
      position: "Founder",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621585740/exprt-profile-2-min_uyep1v.jpg",
      name: "Jeffrey Walters",
      position: "Cheif Executive Officer",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621585740/export_profile_3-min_yl4n9t.jpg",
      name: "Jason Reed",
      position: "Chief Technology Officer",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621585740/export_profile_4-min_xmqrwd.jpg",
      name: "Nellie Padilla",
      position: "Creative Director",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621585739/export-profile-4-min_egdsnl.jpg",
      name: "Dean Bell",
      position: "Lead Programmer",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621585740/export-profile6-min_nu7lly.jpg",
      name: "Pearl Brooks",
      position: "Digital Marketer",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
        image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621585740/exportprofile-7-min_r2txjn.jpg",
        name: "Isaiah Griffin",
        position: "UX Designer",
        animation: {
          animationName: "fade-up",
          delay: 300,
          duration: null,
        },
      },
      {
        image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621585740/export_profile_8-min_z8g9gg.jpg",
        name: "Isaiah Griffin",
        position: "UX Designer",
        animation: {
          animationName: "fade-up",
          delay: 300,
          duration: null,
        },
      },
  ];
  return (
    <div className={className} {...rest}>
      <div className="pt-15 pt-lg-15">
      <div className="container">
        <div className="row"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          {TeamData.map(({ image, name, position }, index) => {
            return (
              <div className="col-lg-3 col-sm-6 col-sm-12" key={index}>
                <ExpertProfileCrd image={image} name={name} position={position} />
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
};

export default mentorprofilesec;

// {
//   /* Single Team */
// }
// <div className="col-lg-4 col-sm-6 col-xs-8">
//   <div
//     className="text-center mb-10 mb-lg-15"
//     data-aos="fade-up"
//     data-aos-delay={500}
//     data-aos-once="true"
//   >
//     <div className="mb-8 rounded-10">
//       <img
//         className="w-100 w-md-auto"
//         src="./image/home-4/png/team-2.png"
//         alt=""
//       />
//     </div>
//     <div className="content">
//       <h4 className="font-size-7 mb-1">Raymond Baker</h4>
//       <p className="font-size-5 font-weight-normal mb-0">Content writer</p>
//     </div>
//   </div>
// </div>;
// {
//   /* Single Team */
// }
// {
//   /* Single Team */
// }
// <div className="col-lg-4 col-sm-6 col-xs-8">
//   <div
//     className="text-center mb-10 mb-lg-15"
//     data-aos="fade-up"
//     data-aos-delay={800}
//     data-aos-once="true"
//   >
//     <div className="mb-8 rounded-10">
//       <img
//         className="w-100 w-md-auto"
//         src="./image/home-4/png/team-3.png"
//         alt=""
//       />
//     </div>
//     <div className="content">
//       <h4 className="font-size-7 mb-1">Amy sanderson</h4>
//       <p className="font-size-5 font-weight-normal mb-0">UX Designer</p>
//     </div>
//   </div>
// </div>;
// {
//   /* Single Team */
// }
// {
//   /* Single Team */
// }
// <div className="col-lg-4 col-sm-6 col-xs-8">
//   <div
//     className="text-center mb-10 mb-lg-15"
//     data-aos="fade-up"
//     data-aos-delay={300}
//     data-aos-once="true"
//   >
//     <div className="mb-8 rounded-10">
//       <img
//         className="w-100 w-md-auto"
//         src="./image/home-4/png/team-4.png"
//         alt=""
//       />
//     </div>
//     <div className="content">
//       <h4 className="font-size-7 mb-1">Ryan kingsley</h4>
//       <p className="font-size-5 font-weight-normal mb-0">Software engineer</p>
//     </div>
//   </div>
// </div>;
// {
//   /* Single Team */
// }
// {
//   /* Single Team */
// }
// <div className="col-lg-4 col-sm-6 col-xs-8">
//   <div
//     className="text-center mb-10 mb-lg-15"
//     data-aos="fade-up"
//     data-aos-delay={500}
//     data-aos-once="true"
//   >
//     <div className="mb-8 rounded-10">
//       <img
//         className="w-100 w-md-auto"
//         src="./image/home-4/png/team-5.png"
//         alt=""
//       />
//     </div>
//     <div className="content">
//       <h4 className="font-size-7 mb-1">Jane Austen</h4>
//       <p className="font-size-5 font-weight-normal mb-0">HR &amp; Support</p>
//     </div>
//   </div>
// </div>;
// {
//   /* Single Team */
// }
// {
//   /* Single Team */
// }
// <div className="col-lg-4 col-sm-6 col-xs-8">
//   <div
//     className="text-center mb-10 mb-lg-15"
//     data-aos="fade-up"
//     data-aos-delay={800}
//     data-aos-once="true"
//   >
//     <div className="mb-8 rounded-10">
//       <img
//         className="w-100 w-md-auto"
//         src="./image/home-4/png/team-6.png"
//         alt=""
//       />
//     </div>
//     <div className="content">
//       <h4 className="font-size-7 mb-1">Trevor Flemming</h4>
//       <p className="font-size-5 font-weight-normal mb-0">Founder &amp; CEO</p>
//     </div>
//   </div>
// </div>;
// {
//   /* Single Team */
// }
