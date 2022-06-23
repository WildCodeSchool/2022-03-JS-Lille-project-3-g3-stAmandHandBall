import styled from "styled-components";

export default styled.div`
  color: blue;
  font-family: var(--font-family);
  body.active-modal {
    overflow-y: hidden;
  }
  .btn-modal {
    font-family: var(--font-family);
    background: yellow;
    color: var(--color-button);
    cursor: pointer;
    border-radius: 3px;
    font-size: 1.2rem;
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
    background: #f8f8f8;
    border-radius: 3px;
    min-width: 300px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      color: blue;
      text-shadow: none;
      margin-left: 4%;
    }
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
    position: relative;
    justify-content: center;
    font-family: var(--font-family);
    font-size: 1.2em;
    cursor: pointer;
    left: 15%;
    margin-top: -15%;
    border: none;
  }
  @media screen and (max-width: 700px) {
    .close {
      left: 0;
      margin-top: -30%;
    }
  }
`;
