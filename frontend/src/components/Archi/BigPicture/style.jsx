import styled from "styled-components";

export default styled.section`
  background: ${(props) => {
    return `url(../../src/assets/images/backgrounds/${props.img}.jpg) no-repeat;`;
  }};
  margin-top: 15vh;
  background-size: cover;
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: right;
  text-shadow: var(--text-shadow);
  background-position: center;
  .blocInfo {
    text-shadow: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f2f6fa85;
    width: 25vw;
    color: var(--blue);
    padding-top: 4vh;
    text-align: center;
    h3 {
      font-size: 2rem;
      padding-bottom: 3vh;
    }
    h6 {
      font-size: 1.5rem;
      padding: 0 2vw 0 2vw;
      line-height: 1.5rem;
    }
    p {
      font-size: 1.1rem;
      line-height: 1.3rem;
      padding: 0 2vw 3vh 2vw;
    }
  }
  .none {
    display: none;
  }
  .calendar {
    background-color: var(--blue-opacity);
    width: 100%;
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    h2 {
      color: var(--white);
      font-size: 4rem;
      margin: 5vh;
    }
    .meeting {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .club1 {
      background: ${(props) => {
        return `url(../src/assets/images/logos/clubs/${props.club1Img}) no-repeat`;
      }};
      background-size: contain;
      background-position: center;
      height: 22vh;
      aspect-ratio: 1/1;
    }
    .dash {
      width: 3vw;
      aspect-ratio: 1/0.3;
      background-color: var(--white);
      margin: 2vw;
      box-shadow: var(--box-shadow);
    }
    .club2 {
      background: ${(props) => {
        return `url(../src/assets/images/logos/clubs/${props.club2Img}) no-repeat`;
      }};
      background-size: contain;
      background-position: center;
      height: 22vh;
      aspect-ratio: 1/1;
    }
    .informations {
      width: 60%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
    }
    .date,
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 15vw;
      aspect-ratio: 3/1;
      background-color: var(--yellow);
      color: var(--blue);
      font-size: 1.4rem;
      line-height: 2rem;
      box-shadow: var(--box-shadow);
    }
  }
  @media screen and (max-width: 700px) {
    height: 60vh;
    margin-top: 10vh;
    justify-content: center;
    .calendar {
      height: 60vh;
      h2 {
        width: 80%;
        font-size: 3rem;
        margin: 4vh 0 2vh 0;
        text-align: center;
      }
      .club1 {
        height: 16vh;
      }
      .dash {
        width: 5vw;
        aspect-ratio: 1/0.3;
      }
      .club2 {
        height: 16vh;
      }
      .informations {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        margin: 3vh 0 3vh 0;
      }
      .date,
      .info {
        width: 45%;
        aspect-ratio: 3/1;
        font-size: 1.1rem;
      }
    }
    .blocInfo {
      display: none;
    }
  }
`;
