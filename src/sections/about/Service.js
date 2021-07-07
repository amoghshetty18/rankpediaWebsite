import React from "react";

import TeamMemberCard from "../../components/TeamMemberCard";


const Service = () => {
  return (
    <div className="pt-20 pt-lg-25 pb-15 pb-lg-22">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-sm-10">
            <div
              className="text-center mb-9 mb-lg-15"
              data-aos="fade-up"
              data-aos-duration={500}
            >
              <h2 className="font-size-10 mb-0">Services We Offer You</h2>
              <p>Experiential learning coupled with quality teachers, high technology and outstanding learning outcomes</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
        <div class="col-lg-4 col-md-6">
            <div class="academic-delivery-box">
                <div class="image-holder">
                    <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625558128/shutterstock_1958115715_d8etl4.jpg" alt="" class="img-fluid abtus-brdrs-mgs" />
                </div>
                 <div class="text-box pt-10">
                    <h3 class="Service-heading">For Students</h3>
                       <p class="pt-5">To let children set sail on the journey of what they deserve, we provide quality education at the cost that they can afford</p>
                </div>
                <div class="hero-btn">
                <a href="#" class="btn-link with-icon text-green gr-text-7 font-weight-bold">Get started <i class="icon icon-tail-right font-weight-bold"></i></a>
              </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="academic-delivery-box wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                <div class="image-holder">
                    <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625558206/shutterstock_1827527717_batkfq.jpg" alt="" class="img-fluid abtus-brdrs-mgs" />
                </div>
                 <div class="text-box pt-10">
                    <h3 class="Service-heading">For Teachers</h3>
                       <p class="pt-5">To embark upon the journey of an enhanced learning world, we offer notes that help your students in creating history</p>
                </div>
                <div class="hero-btn">
                <a href="#" class="btn-link with-icon text-green gr-text-7 font-weight-bold">Get started <i class="icon icon-tail-right font-weight-bold"></i></a>
              </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="academic-delivery-box wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                <div class="image-holder">
                    <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625558289/shutterstock_559949164_skw7lp.jpg" alt="" class="img-fluid abtus-brdrs-mgs" />
                </div>
                 <div class="text-box pt-10">
                    <h3 class="Service-heading">For Schools</h3>
                       <p class="pt-5">To help your little juveniles think out of the box, join our community that infuses creativity in the young minds</p>
                </div>
                <div class="hero-btn">
                <a href="#" class="btn-link with-icon text-green gr-text-7 font-weight-bold">Get started <i class="icon icon-tail-right font-weight-bold"></i></a>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
