import React from 'react'


const Card2 = ({ className, ...rest }) => {

  return (
    <div className="col-md-4 mb-5">
      <div className="card feature-card-container card-1">
        <img className="feature_card" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621592553/double-right-arrows-angles_aekwig.png"} alt="" />
        <div className="text-content py-10">
          <h4 className="feature-card-heading"> Past </h4>
          <br />
          <p className="mb-0 feature_card_text"><i className="fa fa-check icon text-success" aria-hidden="true"></i> Rote Learning </p>
          <p className="feature_card_text"><i className="fa fa-check icon text-success" aria-hidden="true"></i> Traditional Methods </p>
        </div>
      </div>
    </div>
    );
  };

export default Card2
