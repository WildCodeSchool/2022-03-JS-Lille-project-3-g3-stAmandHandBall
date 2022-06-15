import styled from "styled-components";

export default styled.div`
  background-color: var(--yellow);
  color: var(--white);
  text-shadow: 2px 2px 5px black;
  box-shadow: 2px 2px 5px black;
  height: 20vh;
  width: 80vw;
  position: relative;
  bottom: 10vh;
  margin: auto;
  display: flex;
  .nextMatch {
    color: var(--blue);
    width: 30%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    li:nth-child(2n) {
      font-size: 3em;
    }
    img {
      height: 13vh;
    }
  }

  h3 {
    position: absolute;
    font-size: var(--size-h3);
    margin-top: -1rem;
  }
  .dayTime {
    width: 20%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    color: var(--blue);
  }
  .timer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    ul {
      padding: 1rem;
    }
    span {
      font-size: 2.8rem;
      color: var(--blue);
      margin-top: -3%;
    }
  }
  .numbersCount {
    font-size: 2.8rem;
    color: var(--blue);
    text-align: center;
  }
  .billetDiv {
    display: flex;
    align-items: center;
  }
  .billeterie {
    position: absolute;
    margin-left: -4rem;
    top: 1.2rem;
    width: auto;
    height: 15vh;
  }
  @media screen and (max-width: 700px) {
    height: 20vh;
    width: 100vw;
    position: relative;
    margin-top: 20%;
    h3 {
      margin-top: -0.9rem;
      font-size: 1.5rem;
    }
    .nextMatch {
      border: 1px solid red;
      width: 30%;
      margin-top: 2%;
      display: block;
      li:nth-child(2n) {
        font-size: 1.2rem;
      }
      img {
        height: 8vh;
      }
    }
    .dayTime {
      border: 1px solid green;
      width: 30%;
      justify-content: center;
      font-size: 1rem;
      li {
        font-size: 2.5rem;
      }
    }
    .timer {
      border: 1px solid black;
      width: 50%;
      font-size: 0.8rem;
      display: flex;
      justify-content: center;
      .numbersCount {
        font-size: 2rem;
      }
      span {
        font-size: 1.6rem;
        margin-top: -8%;
      }
      ul {
        padding: 0rem;
      }
    }
    .billeterie {
      display: none;
    }
  }
`;
