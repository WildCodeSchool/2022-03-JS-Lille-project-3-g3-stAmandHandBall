import styled from "styled-components";

export default styled.div`
  width: 75vw;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: stretch;

  .contact {
    width: 35vw;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  /* .arrow {
    position: absolute;
    width: 10vw;
    height: 100%;
  } */
  .informations {
    width: 35vw;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
  }
  .map {
    width: 35vw;
    aspect-ratio: 1/1;
    background-color: white;
  }
`;

// .left {
//   width: 5vw;
//   min-height: 5vw;
//   background: url("../src/assets/pictures/arrow.svg") no-repeat;
//   background-size: contain;
//   background-position: left;
//   transform: rotate(90deg);
// }
// .right {
//   width: 5vw;
//   min-height: 5vw;
//   background: url("../src/assets/pictures/arrow.svg") no-repeat;
//   background-size: contain;
//   background-position: right;
//   transform: rotate(-90deg);
// }
// .line {
//   width: 100%;
//   border: 1px var(--yellow) solid;
//   margin: -2vw;
// }
