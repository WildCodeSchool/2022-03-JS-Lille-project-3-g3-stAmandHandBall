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
  justify-content: center;
  align-items: center;
  font-size: 3.2em;
  text-align: center;
  h1 {
    text-transform: uppercase;
  }

    @media screen and (max-width: 700px) {
      h1 {
        line-height: 0.8em;
      }
    }
  }
`;
