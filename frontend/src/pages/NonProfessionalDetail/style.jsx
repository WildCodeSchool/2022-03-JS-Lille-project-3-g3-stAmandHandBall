import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: auto;

  .cardAndPhoto {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10vh;

    .teamImg {
      width: 70%;
    }
  }

  @media screen and (max-width: 700px) {
    width: 90vw;

    .cardAndPhoto {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .teamImg {
        width: 100%;
      }
    }
  }
`;
