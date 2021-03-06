import styled from "styled-components";

export default styled.div`
  background-color: var(--yellow);
  text-shadow: var(--text-shadow);
  box-shadow: var(--box-shadow);
  height: 20vh;
  width: 80vw;
  position: relative;
  bottom: 10vh;
  margin: auto;
  display: flex;
  flex-wrap: nowrap;
  color: var(--blue);

  .informations {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    position: absolute;
    margin-top: -1.7rem;
    left: 1vw;
    color: var(--white);
    font-size: 3em;
  }

  .nextMatch {
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 3em;
      text-align: center;
      margin: 0 1vw;
      line-height: 0.8em;
    }
    .club {
      height: 6vw;
      aspect-ratio: 1/1;
    }
    .club1 {
      background: ${(props) => {
        return `url(../src/assets/images/logos/clubs/${props.club1}.png) no-repeat`;
      }};
      background-size: contain;
      background-position: center;
    }
    .club2 {
      background: ${(props) => {
        return `url(../src/assets/images/logos/clubs/${props.club2}.png) no-repeat`;
      }};
      background-size: contain;
      background-position: center;
    }
  }

  .dayTime {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.5em;
    margin-bottom: 0.5em;
    font-size: 1.5em;

    .day {
      margin: 3vh 0;
      font-size: 3em;
    }
  }
  .billetDiv {
    display: flex;
    align-items: center;
  }
  .boxOffice {
    position: absolute;
    margin-left: -4rem;
    top: 1.2rem;
    width: auto;
    height: 15vh;
    box-shadow: var(--box-shadow);
  }
  @media screen and (max-width: 700px) {
    height: 28vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      margin-top: -1em;
      font-size: 2em;
      position: relative;
    }
    .informations {
      flex-direction: column;
      font-size: 0.8em;
    }
    .nextMatch {
      margin: 0.5vh 0;
      width: 100%;
      .club {
        height: 20vw;
      }
    }
    .dayTime {
      text-shadow: none;
      width: 90%;
      line-height: 1.5em;
      margin: 0.5em 0 1em;
      font-size: 1.2em;

      p {
        margin: 0 1vh;
      }
      .day {
        display: none;
      }
    }
    .billetDiv {
      display: none;
    }
  }
`;
