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
        Connect Us
      </button>
      {showModal && (
        <div className="modalWindow">
          <h2>{title}</h2>
          <p>
            <div class="mb-3">
            <Form/>
            </div>
          </p>
          <button
            class="btn btn-red mx-auto gtstrdr"
            onClick={closeModalHandler}
          >
            Close
          </button>
        </div>
      )}
      {showModal && <div class="backdrops" onClick={closeModalHandler}></div>}
    </div>
  );
}

export default ButtonModal;
