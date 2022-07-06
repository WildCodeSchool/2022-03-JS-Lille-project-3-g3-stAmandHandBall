import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80vw;
  margin: auto;
  margin-bottom: 10vh;
  @media screen and (max-width: 700px) {
    width: 90vw;
    flex-direction: column;
    margin-bottom: 20vh;
  }
`;
