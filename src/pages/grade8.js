import React from "react";
import { Tabs } from 'antd';

import axios from 'axios'

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/practicetest/Hero";
import CTA from "../sections/practicetest/CTA";
import Features from "../sections/practicetest/Features";
import Content1 from "../sections/practicetest/Content1";
import Content2 from "../sections/practicetest/Content2";
import Content3 from "../sections/practicetest/Content3";
import Content4 from "../sections/practicetest/Content4";
import Screenshots from "../sections/practicetest/Screenshots";
import Testimonial from "../sections/practicetest/Testimonial";
import Promo from "../sections/practicetest/Promo";

import Infocard from "../sections/faq/Infocard";
import GetinTouch from "../components/GetinTouch";

// import imageRight from "../assets/image/inner-page/png/practicetest.png";

import MusicArea from "../sections/grade8/MusicArea";
import MusicArea2 from "../sections/grade8/MusicArea2";

// import {generateZip, generateZipFromCloud} from './generateZip';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class DownloadLink extends React.Component {
  render() {
      return (
          <a href={this.props.src} download>{this.props.children}</a>
      )
  }
}


const Grade8 = () => {

  // const downloadFile = () => {
  //   window.location.href = "https://yoursite.com/src/assets/files/exampleDoc.pdf"
  // }

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
        link.setAttribute('download', '8-maths1-v1.pdf'); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
  }


  return (
    <>
     <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
            <a href="/login">  <button className="btn btn btn-blue-3 header-btn1 head-login">
                Login
              </button> </a>

              {/* <div class="header-btn  ml-auto ml-lg-5 mr-6 mr-lg-0 d-none d-xs-block" id="login-tpr">
            <a class="btn bggr gr-text-9 d-none d-xs-inline-flex " href="#">
              Login
            </a>
          </div> */}
            </>
          ),
          footerStyle: "style3",
        }}
      >


<div className="min-height-100vh d-flex align-items-center bg-dark-cloud1 pt-24 pt-md-27 pt-lg-25">
          <div className="pactice-main-div">
            <div className="row no-gutters align-items-center justify-content-center">

            <div className="col-lg-4 col-md-9 col-xs-11 order-1 order-lg-1">
                <div
                  className="text-left"
                  data-aos="fade-left"
                  data-aos-duration={500}
                  data-aos-once="true"
                >
                  <img className="w-100 w-xl-auto prtc-frst-img" src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1624945295/Kid_kpl7uv.png" alt="" />
                </div>
              </div>


              <div className="col-lg-8 col-md-9 col-xs-11 order-2 order-lg-2">
                <div className="pt-9 pt-sm-13 pb-10 pb-md-15 dark-mode-texts pr-md-11 pr-lg-0">
                  <div className="mb-11 text-right">
                    <h2
                      className="font-size-11 mb-8 pr-sm-10 pr-md-14 pr-lg-0 prct-hdr"
                      data-aos="fade-up"
                      data-aos-duration={500}
                      data-aos-once="true"
                    >
                      Practice chapters of your choice,
                      solve complex questions
                    </h2>
                    <p
                      className="font-size-7 mb-0 pr-xl-15 prct-prg"
                      data-aos="fade-up"
                      data-aos-duration={700}
                      data-aos-once="true"
                    >
                      Learn with ease and prepare extensively
                    </p>
                  </div>
                  {/* <div
                    className="prtc-btr"
                    data-aos="fade-up"
                    data-aos-duration={900}
                    data-aos-once="true"
                  >
                        <a
                          href="#"
                          className="btn btn-red mx-auto gtstrdr"
                        >
                          Learn more
                        </a>
                     
                      
                    
                  </div> */}
                </div>
              </div>
             
            </div>
          </div>
        </div>


        {/* <CTA className="bg-purple-heart py-10" /> */}
        {/* <Features className=" bg-default-6" /> */}
        {/* <Content1 className="bg-default-6 pt-3 pt-md-25 pb-9 pb-md-14 pb-lg-13 overflow-hidden position-relative" />
        <Content2 className="bg-default-6 pt-14 pt-md-19 pt-lg-32 pb-9 pb-md-14 pb-lg-34 overflow-hidden position-relative" />
        <Content3 className="bg-default-6  overflow-hidden position-relative" />
        <Content4 className="bg-default-6 pb-6  overflow-hidden position-relative" /> */}
        {/* <Screenshots className="bg-purple-heart pt-13 pb-13 pt-md-17 pb-md-19 pt-lg-25 pb-lg-26" />
        <Testimonial className="pt-13 pt-md-18 pt-lg-24 pb-13 pb-md-19 pb-lg-28 position-relative" />
        <Promo className="bg-default-6" /> */}

        {/* <Infocard/> */}

        <div className="container pt-15" id="for-tabs-grade-chnges">
        <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Syllabus" key="1">
      

    {/* <a onClick={generateZip} target="_blank">
          Click here to download
        </a> */}


{/* <DownloadLink src="../sections/grade8/8science.pdf" >Click Here</DownloadLink> */}

{/* <span  onClick={()=>download('/8-maths1-v1.pdf')} >download</span> */}


    <MusicArea className=" pt-13 pt-md-18 pt-lg-14 pb-9 pb-md-13 pb-lg-28" />





    </TabPane>
    <TabPane tab="NCERT Books" key="2">
    <MusicArea2 className=" pt-13 pt-md-18 pt-lg-14 pb-9 pb-md-13 pb-lg-28" />
    </TabPane>
    {/* <TabPane tab="Revision Notes" key="3">
      Content of Tab Pane 3
    </TabPane> */}
    <TabPane tab="Sample Papers" key="4">
     <div  className=" pt-13 pb-10"><h3>Coming Soon </h3></div> 
    </TabPane>
  </Tabs>
  </div>


        {/* Start of get in touch section */}
        <GetinTouch
        title="Ready for an Experience of 
        Blended Learning?"
       disc="Register to experience blended learning like never before and stay ahead."/>
       {/* End of get in touch section */}

      </PageWrapper>
    </>
  );
};
export default Grade8;
