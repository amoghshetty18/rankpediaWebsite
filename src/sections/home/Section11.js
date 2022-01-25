import React from 'react';

const Section11 = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
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
            </div>
        </div>
  );
};

export default Section11;
