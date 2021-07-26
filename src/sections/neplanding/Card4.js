import React from 'react'

const Card4 = (props) => {

  return (
    <div className="col-md-4 mb-5">
      <div className="card feature-card-container card-3">
        {/* <img className="card_image_logo" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621605929/rankpedia_logo_silrqz.png"} alt="" /> */}
        <img className="feature_card" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621592553/double-right-arrows-angles_aekwig.png"} alt="" />
        <div className="text-content py-10">
          <h4 className="feature-card-heading"> Future </h4>
          <br />
          <p className="mb-0 feature_card_text"><i className="fa fa-check icon text-success" aria-hidden="true"></i> Self Paced </p>
          <p className="feature_card_text"><i className="fa fa-check icon text-success" aria-hidden="true"></i> Experiential Learning </p>
        </div>
      </div>
    </div>
  )
}

export default Card4