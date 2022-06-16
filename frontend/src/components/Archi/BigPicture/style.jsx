import styled from "styled-components";

export default styled.section`
  background-color: var(--white-opacity);

  background: ${(props) => {
    return `url(../../src/assets/Pictures/backgrounds/${props.img}.jpg) no-repeat;`;
  }};

  background-size: cover;
  width: 100vw;
  height: 65vh;
  display: flex;
  justify-content: right;
  text-shadow: var(--text-shadow);

  .blocInfo {
    text-shadow: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f2f6fa85;
    width: 25vw;
    color: var(--blue);
    padding-top: 7vh;
    text-align: center;
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.2rem;
      padding: 4vw;
    }
  }
  .none {
    display: none;
  }
  .calendar {
    background-color: var(--blue-opacity);
    padding: 0 20vw 0 20vw;
    width: 100vw;
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
        return `url(../src/assets/pictures/cards/calendar/${props.club1}.png) no-repeat`;
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
        return `url(../src/assets/pictures/cards/calendar/${props.club2}.png) no-repeat`;
      }};
      background-size: contain;
      background-position: center;
      height: 22vh;
      aspect-ratio: 1/1;
    }
    .informations {
      width: 100%;
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
      font-size: 1.5rem;
      line-height: 1.8rem;
      box-shadow: var(--box-shadow);
    }
  }

  @media screen and (max-width: 700px) {
    background-position: 50% -100%;
  }
`;
