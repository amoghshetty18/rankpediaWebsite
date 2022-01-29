import React from "react";

function Assesment({ title, description,imgUrl }) {
  return (
    <div class="col-lg-4 col-md-6 ">
      <div class="academic-delivery-box m-5">
        <div class="image-holder">
          <img
            src={imgUrl}
            alt=""
            class="img-fluid abtus-brdrs-mgs"
          />
        </div>
        <div class="text-box pt-10">
          <h3 class="Service-heading">{title}</h3>
          <p class="pt-5">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Assesment;
