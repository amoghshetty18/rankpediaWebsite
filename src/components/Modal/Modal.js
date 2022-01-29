import React, { useState } from "react";

function Modal({ title, paragraph, extraParagraph, child }) {
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
        Learn More
      </button>
      {showModal && (
        <div className="modalWindow">
          <h2>{title}</h2>
          <p>
            <div class="mb-3">
            {paragraph}
            {extraParagraph !== "" && extraParagraph}
            </div>
            {child}
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

export default Modal;
