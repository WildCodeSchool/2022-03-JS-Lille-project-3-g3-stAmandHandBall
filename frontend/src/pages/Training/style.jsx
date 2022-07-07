import styled from "styled-components";

export default styled.div`
  li {
    font-size: 1em;
    list-style-image: ${(props) => {
      return `url(${props.picto})`;
    }};
  }
  a {
    color: white;
    font-style: italic;
  }
  display: flex;
  flex-direction: column;
  width: 75vw;
  margin: auto;
  color: var(--white);
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
  }
  p {
    margin-bottom: 4vh;
  }
  h4 {
    margin-bottom: 8vh;
  }
  .operation,
  .formationList {
    width: 90%;
    margin: auto;
    margin-bottom: 4vh;
  }
  @media screen and (max-width: 700px) {
    .yellow {
      margin: 1vh 0;
    }
    h4 {
      margin: -5vh 0 8vh 0;
      text-align: center;
    }
  }
`;
