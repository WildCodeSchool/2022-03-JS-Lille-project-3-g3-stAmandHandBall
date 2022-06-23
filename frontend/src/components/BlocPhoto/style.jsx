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
  }
  .titlePhoto {
    color: var(--white);
    font-size: 2em;
    text-align: center;
  }
  .firstPhoto {
    background-image: url("https://cdn.pixabay.com/photo/2022/03/08/07/08/water-7055153_960_720.jpg");
  }
  .secondPhoto {
    background-image: url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg");
  }
  .thirdPhoto {
    background-image: url("https://cdn.pixabay.com/photo/2018/08/15/13/10/galaxy-3608029_960_720.jpg");
  }
  .fourthPhoto {
    background-image: url("https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg");
  }
  .fifthPhoto {
    background-image: url("https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg");
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
