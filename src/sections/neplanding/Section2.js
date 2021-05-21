import React from 'react'

const Section2 = (props) => {
  return (
    <div className="row mt-15 ">
      <div className="col-sm-6">
        <img id="kid_video" className="img-fluid" src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621605779/kid_watching_video_zamtkc.png"} alt="" />
      </div>
      <div className="col-sm-6 my-auto text-left">
        {/* <div className="col-8"> */}
          <h3>
            Rankpedia is an NEP compliant edtech solution 
          </h3>
          <p className="lead">
            Learn with ease and prepare extensively with RankPedia to stay ahead of the learning curve and exceed expectations.
          </p>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Section2
