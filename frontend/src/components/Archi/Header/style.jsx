import styled from "styled-components";
import Frontimg from "@assets/Pictures/test.jpg";

export default styled.header`
  height: 600vh;

  .baseHeader {
    background-image: url(${Frontimg});
    background-repeat: no-repeat;
    background-position: 50% 15%;
    background-size: cover;
    padding-top: 15vh;
    width: 100vw;
    height: 45vh;
  }
  .logoDesktop {
    left: 0;
    position: absolute;
    position: fixed;
    z-index: 1;
    width: 10%;
  }
  .logoMobile {
    display: none;
  }
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30vh;

    .visible {
      display: none;
    }
    .logoMobile {
      display: block;
      position: absolute;
      z-index: 1;
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
