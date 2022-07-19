import styled from "styled-components";

export default styled.div`
  background-color: var(--yellow);
  color: var(--white);
  text-shadow: 2px 2px 5px black;
  box-shadow: 2px 2px 5px black;
  height: auto;
  width: 11vw;
  position: relative;
  left: 2.5rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  text-align: center;
  @media screen and (max-width: 700px) {
    width: 50vw;
    height: 3vh;
    margin: 0.7rem;
    left: 5rem;
  }
`;
