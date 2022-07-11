import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  margin: auto;
  color: var(--white);
  em {
    color: var(--yellow);
  }
  .yellow {
    color: var(--yellow);
  }
  .photos {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    width: 45%;
    margin-bottom: 8vh;
  }
  p {
    margin-bottom: 4vh;
  }
  h4 {
    margin-bottom: 8vh;
  }
  .map {
    display: flex;
    justify-content: center;
  }
  .housing,
  .installations {
    width: 90%;
    margin: auto;
    margin-bottom: 4vh;
  }
  @media screen and (max-width: 700px) {
    width: 90vw;
    .yellow {
      margin: 1vh 0;
    }
    .photos {
      flex-direction: column;
      margin-bottom: 6vh;
    }
    img {
      width: 100%;
      margin-bottom: 2vh;
    }
    h4 {
      margin: -5vh 0 8vh 0;
      text-align: center;
    }
    .map {
      margin-bottom: 5vh;
    }
  }
`;
