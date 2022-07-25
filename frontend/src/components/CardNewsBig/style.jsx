import styled from "styled-components";

export default styled.div`
  width: 100%;
  position: relative;
  top: -35vh;
  margin-bottom: -20vh;
  .text {
    height: 45vh;
    color: var(--blue);
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
  }
  .textContainer {
    background-color: var(--yellow);
    width: 42%;
    height: 90%;
    padding: 5vh 1vw 15vh 25vw;
  }
  h2 {
    color: var(--white);
    text-shadow: var(--text-shadow);
    margin-bottom: 3vh;
    font-size: 3em;
    text-align: left;
  }
  .size {
    height: 14vw;
    overflow: hidden;
  }
  img {
    width: 55%;
    position: relative;
    top: 40vh;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    position: static;
    margin-bottom: 25vh;
    margin-top: -20vh;
    .text {
      height: 20vh;
    }
    h2 {
      font-size: 2em;
    }
    .textContainer {
      width: 80%;
      height: 90%;
      padding: 2vh 1vw 10vh 5vw;
    }
    .size {
      height: 25vw;
      overflow: hidden;
    }
    img {
      width: 80%;
      top: 42vh;
    }
  }
`;
