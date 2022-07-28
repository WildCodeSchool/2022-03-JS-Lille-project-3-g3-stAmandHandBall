import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  margin: auto;
  color: var(--white);
  li {
    font-size: 1em;
    list-style-image: ${(props) => {
      return `url(${props.picto})`;
    }};
  }
  a {
    color: var(--white);
    font-style: italic;
  }
  em {
    color: var(--yellow);
  }
  .yellow {
    color: var(--yellow);
    font-size: 1.5em;
  }
  img {
    width: 100%;
    margin-bottom: 8vh;
    margin-top: 8vh;
  }
  p {
    margin-bottom: 4vh;
  }
  h4 {
    margin-bottom: 8vh;
  }
  ul {
    margin-top: 3vh;
    margin-bottom: 6vh;
  }
  .operation,
  .formationList {
    width: 90%;
    margin: auto;
    margin-bottom: 12vh;
    h4 {
      margin-bottom: 0vh;
    }
  }
  @media screen and (max-width: 700px) {
    width: 85vw;
    .introduction {
      text-align: center;
    }
    .yellow {
      margin: 1vh 0;
    }
    ul {
      margin-bottom: 0vh;
    }
    img {
      margin-bottom: 4vh;
      margin-top: 4vh;
    }
  }
`;
