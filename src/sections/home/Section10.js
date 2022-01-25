import React from 'react';

const Section10 = () => {
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

            <div className="row align-items-center">
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
        </div>
    );
};

export default Section10;
