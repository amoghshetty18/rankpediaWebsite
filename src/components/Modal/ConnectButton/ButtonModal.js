import React, { useState } from "react";
import Form from "../../../sections/home/Form";

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
          <h2>{title}</h2>
          <p>
            <h4 className="btn-red" onClick={closeModalHandler}
            style={{
                height:'25px',
                maxWidth:'10px',
                minWidth:'25px',
                margin:'0px 0px 0px 320px',
                cursor:'pointer'
            }}>X</h4>
            <div class="mb-3">
            <Form/>
            </div>
          </p>
          {/* <button
            class="btn btn-red mx-auto gtstrdr"
            style={{
                backgroundColor: 'red'
            }}
            onClick={closeModalHandler}
          >
            Cancel
          </button> */}
        </div>
      )}
      {showModal && <div class="backdrops" onClick={closeModalHandler}></div>}
    </div>
  );
}

export default ButtonModal;
