import styled from "styled-components";

export default styled.section`
  height: 30vh;
  display: flex;
  align-items: center;
  .buttonPosition {
    height: 20vh;
    text-align: center;

    button {
      height: 55%;
      width: 45vw;
      border: none;
      background-color: var(--yellow);
      box-shadow: var(--box-shadow);
      color: var(--blue);
      font-size: 3.5vmax;
      font-weight: 900;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 640px) {
    height: 13vh;
    .buttonPosition {
      height: 9vh;
      button {
        margin-top: 0.5rem;
        font-size: 0.9em;
      }
    }
  }
`;
