import styled from "styled-components";

export default styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vw;
  margin: 15vh 0;
  .buttonPosition {
    width: 100%;
    button {
      width: 100%;
      border: none;
      background-color: var(--yellow);
      box-shadow: var(--box-shadow);
      color: var(--blue);
      font-size: 3.5vmax;
      font-weight: 900;
      text-align: center;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 700px) {
    width: 55vw;
    margin: 5vh 0;
    .buttonPosition {
      width: 100%;
      button {
        width: 100%;
        height: 5vh;
        font-size: 2.2vmax;
        cursor: pointer;
      }
    }
  }
`;
