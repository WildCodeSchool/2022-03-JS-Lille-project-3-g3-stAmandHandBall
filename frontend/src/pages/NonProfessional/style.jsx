import styled from "styled-components";

export default styled.div`
  width: 50vw;
  margin: auto;
  text-align: center;
  color: var(--white);
  display: flex;
  flex-direction: column;
  margin-bottom: 8vh;
  border: 1px var(--white) solid;
  .title,
  .subtitle {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    height: 8vh;
  }
  .subtitle {
    height: 6vh;
    border-bottom: 1px var(--white) solid;
    border-top: 1px var(--white) solid;

    background-color: #ffffff4e;
  }
  .allDivisions {
    width: 100%;
    display: flex;
    justify-content: stretch;
    align-items: flex-start;
  }
  .division {
    width: calc(100% / 3);
  }
  a {
    text-decoration: none;
    color: var(--yellow);
    line-height: 1.5em;
  }
  a:hover {
    color: var(--white);
  }
  @media screen and (max-width: 700px) {
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: center;
    .subtitle {
      font-size: 0.8rem;
    }
  }
`;
