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
              <h2 className="font-size-10 mb-0">Service we offer for you</h2>
              <p>Sed ut perspiciatis unde omnis iste natllus sle un teude
sedomnis iste natll u ssimeed ut perspictis mni.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
        <div class="col-lg-4 col-md-6">
            <div class="academic-delivery-box">
                <div class="image-holder">
                    <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1620125405/Bitmap-min_zqwk7y.png" alt="" class="img-fluid" />
                </div>
                 <div class="text-box pt-10">
                    <h3 class="Service-heading">For Students</h3>
                       <p class="pt-5">Sed ut perspiciatis unde omnis iste natllus sle un teude sed omnis iste natllu ssimee d u t perspictis mni.</p>
                </div>
                <div class="hero-btn">
                <a href="#" class="btn-link with-icon text-green gr-text-7 font-weight-bold">Get started <i class="icon icon-tail-right font-weight-bold"></i></a>
              </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="academic-delivery-box wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                <div class="image-holder">
                    <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1620125622/service2-min_teikk0.png" alt="" class="img-fluid" />
                </div>
                 <div class="text-box pt-10">
                    <h3 class="Service-heading">For Teachers</h3>
                       <p class="pt-5">Sed ut perspiciatis unde omnis iste natllus sle un teude sed omnis iste natllu ssimee d u t perspictis mni.</p>
                </div>
                <div class="hero-btn">
                <a href="#" class="btn-link with-icon text-green gr-text-7 font-weight-bold">Get started <i class="icon icon-tail-right font-weight-bold"></i></a>
              </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="academic-delivery-box wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                <div class="image-holder">
                    <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1620125622/service3-min_je7n8n.png" alt="" class="img-fluid" />
                </div>
                 <div class="text-box pt-10">
                    <h3 class="Service-heading">For schools</h3>
                       <p class="pt-5">Sed ut perspiciatis unde omnis iste natllus sle un teude sed omnis iste natllu ssimee d u t perspictis mni.</p>
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
