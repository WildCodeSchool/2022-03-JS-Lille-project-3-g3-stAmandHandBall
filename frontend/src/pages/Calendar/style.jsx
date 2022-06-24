import styled from "styled-components";

export default styled.div`
  width: 60vw;
  margin: auto;
  .month {
    margin-bottom: 10vh;
  }
  @media screen and (max-width: 700px) {
    width: 90vw;
  }
  .month {
    margin-bottom: 12vh;
  }
`;
