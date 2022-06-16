import React, { useState } from "react";
import PropTypes from "prop-types";
import SModal from "./style";

export default function Modal({ button, children }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <SModal>
      <button type="button" onClick={toggleModal} className="btn-modal">
        {button}
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay" />
          <div className="modal-content">
            <main>{children}</main>
            <button type="button" className="close" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </SModal>
  );
}

Modal.propTypes = {
  button: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};
