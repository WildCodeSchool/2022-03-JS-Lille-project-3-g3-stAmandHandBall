import styled from "styled-components";

export default styled.div`
  width: 75vw;
  display: flex;
  margin: 10vh auto;
  justify-content: center;
  align-items: stretch;
  @media screen and (max-width: 700px) {
    width: 90vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15vh auto;
  }
`;
