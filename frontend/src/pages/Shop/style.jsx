import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 75vw;
  margin: auto;
  @media screen and (max-width: 700px) {
    width: 90vw;
  }
`;
