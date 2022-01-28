import React from 'react';

const Section9 = () => {
    return (
        <div 
            className="container py-5 my-5"
            style={{
                backgroundColor: "#fff"
            }}
        >
            <div className="row align-items-center">
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

            <div className="row align-items-center">
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
        </div>
    );
};

export default Section9;
