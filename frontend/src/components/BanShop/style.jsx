import styled from "styled-components";

export default styled.section`
  background: ${(props) => {
    return `url(../src/assets/images/backgrounds/${props.img}) no-repeat`;
  }};
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  aspect-ratio: 9/3.5;
  margin: auto;
  a {
    text-decoration: none;
  }
  .title {
    text-align: center;
    color: var(--yellow);
    text-shadow: var(--text-shadow);
    h2 {
      font-size: 3.5em;
      line-height: 1.5em;
    }
    h3 {
      font-size: 1.9em;
      margin-top: 1vh;
    }
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
    height: 25vh;
    background-size: contain;
    background-position: center;
    margin-top: -5vh;
    margin-bottom: -21vh;
    .title {
      h2 {
        font-size: 1.5em;
      }
      h3 {
        font-size: 1em;
      }
    }
  }
`;
