import React from 'react'

const popup = () =>{
    // modalchangehandler()
    {

    }
        return (
            <div className="popupSuccess">
                <div className="popup_innerSuccess text-center p-5">
                {/* <img
                    src={popupSuccessIcon}
                    alt="rightLogo"
                    className="popupSuccessIcon"
                /> */}
                <div className="popupSuccessTitle pt-3 pb-2">Successful</div>
                <div className="popupSuccessContent pb-4">
                    Thank You For Enrolling. Your Career Begins Now.
                </div>{" "}
                <div className="text-center mb-3">
                    {" "}
                    <button
                    className="btn pt-3 pb-3 pl-5 pr-5 PopupSuccessBtn"   
                    >
                    Done
                    </button>
                </div>
                </div>
            </div>
        );
      }
export default popup;