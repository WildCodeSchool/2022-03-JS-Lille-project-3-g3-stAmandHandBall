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
    border: 2px solid yellowgreen;
    color: var(--blue);
    width: 30%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    text-align: center;
  }
  .dayTime {
    border: 2px solid yellowgreen;
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
    border: 2px solid green;
    width: 50%;

    ul {
      padding: 1rem;
    }
    span {
      font-size: 2.8rem;
      color: var(--blue);
    }
  }
  .numbersCount {
    font-size: 2.8rem;
    color: var(--blue);
    text-align: center;
  }
`;
