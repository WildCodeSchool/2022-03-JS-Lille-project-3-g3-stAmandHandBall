import styled from "styled-components";

export default styled.section`
  position: relative;
  width: 100vw;
  margin: auto;
  display: flex;
  .photoDiv {
    position: absolute;
    height: 25vh;
    width: calc(97% / 2 + 2em);
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: -70vh;
  }
  .titlePhoto {
    color: white;
    font-size: 2em;
  }
  .fourthPhoto {
    background-image: url("https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg");
  }
  .fifthPhoto {
    background-image: url("https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg");
  }
  @media screen and (min-width: 640px) {
    .fourthPhoto {
      clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
    }
    .fifthPhoto {
      clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
      left: calc((100% / 2) - 3em);
    }
  }
  @media screen and (max-width: 640px) {
    flex-flow: column nowrap;
    width: 100vw;
    .photoDiv {
      width: 100vw;
      left: 20;
      height: 18vh;
    }
    .fourthPhoto {
      margin-top: -28.6vh;
    }
    .fifthPhoto {
      margin-top: -46.6vh;
    }
  }
`;
