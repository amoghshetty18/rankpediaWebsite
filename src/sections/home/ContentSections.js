import React from 'react';
import { Link } from "gatsby";
import GER from '../../assets/image/home/GER.png'
import Causes from '../../assets/image/home/Causes-Of-dropping-out.png'
import ClickToPop from './ClickToPop';
import { borderRadius } from 'styled-system';

const ContentSections = () => {
  return (
    <div className="container">
      <div className="row align-items-center section-margins index-first-content-section">
        <h2 
          style={{
            fontWeight: 100
          }}
          className="section-2-heading-phone mx-auto text-center"
        >
          Bringing About a Change
        </h2>
        <div 
          className="col-md-6" 
          data-aos="flip-right" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <img 
            src={GER} 
            alt="" 
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 
            style={{
              fontWeight: 100
            }}
            className="section-2-heading-desktop"
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          >
            Bringing About a Change
          </h2>
          <p>
            Our research has provided us with an estimate of the number of students who have dropped out of school.As a result, we have devised several strategies for reintegrating these students into the system.
          </p>
        </div>
      </div>

      <div className="row align-items-center section-margins first-section-">
        <h2 
          style={{
            fontWeight: 100
          }}
          className="section-2-heading-phone mx-auto text-center"
        >
          Learner-Centered Stratification of Rankpedia
        </h2>
        <div 
          className="col-md-6 order-md-last" 
          data-aos="fade-left" 
          data-aos-duration="500" 
          data-aos-once="true"
        >
          <img 
            src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643094421/home-page/3-Verticals_1_siwcwr.png" 
            alt="" 
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 
            style={{
              fontWeight: 100
            }}
            className="section-2-heading-desktop"
            data-aos="flip-right" 
            data-aos-duration="2000" 
            data-aos-once="true"
          >
            Learner-Centered Stratification of Rankpedia
          </h2>
          <p>
            Rankpedia has been expanded into three verticals, namely E-Learning, E-school, and Continuing Education, in order to deliver world-class educational possibilities to students all around the world.  
          </p>
        </div>
      </div>

      <div className="row align-items-center section-margins first-section-">
        <h2 
          style={{
            fontWeight: 100
          }}
          className="section-2-heading-phone mx-auto text-center"
        >
          E-Learning
        </h2>
        <div 
          className="col-md-6" 
          data-aos="flip-right" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <img 
            src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643353094/home-page/E-Learning_1_quno90.png" 
            alt="" 
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 
            style={{
              fontWeight: 100
            }}
            className="section-2-heading-desktop"
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          >
            E-Learning
          </h2>
          <p>
            E-learning is a Rankpedia platform that delivers online education and online tutoring to students who want to learn and develop knowledge in a more efficient manner by utilizing innovative learning methods.
            
          </p>
            <Link to  ="/e-learning" class="btn btn-red mx-auto gtstrdr">Learn More</Link>
        </div>
      </div>

      <div className="row align-items-center section-margins first-section-">
        <h2 
          style={{
            fontWeight: 100
          }}
          className="section-2-heading-phone mx-auto text-center"
        >
          E-School
        </h2>
        <div 
          className="col-md-6 order-md-last" 
          data-aos="flip-right" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <img 
            src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643102201/home-page/E-School_2_1_srbnyy.png" 
            alt="" 
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 
            style={{
              fontWeight: 100
            }}
            className="section-2-heading-desktop"
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          >
            E-School
          </h2>
          <p>
            Rankpedia’s E-school is an Internationally accredited online school that focuses on the child’s holistic development and helps children to excel academically and throughout their lives by providing a high-quality and fun learning experience. Our mission is to provide education for all.
          </p>
          <Link to="/e-school" class="btn btn-red mx-auto gtstrdr">Learn More</Link>
        </div>
      </div>

      <div className="row align-items-center section-margins first-section-">
        <h2 
          style={{
            fontWeight: 100
          }}
          className="section-2-heading-phone mx-auto text-center"
        >
          Continuing Education
        </h2>
        <div 
          className="col-md-6" 
          data-aos="flip-right" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <img 
            src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643353271/home-page/Continuing-Education-final_1_t7olsr.png" 
            alt="" 
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 
            style={{
              fontWeight: 100
            }}
            className="section-2-heading-desktop"
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          >
            Continuing Education
          </h2>
          <p>
            Our Continuing Education program primarily focuses on imparting knowledge and career-oriented skills to learners from any part of the world, with no boundaries around the learners with regard to their age, restricted physical classrooms, etc.
          </p>
          <Link to="/continuing-education" class="btn btn-red mx-auto gtstrdr">Learn More</Link>
        </div>
      </div>

      <div className="row align-items-center section-margins first-section-">
        <h2 
          style={{
            fontWeight: 100
          }}
          className="section-2-heading-phone mx-auto text-center"
        >
          An Alarming fact in the Indian Education System
        </h2>
        <div 
          className="col-md-6 order-md-last" 
          data-aos="flip-right" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <img 
            src={Causes} 
            alt="" 
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 
            style={{
              fontWeight: 100
            }}
            className="section-2-heading-desktop"
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          >
            An Alarming fact in the Indian Education System
          </h2>
          <p>
            Around 35,354,000 students are dropping out of the education system and the disturbing factor is that it keeps on increasing each day. 
          </p>
        </div>
      </div>

      <div className="row align-items-center section-margins first-section-">
        <h2 
          style={{
            fontWeight: 100
          }}
          className="section-2-heading-phone mx-auto text-center"
        >
          Teaching Methodology We Implement
        </h2>
        <div 
          className="col-md-6" 
          data-aos="flip-right" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <img 
            src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643105565/home-page/Teaching_Methodology_We_Implement_2_rhelxv.png" 
            alt="" 
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 
            style={{
              fontWeight: 100
            }}
            className="section-2-heading-desktop"
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          >
            Teaching Methodology We Implement
          </h2>
          <p>
            We have adopted the best teaching methodologies by incorporating the latest technologies to help the students in their learning journey. This enables students to learn the concepts easily and comprehensively.
          </p>
        </div>
      </div>

      <div className="row align-items-center section-margins first-section-">
        <h2 
          style={{
            fontWeight: 100
          }}
          className="section-2-heading-phone mx-auto text-center"
        >
          Our Futuristic Approach
        </h2>
        <div 
          className="col-md-6 order-md-last" 
          data-aos="flip-right" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <img 
            src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643106387/home-page/NEP-2020_2_etg1p3.png" 
            alt="" 
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 
            style={{
              fontWeight: 100
            }}
            className="section-2-heading-desktop"
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          >
            Our Futuristic Approach
          </h2>
          <p>
            We have adopted all the best practices mentioned in the National Education Policy 2020 to help the children in their holistic development. The curriculum has been reduced to the core essentials and the teaching methodologies foster inquiry-based learning and analysis-based learning methodologies build the analytical skills of the students. In alignment with NEP, we emphasize providing holistic education to every child, which promotes outcome-based experiential learning that enhances the analytical and vocational skills of the students. 
          </p>
        </div>
      </div>

      <div className="row align-items-center section-margins first-section-">
        <h2 
          style={{
            fontWeight: 100
          }}
          className="section-2-heading-phone mx-auto text-center"
        >
          Best Learning Resources
        </h2>
        <div 
          className="col-md-6" 
          data-aos="flip-right" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <img 
            src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643104285/home-page/Best-Learning-Resources_1_rzvdfu.png" 
            alt="" 
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 
            style={{
              fontWeight: 100
            }}
            className="section-2-heading-desktop"
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          >
            Best Learning Resources
          </h2>
          <p>
            Our learner-friendly resources are crafted using advanced technology to help students understand concepts in the best way possible. Our interactive videos and student-centric evaluation materials have been created with the goal of keeping all students engaged in a continuous learning cycle. Through practical learning, we strive to provide students with opportunities to promote their abilities and skills to reach the ideal career pathway. 
          </p>
        </div>
      </div>

      <div className="row align-items-center section-margins first-section-">
        <h2 
          style={{
            fontWeight: 100
          }}
          className="section-2-heading-phone mx-auto text-center"
        >
          Interactive Learning 
        </h2>
        <div 
          className="col-md-6 order-md-last" 
          data-aos="flip-right" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <img 
            src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643104525/home-page/Continuing-Education_2_y531ld.png" 
            alt="" 
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 
            style={{
              fontWeight: 100
            }}
            className="section-2-heading-desktop"
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          >
            Interactive Learning 
          </h2>
          <p>
            Do not hesitate or block your mind when you are doubtful. Our team is available 24*7 to assist the students to improve their academic performance and progress through the learning process. Students have the provision of online doubt solving with the best teacher through live sessions.  
          </p>
        </div>
      </div>

        <div className="row align-items-center section-margins first-section-">
          <h2 
            style={{
                fontWeight: 100
            }}
            className="section-2-heading-phone mx-auto text-center"
          >
            Mentorship
          </h2>
          <div 
            className="col-md-6" 
            data-aos="flip-right" 
            data-aos-duration="1000" 
            data-aos-once="true"
          >
            <img 
              src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643105054/home-page/Mentorship_1_sajuiw.png" 
              alt="" 
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2 
              style={{
              fontWeight: 100
              }}
              className="section-2-heading-desktop"
              data-aos="fade-left" 
              data-aos-duration="500" 
              data-aos-once="true"
            >
              Mentorship
            </h2>
            <p>
              We understand the importance of guiding a student cognitively and emotionally so that they can make the best decision possible. Our teachers are well-trained and well-versed in international curricula to help the students make their learning process easier. They are well trained to mentor a student individually when needed.
            </p>
          </div>
      </div>

      <div className="row align-items-center section-margins first-section-">
        <h2 
          style={{
              fontWeight: 100
          }}
          className="section-2-heading-phone mx-auto text-center"
        >
          Assessment 
        </h2>
        <div 
          className="col-md-6 order-md-last" 
          data-aos="flip-right" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <img 
            src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643105179/home-page/BLOOMS-pic-23_1_nujbr8.png" 
            alt="" 
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 
            style={{
            fontWeight: 100
            }}
            className="section-2-heading-desktop"
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          >
            Assessment 
          </h2>
          <p>
            The highest-quality learning materials and exam questions are provided by subject matter experts with years of experience in their respective fields. Thousands of topic-specific questions are available, ranging in difficulty from easy to difficult, according to Bloom's Taxonomy. Through assessments and activities, we encourage them to apply their knowledge in a variety of ways and to create something innovative and unique, ensuring that learning does not end with the test. 
          </p>
        </div>
      </div>

      <div className="row align-items-center section-margins first-section-">
        <h2 
          style={{
              fontWeight: 100
          }}
          className="section-2-heading-phone mx-auto text-center"
        >
          Experiential Learning
        </h2>
        <div 
          className="col-md-6" 
          data-aos="flip-right" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
            <img 
              src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643105447/home-page/Experiential-Learning_1_zcsyiu.png" 
              alt="" 
              className="img-fluid"
            />
        </div>
        <div className="col-md-6">
          <h2 
            style={{
            fontWeight: 100
            }}
            className="section-2-heading-desktop"
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          >
            Experiential Learning
          </h2>
          <p>
            Our learning patterns challenge students to perform better by coming out of their comfort zones. A platform for the children to learn by doing and reflecting on their own experiences. Learn the ways of tackling problems, become more challenging, and make the appropriate decisions. Makes children work in different practical situations enabling them to use their ideas and their creativity.
          </p>
        </div>
      </div>

      <div className="row align-items-center section-margins first-section-">
        <h2 
          style={{
            fontWeight: 100
          }}
          className="section-2-heading-phone mx-auto text-center"
        >
          Building a positive Educational Ecosystem for Students, Teachers, and Parents 
        </h2>
        <div 
          className="col-md-6 order-md-last" 
          data-aos="flip-right" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <img 
            src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643105565/home-page/Teaching_Methodology_We_Implement_2_rhelxv.png" 
            alt="" 
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 
            style={{
            fontWeight: 100
            }}
            className="section-2-heading-desktop"
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          >
            Building a positive Educational Ecosystem for Students, Teachers, and Parents 
          </h2>
          <p>
            Join our educational platform, which provides you with a thought-provoking environment in which to excel academically and build a bright future. Experience the technologically advanced methods of teaching and make learning easier. 
          </p>
        </div>
      </div>

      <div className="row align-items-center section-margins first-section-">
        <h2 
          style={{
              fontWeight: 100
          }}
          className="section-2-heading-phone mx-auto text-center"
        >
          Expertly curated question banks with an umpteen number of questions
        </h2>
        <div 
          className="col-md-6" 
          data-aos="flip-right" 
          data-aos-duration="1000" 
          data-aos-once="true"
        >
          <img 
            src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643105822/home-page/Expertly-curated-question-banks_1_d2kvzm.png" 
            alt="" 
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 
            style={{
            fontWeight: 100
            }}
            className="section-2-heading-desktop"
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          >
            Expertly curated question banks with an umpteen number of questions
          </h2>
          <p>
            Our comprehensive question banks, curated by our experienced Subject Matter Experts, are of various levels of difficulty, which challenge students to perform better and expand their knowledge.
          </p>
        </div>
        <div className=""
        style={{
          borderRadius:'15px',
          // border:"solid grey 5px",
          width: "100%"
        }}>
          <h2 
            style={{
            fontWeight: 100
            }}
            className="section-2-heading-desktop"
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          ><br/>
            Happy to help you
          </h2>
          <p style={{
            padding:'10px',
            MarginLeft:'10px'
          }}>
            <ClickToPop/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentSections;
