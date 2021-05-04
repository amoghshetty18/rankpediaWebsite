import React from "react";


const TeamCard = ({ image, name, position, ...rest }) => {
  return (
    <>
      {/* Single Team */}
      <div className="text-center mb-10 mb-lg-15">
        <div className=" rounded-10">
          <img className="" src={image} alt="" />
        </div>
        <div className="content teaminfostyling">
          <h4 className="membername mb-1">{name}</h4>
          <p className="memberposition font-weight-normal mb-0 pt-5">{position}</p>
        </div>
      </div>
      {/* Single Team */}
    </>
  );
};
const OurTeam = ({ className, ...rest }) => {
  const TeamData = [
    {
      image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1620113262/whatever-happens-im-ready-to-face-it-min_idzndn.jpg",
      name: "Joe Bridges",
      position: "Founder",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1620113262/well-im-not-in-the-mood-for-any-jokes-today-min_iovlqc.jpg",
      name: "Jeffrey Walters",
      position: "Cheif Executive Officer",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1620113262/ready-for-a-date-min_zf3muw.jpg",
      name: "Jason Reed",
      position: "Chief Technology Officer",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1620112738/looking-at-the-day-ahead-min_kflluf.jpg",
      name: "Nellie Padilla",
      position: "Creative Director",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1620112737/happiness-good-whiskey-a-good-cigar-and-a-great-conversation-min_asulpx.jpg",
      name: "Dean Bell",
      position: "Lead Programmer",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
      image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1620113262/gonna-marry-a-woman-of-my-life-min_ohlfrh.jpg",
      name: "Pearl Brooks",
      position: "Digital Marketer",
      animation: {
        animationName: "fade-up",
        delay: 300,
        duration: null,
      },
    },
    {
        image: "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1620112686/thoughtful-handsome-young-man-min_bwjsrj.jpg",
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
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="text-center mb-12 mb-lg-19">
              <h2 className="Ourteamheading mb-8 Ourteamheading">
                Team Behind Our Success
              </h2>
              <p className="OurteamContent pl-8 pr-8 pl-lg-35 pr-lg-35">Sed ut perspiciatis unde omnis iste natllus sle un teudesedomnis iste n
atll u ssimeed ut perspictis mni omnis isomnis isomnis is</p>
            </div>
          </div>
        </div>
        {/* section title */}
        <div className="row"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          {TeamData.map(({ image, name, position }, index) => {
            return (
              <div className="col-lg-3 col-sm-6 col-xs-8 team-section" key={index}>
                <TeamCard image={image} name={name} position={position} />
              </div>
            );
          })}
        </div>
       
      </div>
    </div>
  );
};

export default OurTeam;

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
