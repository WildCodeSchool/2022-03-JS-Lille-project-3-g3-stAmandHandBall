import styled from "styled-components";

export default styled.section`
  display: flex;
  flex-direction: column;
  width: 75vw;
  margin: auto;
  margin-bottom: 8vh;
  color: var(--white);
  .logo {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin: 1vh 0 12vh 0;
  }
  img {
    width: 15%;
    aspect-ratio: 3/2;
    object-fit: contain;
    background-position: center;
    margin: 2.5%;
  }
  p {
    margin-bottom: 3vh;
  }
  p:first-of-type {
    margin-top: 5vh;
  }
  a {
    color: var(--yellow);
  }
  @media screen and (max-width: 700px) {
    width: 80vw;
    margin-bottom: 6vh;
    img {
      width: 28%;
      aspect-ratio: 3/2;
      object-fit: contain;
      background-position: center;
      margin: 2.5%;
    }
    .logo {
      margin: 2vh 0 10vh 0;
    }
    p {
      margin-bottom: 3vh;
    }
    p:first-of-type {
      margin-top: 2vh;
    }
  }
`;
