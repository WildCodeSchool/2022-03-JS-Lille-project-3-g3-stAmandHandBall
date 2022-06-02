import styled from "styled-components";
import Frontimg from "@assets/Pictures/test.jpg";

export default styled.header`
  height: 60vh;

  .Navbar {
    height: 15vh;
  }
  .baseHeader {
    background-image: url(${Frontimg});
    background-repeat: no-repeat;
    background-position: 100% 30%;
    background-size: cover;
    width: 100vw;
    height: 45vh;
  }
  .logo {
    position: absolute;
    z-index: 1;
    width: 10%;
  }
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 55vh;

    .visible {
      display: none;
    }
    .logo {
      width: 20%;
    }
    .baseHeader {
      background-position: 50% 30%;
    }
  }
`;
