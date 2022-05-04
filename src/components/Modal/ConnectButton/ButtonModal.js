import React, { useState } from "react";
import Form from "../../../sections/home/Form";
import './ButtonModal.css';

function ButtonModal({ title, paragraph, extraParagraph, child }) {
  const [showModal, setShowModal] = useState(false);
  // const { title, paragraph, extraParagraph } = props;
  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }
  return (
    <div class="mt-5">
      <button class="btn btn-red mx-auto gtstrdr" onClick={showModalHandler}>
        Speak To Us
      </button>
      {showModal && (
        <div className="connectButton">
          <div className="container-header-title">
            <div className="title-container">
              <h4 className="inner-header"
                // style={{marginTop:'-10px', textAlign:'center', 
                // fontSize:'20px',
                // color:'black'}}>
                >Your Details
              </h4>
            </div>
            <div className="inner-button" onClick={closeModalHandler}>
              X
            </div>
          </div>
            <div class="mb-3">
            <Form/>
            </div>
          
        </div>
      )}
      {showModal && <div class="backdrops" onClick={closeModalHandler}></div>}
    </div>
  );
}

export default ButtonModal;
