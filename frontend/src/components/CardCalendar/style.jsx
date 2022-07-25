import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-shadow: 2px 2px 5px black;
  margin-bottom: 2vw;
  .none {
    display: none;
  }
  .firstPart {
    width: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .day {
    width: 4vw;
    aspect-ratio: 1/1;
    background-color: var(--yellow);
    box-shadow: 2px 2px 5px black;
    display: none;
    display: ${(props) => props.day && "flex"};
    justify-content: center;
    align-items: center;
  }
  h3 {
    color: var(--white);
    font-size: 2em;
  }
  .cup {
    width: 4vw;
    background-size: contain;
    background-position: center;
  }
  .noDayJ {
    width: 14vw;
  }
  .date {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      color: var(--yellow);
    }
  }
  .firstClub,
  .secondClub {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .place {
    width: 4vw;
    aspect-ratio: 1/1;
  }
  .club {
    width: 4vw;
    aspect-ratio: 1/1;
  }
  .club1 {
    background: ${(props) => {
      return `url(../src/assets/images/logos/clubs/${props.club1Img}) no-repeat`;
    }};
    background-size: contain;
    background-position: center;
  }
  .club2 {
    background: ${(props) => {
      return `url(../src/assets/images/logos/clubs/${props.club2Img}) no-repeat`;
    }};
    background-size: contain;
    background-position: center;
  }
  .result {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 2vw;
  }
  .meeting {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    color: var(--white);
    h3 {
      margin: 0 10px 0 10px;
    }
  }
  a {
    background-color: var(--yellow);
    margin: 1vw;
    color: var(--white);
    height: 2em;
    display: inline-block;
    h3 {
      margin-left: 10px;
      margin-right: 10px;
      position: relative;
      bottom: 1vw;
    }
  }
  @media screen and (max-width: 700px) {
    background-color: var(--white-opacity);
    padding: 2px 10px 2px 10px;
    margin: auto;
    width: 90%;
    flex-direction: column;
    margin-bottom: 5vh;
    .firstPart {
      margin-top: 2vh;
      width: 100%;
    }
    .day {
      width: 12vw;
    }
    .cup {
      width: 12vw;
    }
    .noDayJ {
      width: 45vw;
      margin-left: 6vw;
    }
    .place {
      width: 12vw;
    }
    .club {
      width: 15vw;
      margin-bottom: 2vh;
    }
    .secondClub {
      display: flex;
      flex-direction: column;
    }
    .firstClub {
      display: flex;
      flex-direction: column-reverse;
    }
    .result {
      width: 100%;
    }
    .meeting {
      margin-top: 2vh;
      margin-bottom: 5vh;
    }
    h3 {
      font-size: 1.5rem;
      text-align: center;
    }
    .meeting > h3 {
      margin-bottom: 6vh;
    }
    a {
      margin-bottom: 5vh;
    }
  }
`;
