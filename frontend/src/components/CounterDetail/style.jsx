import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  .noMobile {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    span {
      font-size: 3em;
      margin-bottom: 15%;
    }
    p {
      font-size: 1.3em;
      margin: 0 2vw;
      height: 8vh;
    }
    .numbersCount {
      font-size: 3.5em;
      margin-bottom: 3vh;
    }
  }
  .mobile {
    display: none;
  }

  @media screen and (max-width: 700px) {
    width: 95%;
    .mobile {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-right: 5vw;
      margin: auto;
      text-shadow: none;

      p {
        font-size: 0.9em;
        margin: 0 0.6vw;
        height: 100%;
      }
      em {
        font-size: 2em;
      }
    }
    .noMobile {
      display: none;
    }
  }
`;
