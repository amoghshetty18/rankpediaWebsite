import React from "react";
import DownloadLink from "react-download-link";
import { Link } from "gatsby";

import axios from 'axios'

import imgM from "../../assets/image/home-5/png/music-headphone.png";
import imgM2 from "../../assets/image/home-5/png/music-headphone-2.png";
import imgM3 from "../../assets/image/home-5/png/music-headphone-3.png";
import imgM4 from "../../assets/image/home-5/png/music-headphone-4.png";

const getDataFromURL = async (url) => {
   
  const fi=await axios.get(url,{
      responseType: 'blob',
    })
    // const downloadUrl = window.URL.createObjectURL(new Blob([data]));

    //     const link = document.createElement('a');

    //     link.href = downloadUrl;

    //     link.setAttribute('download', 'file.zip'); //any other extension

    //     document.body.appendChild(link);

    //     link.click();

    //     link.remove();

}
const MusicArea = ({ className, ...rest }) => {

  const download=async (src)=>{
    const method="GET";
  //  const src="https://drive.google.com/file/d/17URn5YRbnfpcPq3N2gJzxGb4e0992Xd9/view?usp=sharing"
    const data=await axios.get(src,{
      responseType:'blob'
    })
    console.log(data.data);
    const downloadUrl = window.URL.createObjectURL(new Blob([data.data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', '8-maths1-v1.zip'); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
  }

  const download1=async (src)=>{
    const method="GET";
  //  const src="https://drive.google.com/file/d/17URn5YRbnfpcPq3N2gJzxGb4e0992Xd9/view?usp=sharing"
    const data=await axios.get(src,{
      responseType:'blob'
    })
    console.log(data.data);
    const downloadUrl = window.URL.createObjectURL(new Blob([data.data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', '8-science1-v2.zip'); //any other extension
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
                CBSE - Grade 8 
              </h2>
              <p className="font-size-7 mb-0">
                Download the syllabus              </p>
            </div>
          </div>
        </div>


        {/* End Section Title */}
        <div className="pt-13 pt-lg-16">
          <div className="row px-xl-0">
            {/* single card */}
            
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-xs-8">
              <div
                className="card-same rounded-15 text-center px-10 py-10 gr-hover-3 mb-9 border border-default-color"
                data-aos="zoom-in"
                data-aos-duration={300}
              >
                <div className="mb-10">
                  <div className="grade-img-holder">
                    <img id="curriculum-img" className="intr-intr-omgs" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1627905378/for-students/Group_135_w1rq0l_mkcrlf.png"} alt="" />
                  </div>
                  <img className="wdts-mgdtr" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1623685507/maths-icon_eszouk.svg"} alt="" />
                </div>
                {/* <span className="badge bg-dodger-blue-1-op1 text-dodger-blue-1 rounded-40 px-5 py-2 line-height-reset min-w-63 font-size-5 d-inline-block mb-7">
                  $99
                </span> */}
                <h5 className="text-bunker font-size-7 line-height-reset mb-7 line-height-26">
                  Maths
                </h5>
                {/* <p className="dwnlds-crts-str" onClick={()=>download('/assets/Grade8/Syllabus/8-maths1-v1.zip')}>Download course structure</p> */}
                <a href="https://rankpedia-images.s3.ap-south-1.amazonaws.com/NCERT+SYLLABUS+FOR+MATHS+(Grade+8).pdf" target="_blank">  <p className="dwnlds-crts-str">Download course structure</p> </a>
                 {/* <DownloadLink
                className="dwnlds-crts-str"
    label="Download course structure"
    filename="class8.zip"
    // exportFile={() => "NCERT SYLLABUS FOR  <br/> fjkfjk"}
   // exportFile={() => Promise.resolve( getDataFromURL ("NCERT SYLLABUS FOR  <br/> fjkfjk"))}
   exportFile={()=> Promise.resolve(getDataFromURL ('../../assets/image/home/8-maths1-v1.zip'))}
/>  */}

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
                <img id="curriculum-img" className="intr-intr-omgs" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1627905378/for-students/Group_135_w1rq0l_mkcrlf.png"} alt="" />
                  <img className="wdts-mgdtr" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622811954/Mask_Group_22_fj8tta.png"} alt="" />
                </div>
                {/* <span className="badge bg-dodger-blue-1-op1 text-dodger-blue-1 rounded-40 px-5 py-2 line-height-reset min-w-63 font-size-5 d-inline-block mb-7">
                  $99
                </span> */}
                <h5 className="text-bunker font-size-7 line-height-reset mb-7 line-height-26">
                  Science
                </h5>
                {/* <p className="dwnlds-crts-str"  onClick={()=>download1('/assets/Grade8/Syllabus/8-science1-v2.zip')} >Download course structure</p> */}
                <a href="https://rankpedia-images.s3.ap-south-1.amazonaws.com/NCERT+SYLLABUS+FOR+SCIENCE+(GRADE+8).pdf" target="_blank" > <p className="dwnlds-crts-str" >Download course structure</p> </a>
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
           {/* <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-xs-8">
              <div
                className="card-same rounded-15 text-center px-10 py-10 gr-hover-3 mb-9 border border-default-color"
                data-aos="zoom-in"
                data-aos-duration={900}
              >
                 <div className="mb-10">
                <img className="intr-intr-omgs" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622811805/Group_135_w1rq0l.png"} alt="" />
                  <img className="wdts-mgdtr" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622811954/Mask_Group_22_fj8tta.png"} alt="" />
                </div>
                <span className="badge bg-dodger-blue-1-op1 text-dodger-blue-1 rounded-40 px-5 py-2 line-height-reset min-w-63 font-size-5 d-inline-block mb-7">
                  $99
                </span> 
               <h5 className="text-bunker font-size-7 line-height-reset mb-7 line-height-26">
                  Physics2
                </h5>
                <p className="dwnlds-crts-str">Download course structure</p>
                 <Link
                  to="/#"
                  className="btn btn-sunset rounded-5 min-w-144 h-55"
                >
                  Buy now
                </Link>
              </div>
            </div>  */}
            {/* end single card */}
            {/* single card */}
         {/*   <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-xs-8">
              <div
                className="card-same rounded-15 text-center px-10 py-10 gr-hover-3 mb-9 border border-default-color"
                data-aos="zoom-in"
                data-aos-duration={1200}
              >
                <div className="mb-10">
                <img className="intr-intr-omgs" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622811805/Group_135_w1rq0l.png"} alt="" />
                  <img className="wdts-mgdtr" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622811954/Mask_Group_22_fj8tta.png"} alt="" />
                </div>
                 <span className="badge bg-dodger-blue-1-op1 text-dodger-blue-1 rounded-40 px-5 py-2 line-height-reset min-w-63 font-size-5 d-inline-block mb-7">
                  $99
                </span> 
                <h5 className="text-bunker font-size-7 line-height-reset mb-7 line-height-26">
                  Physics3
                </h5>
                <p className="dwnlds-crts-str">Download course structure</p>
                <Link
                  to="/#"
                  className="btn btn-sunset rounded-5 min-w-144 h-55"
                >
                  Buy now
                </Link> 
              </div>
            </div> */}
            {/* end single card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicArea;
