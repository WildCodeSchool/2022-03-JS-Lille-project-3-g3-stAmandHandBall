import styled from "styled-components";

export default styled.div`
  body.active-modal {
    overflow-y: hidden;
  }
  .btn-modal {
    border: none;
    background: none;
    color: var(--color-button);
    cursor: pointer;
    font-size: 20px;
  }
  .modal,
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }
  .overlay {
    background: rgba(49, 49, 49, 0.8);
  }
  .modal-content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    min-width: 300px;
    color: black;
  }
  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px;
    border-radius: 5px;
    background-color: var(--color-button);
  }
  .close {
    background-color: var(--color-button);
    border-radius: 7px;
    color: black;
    padding: 5px;
    margin-top: 20px;
    cursor: pointer;
    border: none;
  }
`;
