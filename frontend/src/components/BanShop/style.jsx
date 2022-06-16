import styled from "styled-components";

export default styled.section`
  width: 80vw;
  height: 60vh;
  background-color: white;
  margin: auto;
  overflow: hidden;
  .imgPosition {
    text-align: center;
    img {
      width: 38%;
      height: 38%;
      opacity: 0.5;
    }
  }
  .title {
    position: relative;
    top: -75%;
    text-align: center;
    height: 25vh;
    color: var(--yellow);
    font-weight: 900;
    text-transform: uppercase;
    h1 {
      font-size: 3.5vmax;
      line-height: 150%;
    }
    h2 {
      font-size: 1.9vmax;
      margin-top: 2%;
    }
  }
  .mainImages {
    height: 75vh;
    position: relative;
    top: -133%;
    img {
      position: absolute;
      width: 26%;
    }
    .img2 {
      margin-left: 80%;
    }
    .img1 {
      margin-left: 66%;
    }
    .img3 {
      width: 33%;
      margin-top: -5%;
    }
  }
  @media screen and (max-width: 640px) {
  }
`;
