import styled from "styled-components";

export default styled.header`
  height: 15vh;

  .logoDesktop {
    left: 0;
    position: absolute;
    position: fixed;
    width: 10%;
  }
  .logoMobile {
    display: none;
  }
  @media screen and (max-width: 700px) {
    height: 0vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: 30vh; */

    .visible {
      display: none;
    }
    .logoMobile {
      display: block;
      position: absolute;
      width: 20%;
    }
    .logoDesktop {
      display: none;
    }
    .baseHeader {
      background-position: 50% -100%;
    }
  }
`;
