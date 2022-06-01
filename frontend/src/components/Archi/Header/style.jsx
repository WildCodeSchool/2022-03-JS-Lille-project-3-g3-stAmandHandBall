import styled from "styled-components";

export default styled.header`
  display: flex;
  background-color: var(--blue);
  background-image: url("@assets/Pictures/test.jpg");
  height: 30vh;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 75%;
  }
  .logo {
    position: absolute;
    z-index: 1;
    width: 10%;
  }
`;
