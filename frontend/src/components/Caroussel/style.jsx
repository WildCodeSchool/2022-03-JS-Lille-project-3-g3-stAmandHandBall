import styled from "styled-components";

export default styled.div`
  height: 100%;
  display: flex;
  .carouselContainer {
    display: flex;
    justify-content: space-around;
    margin: auto 0;
    height: 70vh;
    width: 100vw;
  }
  button {
    border: 0;
    font-size: 15em;
    background-color: transparent;
  }
  @media screen and (max-width: 700px) {
    .carouselContainer {
      margin-top: 10%;
    }
    button {
      font-size: 2rem;
    }
  }
`;
