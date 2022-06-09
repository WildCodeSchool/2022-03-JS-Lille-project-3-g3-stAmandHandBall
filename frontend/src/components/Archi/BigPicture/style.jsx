import styled from "styled-components";
import Frontimg from "@assets/Pictures/test.jpg";

export default styled.div`
  background-image: url(${Frontimg});
  background-repeat: no-repeat;
  background-position: 50% 15%;
  background-size: cover;
  padding-top: 15vh;
  width: 100vw;
  height: 50vh;

  @media screen and (max-width: 700px) {
    background-position: 50% -100%;
  }
`;
