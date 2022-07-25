import styled from "styled-components";

export default styled.div`
  width: 75vw;
  margin: auto;

  .card1 {
    display: flex;
    justify-content: center;
  }
  .cards2and3 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .packPrice {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 700px) {
    width: 90vw;
    .card1 {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
