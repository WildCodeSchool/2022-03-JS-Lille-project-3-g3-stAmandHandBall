import styled from "styled-components";

export default styled.section`
  width: 90vw;
  margin: auto;
  display: flex;
  position: relative;
  height: 60vh;
  border: 5px solid green;
  .photoDiv {
    position: absolute;
    bottom: 3vh;
    height: 25vh;
    width: calc(100% / 3 + 2em);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 30vh;
  }
  .titlePhoto {
    color: white;
    font-size: 2em;
  }
  .firstPhoto {
    clip-path: polygon(0 0, 100% 0, 78% 100%, 0% 100%);
    background-image: url("https://cdn.pixabay.com/photo/2022/03/08/07/08/water-7055153_960_720.jpg");
  }
  .secondPhoto {
    clip-path: polygon(22% 0, 100% 0, 78% 100%, 0% 100%);
    left: calc((100% / 3) - 2em);
    background-image: url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg");
  }
  .thirdPhoto {
    left: calc((2 * 100% / 3) - 4em);
    clip-path: polygon(22% 0, 100% 0, 100% 100%, 0 100%);
    background-image: url("https://cdn.pixabay.com/photo/2018/08/15/13/10/galaxy-3608029_960_720.jpg");
  }
  @media screen and (max-width: 640px) {
    .photoDiv {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      width: calc(100% / 3 + 4em);
    }
  }
`;
