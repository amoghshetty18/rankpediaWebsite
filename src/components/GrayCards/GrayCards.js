import React from 'react';



function GrayCards({title,solutioncard}) {
    return (
        <div className="pt-7 pt-md-0 pt-lg-0 pb-7 pb-md-9 pb-lg-7 mb-lg-1">
      <div className="container">
          {title &&
      <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="Heading-styling text-center mb-8 mb-lg-10">
              <h1 className="mt-5 font-size-10">{title}</h1>
            </div>
          </div>
        </div>}
        <div className="row justify-content-center">
          {solutioncard.map(({ title, text }, index) => {
            return (
              <div className="col-lg-6 col-sm-6 col-xs-8 pb-lg-10 mb-5">
                <div
                  className="d-flex bg-gray-3 rounded-10 pt-7 pl-7 pr-5 pb-7"
                  style={{height: "100%"}}
                  >
               <div className="Desktop-view">

                  <div className="mb-8 mr-8 circle-55">
                    <img
                      src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622467381/Icon_feather-check-circle_rmlw38.svg"
                      alt=""
                      />
                  </div>
                      </div>
                  <div className="">
                    
                    <div class="Mobile-view">
                      <div className="d-flex justify-content-center">
                    <div className="mb-lg-8 mr-lg--8 circle-55">
                    <img
                      src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1622467381/Icon_feather-check-circle_rmlw38.svg"
                      alt=""
                      />
                  </div>
                      </div>
                    </div>
                    <h4 className="font-size-7 mb-0 text-dark-cloud">
                      {title}
                    </h4>
                    <p className="font-size-5 line-height-28 text-stone mr-xl-7 mb-0">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    );
}

export default GrayCards;