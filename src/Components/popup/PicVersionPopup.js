import React, { useState } from "react";
import "./VersionPopup.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Select what type of picture you want</h2>
            
            <select>
                <option>compressed version</option>
            </select><br/>
            <select>
                <option>original version</option>
            </select><br/>
            <button>submit</button>

            <button className="close-modal" onClick={toggleModal}>
              ✕
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}