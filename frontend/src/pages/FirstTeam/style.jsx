import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75vw;
  margin: auto;
  .rowCard {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  @media screen and (max-width: 700px) {
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
