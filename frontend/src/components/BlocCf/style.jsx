import styled from "styled-components";

export default styled.section`
  position: relative;
  width: 90vw;
  margin: auto;
  display: flex;
  /* margin-top: 15rem; */

  .photoDiv {
    position: absolute;
    height: 25vh;
    width: calc(97% / 2 + 2em);
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: -30vh;
  }
  .titlePhoto {
    color: white;
    font-size: 2em;
  }
  .fourthPhoto {
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
    background-image: url("https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg");
  }
  .fifthPhoto {
    background-image: url("https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg");
    clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
    left: calc((2 * 100% / 4) - 3em);
  }
  @media screen and (max-width: 640px) {
  }
`;
