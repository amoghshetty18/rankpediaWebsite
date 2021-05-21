import React from 'react'

const Card = (props) => {

  const {card_image, title, text} = props

  return (
    <div className="col-sm-6 col-lg-3 my-5 py-10">
      <div className="card py-12 px-8 card-same">
        <img id="card-image-gradelanding" className="mx-auto d-block" src={card_image} alt="" />
        <div className="card-body text-center">
          <h4 className="px-5 mb-5"> {title} </h4>
          <br />
          <p className="my-0 ">
            {text} 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
