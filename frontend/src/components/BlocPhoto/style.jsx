import styled from "styled-components";

export default styled.section`
  width: 90vw;
  height: 100vh;
  margin: auto;
  display: flex;
  position: relative;
  .photoDiv {
    top: 0;
    bottom: 3vh;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .titlePhoto {
    color: white;
    font-size: 2em;
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

  @media screen and (min-width: 640px) {
    .photoDiv {
      position: absolute;
      width: calc(100% / 3 + 2em);
      margin-bottom: 30vh;
    }
    .firstPhoto {
      clip-path: polygon(0 0, 100% 0, 78% 100%, 0% 100%);
    }
    .secondPhoto {
      clip-path: polygon(22% 0, 100% 0, 78% 100%, 0% 100%);
      left: calc((100% / 3) - 2em);
    }
    .thirdPhoto {
      left: calc((2 * 100% / 3) - 4em);
      clip-path: polygon(22% 0, 100% 0, 100% 100%, 0 100%);
    }
  }
  @media screen and (max-width: 640px) {
    flex-flow: column nowrap;
    width: 100vw;
    .photoDiv {
      left: 20;
      height: 18vh;
    }
  }
`;
