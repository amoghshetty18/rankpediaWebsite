import React from "react";
import { Link } from "gatsby";


import axios from 'axios'

import imgM from "../../assets/image/home-5/png/music-headphone.png";
import imgM2 from "../../assets/image/home-5/png/music-headphone-2.png";
import imgM3 from "../../assets/image/home-5/png/music-headphone-3.png";
import imgM4 from "../../assets/image/home-5/png/music-headphone-4.png";

import englishimg from "../../assets/image/home/english.png";
import ssimg from "../../assets/image/home/socialscience.png";
import hindiimg from "../../assets/image/home/hindi.png";

const MusicArea = ({ className, ...rest }) => {

  const downloadenglish=async (src)=>{
    const method="GET";
  //  const src="https://drive.google.com/file/d/17URn5YRbnfpcPq3N2gJzxGb4e0992Xd9/view?usp=sharing"
    const data=await axios.get(src,{
      responseType:'blob'
    })
    console.log(data.data);
    const downloadUrl = window.URL.createObjectURL(new Blob([data.data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', '10-English.zip'); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
  }

  const downloadmaths=async (src)=>{
    const method="GET";
  //  const src="https://drive.google.com/file/d/17URn5YRbnfpcPq3N2gJzxGb4e0992Xd9/view?usp=sharing"
    const data=await axios.get(src,{
      responseType:'blob'
    })
    console.log(data.data);
    const downloadUrl = window.URL.createObjectURL(new Blob([data.data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', '10-Maths.zip'); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
  }

  const downloadscience=async (src)=>{
    const method="GET";
  //  const src="https://drive.google.com/file/d/17URn5YRbnfpcPq3N2gJzxGb4e0992Xd9/view?usp=sharing"
    const data=await axios.get(src,{
      responseType:'blob'
    })
    console.log(data.data);
    const downloadUrl = window.URL.createObjectURL(new Blob([data.data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', '10-Science.zip'); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
  }

  const downloadss=async (src)=>{
    const method="GET";
  //  const src="https://drive.google.com/file/d/17URn5YRbnfpcPq3N2gJzxGb4e0992Xd9/view?usp=sharing"
    const data=await axios.get(src,{
      responseType:'blob'
    })
    console.log(data.data);
    const downloadUrl = window.URL.createObjectURL(new Blob([data.data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', '10-Socialstudies.zip'); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
  }

  const downloadhindi=async (src)=>{
    const method="GET";
  //  const src="https://drive.google.com/file/d/17URn5YRbnfpcPq3N2gJzxGb4e0992Xd9/view?usp=sharing"
    const data=await axios.get(src,{
      responseType:'blob'
    })
    console.log(data.data);
    const downloadUrl = window.URL.createObjectURL(new Blob([data.data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', '10-Hindi.zip'); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
  }


  return (
    <div className={className} {...rest}>
      <div className="container">
        {/* Section Title */}
        <div className="row ">
          <div className="col-md-7">
            <div
              className=" mb-lg-5"
              data-aos="zoom-in"
              data-aos-duration={500}
            >
              <h2 className="font-size-10 letter-spacing-n83 mb-6">
                CBSE - Grade 10 
              </h2>
              <p className="font-size-7 mb-0">
                Download the course structure to see the curriculum detail 
                listed with subjects, chapters & sub-topics 
              </p>
            </div>
          </div>
        </div>
        {/* End Section Title */}
        <div className="pt-13 pt-lg-16">
          <div className="row justify-content-center px-xl-0">
            {/* single card */}
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-xs-8">
              <div
                className="card-same rounded-15 text-center px-10 py-10 gr-hover-3 mb-9 border border-default-color"
                data-aos="zoom-in"
                data-aos-duration={300}
              >
                <div className="mb-10">
                <img className="intr-intr-omgs" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622811805/Group_135_w1rq0l.png"} alt="" />
                  <img className="wdts-mgdtr" src={englishimg} alt="" />
                </div>
                {/* <span className="badge bg-dodger-blue-1-op1 text-dodger-blue-1 rounded-40 px-5 py-2 line-height-reset min-w-63 font-size-5 d-inline-block mb-7">
                  $99
                </span> */}
                <h5 className="text-bunker font-size-7 line-height-reset mb-7 line-height-26">
                  English
                </h5>
                <p className="dwnlds-crts-str" onClick={()=>downloadenglish('/Grade10/NCERTBooks/English.zip')}>Download course structure</p>
                {/* <Link
                  to="/#"
                  className="btn btn-sunset rounded-5 min-w-144 h-55"
                >
                  Buy now
                </Link> */}
              </div>
            </div>
            {/* end single card */}
            {/* single card */}
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-xs-8">
              <div
                className="card-same rounded-15 text-center px-10 py-10 gr-hover-3 mb-9 border border-default-color"
                data-aos="zoom-in"
                data-aos-duration={600}
              >
                <div className="mb-10">
                <img className="intr-intr-omgs" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622811805/Group_135_w1rq0l.png"} alt="" />
                  <img className="wdts-mgdtr" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1623685507/maths-icon_eszouk.svg"} alt="" />
                </div>
                {/* <span className="badge bg-dodger-blue-1-op1 text-dodger-blue-1 rounded-40 px-5 py-2 line-height-reset min-w-63 font-size-5 d-inline-block mb-7">
                  $99
                </span> */}
                <h5 className="text-bunker font-size-7 line-height-reset mb-7 line-height-26">
                  Maths
                </h5>
                <p className="dwnlds-crts-str" onClick={()=>downloadmaths('/Grade10/NCERTBooks/Maths.zip')}>Download course structure</p>
                {/* <Link
                  to="/#"
                  className="btn btn-sunset rounded-5 min-w-144 h-55"
                >
                  Buy now
                </Link> */}
              </div>
            </div>
            {/* end single card */}
            {/* single card */}
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-xs-8">
              <div
                className="card-same rounded-15 text-center px-10 py-10 gr-hover-3 mb-9 border border-default-color"
                data-aos="zoom-in"
                data-aos-duration={900}
              >
                 <div className="mb-10">
                <img className="intr-intr-omgs" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622811805/Group_135_w1rq0l.png"} alt="" />
                  <img className="wdts-mgdtr" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622811954/Mask_Group_22_fj8tta.png"} alt="" />
                </div>
                {/* <span className="badge bg-dodger-blue-1-op1 text-dodger-blue-1 rounded-40 px-5 py-2 line-height-reset min-w-63 font-size-5 d-inline-block mb-7">
                  $99
                </span>  */}
               <h5 className="text-bunker font-size-7 line-height-reset mb-7 line-height-26">
                  Science
                </h5>
                <p className="dwnlds-crts-str" onClick={()=>downloadscience('/Grade10/NCERTBooks/Science.zip')}>Download course structure</p>
                 {/* <Link
                  to="/#"
                  className="btn btn-sunset rounded-5 min-w-144 h-55"
                >
                  Buy now
                </Link> */}
              </div>
            </div>  
            {/* end single card */}
            {/* single card */}
           <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-xs-8">
              <div
                className="card-same rounded-15 text-center px-10 py-10 gr-hover-3 mb-9 border border-default-color"
                data-aos="zoom-in"
                data-aos-duration={1200}
              >
                <div className="mb-10">
                <img className="intr-intr-omgs" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622811805/Group_135_w1rq0l.png"} alt="" />
                  <img className="wdts-mgdtr" src={ssimg} alt="" />
                </div>
                 {/* <span className="badge bg-dodger-blue-1-op1 text-dodger-blue-1 rounded-40 px-5 py-2 line-height-reset min-w-63 font-size-5 d-inline-block mb-7">
                  $99
                </span>  */}
                <h5 className="text-bunker font-size-7 line-height-reset mb-7 line-height-26">
                  Social Studies
                </h5>
                <p className="dwnlds-crts-str" onClick={()=>downloadss('/Grade10/NCERTBooks/Ss.zip')}>Download course structure</p>
                {/* <Link
                  to="/#"
                  className="btn btn-sunset rounded-5 min-w-144 h-55"
                >
                  Buy now
                </Link>  */}
              </div>
            </div> 
            {/* end single card */}
          </div>

          <div className="row  px-xl-0">
            {/* single card */}
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-xs-8">
              <div
                className="card-same rounded-15 text-center px-10 py-10 gr-hover-3 mb-9 border border-default-color"
                data-aos="zoom-in"
                data-aos-duration={300}
              >
                <div className="mb-10">
                <img className="intr-intr-omgs" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622811805/Group_135_w1rq0l.png"} alt="" />
                  <img className="wdts-mgdtr" src={hindiimg} alt="" />
                </div>
                {/* <span className="badge bg-dodger-blue-1-op1 text-dodger-blue-1 rounded-40 px-5 py-2 line-height-reset min-w-63 font-size-5 d-inline-block mb-7">
                  $99
                </span> */}
                <h5 className="text-bunker font-size-7 line-height-reset mb-7 line-height-26">
                  Hindi
                </h5>
                <p className="dwnlds-crts-str" onClick={()=>downloadhindi('/Grade10/NCERTBooks/Hindi.zip')}>Download course structure</p>
                {/* <Link
                  to="/#"
                  className="btn btn-sunset rounded-5 min-w-144 h-55"
                >
                  Buy now
                </Link> */}
              </div>
            </div>
            {/* end single card */}
            </div>

        </div>
      </div>
    </div>
  );
};

export default MusicArea;
