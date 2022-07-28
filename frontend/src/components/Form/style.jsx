import styled from "styled-components";

export default styled.section`
  width: 35vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  p {
    width: 60%;
    line-height: 1.3em;
    font-size: 1.2em;
    color: var(--yellow);
    text-shadow: var(--text-shadow);
    text-align: center;
    margin: 2vw 0 4vw 0;
  }
  form {
    text-shadow: var(--text-shadow);
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    input {
      height: 6vh;
      background-color: var(--yellow);
    }
    textarea {
      height: 35vh;
      background-color: var(--white-opacity);
    }
    input,
    textarea {
      border: none;
      width: 100%;
      margin-bottom: 2vh;
      padding-left: 8px;
      color: var(--white);
      font-weight: bold;
      font-size: 1em;
    }
    input[type="submit"] {
      width: 60%;
    }
    button {
      border: 2px solid yellow;
    }
  }
  @media screen and (max-width: 700px) {
    width: 90vw;
    display: flex;
    align-items: center;
    margin: 10vh;
    form {
      width: 95%;
      margin: auto;
      input[type="submit"] {
        width: 65%;
        padding: 0;
        text-align: center;
      }
    }
    p {
      width: 95%;
      margin: 3vh 0;
    }
  }
`;
