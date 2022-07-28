import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  margin: auto;
  @media screen and (max-width: 700px) {
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
