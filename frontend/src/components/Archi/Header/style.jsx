import styled from "styled-components";

export default styled.header`
  display: flex;
  background-color: var(--blue);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 100%;
  }
  .logo {
    position: absolute;
    z-index: 1;
    width: 10%;
  }
`;
