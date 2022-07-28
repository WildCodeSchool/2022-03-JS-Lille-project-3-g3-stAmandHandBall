import styled from "styled-components";

export default styled.section`
  width: 80vw;
  height: 50vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  a {
    text-decoration: none;
    text-shadow: var(--text-shadow);
  }
  .titlePhoto {
    color: var(--white);
    font-size: 2em;
    text-align: center;
  }
  .firstPhoto {
    background: ${(props) => {
      return `url(${props.imgCoachs}) no-repeat`;
    }};
  }
  .secondPhoto {
    background: ${(props) => {
      return `url(${props.imgNf1}) no-repeat`;
    }};
  }
  .thirdPhoto {
    background: ${(props) => {
      return `url(${props.imgNonProfessional}) no-repeat`;
    }};
  }
  .fourthPhoto {
    background: ${(props) => {
      return `url(${props.imgTerritoriale}) no-repeat`;
    }};
  }
  .fifthPhoto {
    background: ${(props) => {
      return `url(${props.imgFormation}) no-repeat`;
    }};
  }
  .photoDiv {
    background-size: cover;
    background-position: center;
  }
  @media screen and (min-width: 700px) {
    .photoDiv {
      height: 25vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .firstPart,
    .secondPart {
      width: 100%;
      height: 25vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .firstPart {
      margin-bottom: 2vh;
    }
    .firstPhoto {
      position: relative;
      left: 5vw;
      width: 30vw;
      clip-path: polygon(0 0, 30vw 0, 24vw 25vh, 0 25vh);
    }
    .secondPhoto {
      width: 30vw;
      clip-path: polygon(6vw 0, 30vw 0, 24vw 25vh, 0 25vh);
    }
    .thirdPhoto {
      position: relative;
      right: 5vw;
      width: 30vw;
      clip-path: polygon(6vw 0, 30vw 0, 30vw 25vh, 0 25vh);
    }
    .fourthPhoto {
      position: relative;
      left: 5vw;
      width: 42.5vw;
      clip-path: polygon(0 0, 42.5vw 0, 36.5vw 25vh, 0 25vh);
    }
    .fifthPhoto {
      position: relative;
      right: 5vw;
      width: 42.5vw;
      clip-path: polygon(6vw 0, 42.5vw 0, 42.5vw 25vh, 0 25vh);
    }
  }
  @media screen and (max-width: 700px) {
    margin-top: -2vh;
    width: 100vw;
    height: 90vh;
    .photoDiv {
      height: 25vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .firstPart,
    .secondPart {
      width: 100vw;
      height: 54vh;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .secondPart {
      margin-bottom: 0;
      height: 36vh;
    }
    .firstPhoto {
      position: static;
      left: 0;
      width: 100vw;
      height: 18vh;
    }
    .secondPhoto {
      position: static;
      width: 100vw;
      height: 18vh;
    }
    .thirdPhoto {
      position: static;
      right: 0;
      width: 100vw;
      height: 18vh;
    }
    .fourthPhoto {
      position: static;
      left: 0;
      width: 100vw;
      height: 18vh;
    }
    .fifthPhoto {
      position: static;
      right: 0;
      width: 100vw;
      height: 18vh;
    }
  }
`;
