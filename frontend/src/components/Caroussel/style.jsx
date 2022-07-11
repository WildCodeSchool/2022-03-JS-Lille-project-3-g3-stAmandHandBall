import styled from "styled-components";

export default styled.div`
  display: flex;
  .carouselContainer {
    display: flex;
    justify-content: space-around;
    margin: auto;
    height: 70vh;
    width: 90vw;
  }
  button {
    border: 0;
    font-size: 15em;
    color: var(--white);
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
