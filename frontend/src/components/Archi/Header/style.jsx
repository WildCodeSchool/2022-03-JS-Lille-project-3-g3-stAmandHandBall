import styled from "styled-components";

export default styled.header`
  height: 15vh;
  width: 100vw;
  border: solid 2px yallow;
  top: 0;
  position: fixed;
  .logoDesktop {
    left: 0;
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
    .visible {
      display: none;
    }
    .logoMobile {
      padding-top: 3vw;
      width: 20vw;
      display: block;
      position: relative;
    }
    .logoDesktop {
      display: none;
    }
  }
`;
