import React from "react";

const RevisionCard = ({ title }) => {
  return (
    <div className="border rounded-10 mb-5 pl-7 pt-6 pb-2 pr-7" style={{background: "#DEE8F2"}}>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center mb-5">
          <div className="media align-items-center">
            <div className="mr-5 circle-41">
              <img src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1623698408/Icon_awesome-check-circle_l0crkd.svg" alt="" />
            </div>
            <div className="">
              <h4 className="font-size-6 font-weight-medium mb-0 text-dark-cloud">
                {title}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevisionCard;
