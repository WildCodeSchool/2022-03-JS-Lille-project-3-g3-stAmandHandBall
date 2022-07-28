import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  margin: auto;
  color: var(--white);
  em,
  a {
    color: var(--yellow);
  }
  img {
    width: 100%;
    margin: 8vh 0 2vh 0;
  }
  p {
    margin-bottom: 4vh;
  }
  h4 {
    margin-bottom: 4vh;
  }
  @media screen and (max-width: 700px) {
    width: 85vw;

    .yellow {
      margin: 1vh 0;
    }
    h4 {
      margin: -5vh 0 5vh 0;
      text-align: left;
    }
    img {
      margin: 2vh 0 4vh 0;
    }
  }
`;
