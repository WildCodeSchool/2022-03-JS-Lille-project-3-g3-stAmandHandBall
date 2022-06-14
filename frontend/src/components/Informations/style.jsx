import styled from "styled-components";

export default styled.section`
  width: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  p {
    width: 80%;
    font-size: 1.2em;
    color: var(--yellow);
    text-shadow: var(--text-shadow);
    text-align: center;
    margin: 0vw 0 2vw 0;
    line-height: 1.3em;
  }
  .schedules {
    text-align: right;
  }
  .map {
    width: 80%;
    border: 3px solid var(--yellow);
    aspect-ratio: 1/1;
    background-color: var(--white);
    box-shadow: var(--box-shadow);
  }
  .googleMap {
    width: 100%;
    height: 100%;
  }
`;
