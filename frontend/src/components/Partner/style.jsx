import styled from "styled-components";

export default styled.section`
  background-color: var(--blue);
  width: 100vw;
  height: 30vh;
  display: flex;
  align-items: center;
  .buttonPosition {
    width: 100vw;
    height: 20vh;
    text-align: center;
    button {
      height: 55%;
      width: 45vw;
      border: none;
      background-color: var(--yellow);
      box-shadow: 0rem 0.3rem 0.3rem black;
      color: var(--blue);
      font-size: 3.5vmax;
      font-weight: 900;
      text-transform: uppercase;
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
