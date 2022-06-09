import styled from "styled-components";

export default styled.section`
  width: 100vw;
  background-color: red;
  display: flex;
  justify-content: center;
  .counter {
    height: 55%;
    width: 50vw;
    border: none;
    background-color: var(--yellow);
    box-shadow: 0rem 0.3rem 0.3rem black;
    margin-top: 1rem;
    color: var(--blue);
    font-size: 1.9vmax;
    font-weight: 90;
    text-transform: uppercase;
    padding: 0%;
    display: flex;
    justify-content: center;
  }
  h1 {
    padding: 2%;
    position: absolute;
    display: flex;
    left: 26%;
    top: 30%;
    color: var(--white);
  }
  .timerGlobal {
    display: flex;
    margin-bottom: 2%;
    margin-top: 2%;
  }
`;
