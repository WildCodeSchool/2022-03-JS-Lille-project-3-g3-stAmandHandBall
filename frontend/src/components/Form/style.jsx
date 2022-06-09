import styled from "styled-components";

export default styled.form`
  width: 35vw;
  display: flex;
  flex-direction: column;
  align-items: center;

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
      box-shadow: var(--box-shadow);
      margin-bottom: 1vw;
      padding-left: 8px;
      text-shadow: var(--text-shadow);
      color: var(--white);
      font-weight: bold;
      font-size: 1em;
    }
    input[type="submit"] {
      width: 60%;
    }
  }
`;
