import styled from "styled-components";

export default styled.div`
  background: linear-gradient(
    90deg,
    rgba(45, 156, 78, 1) 0%,
    rgba(78, 147, 67, 1) 50%,
    rgba(21, 97, 185, 1) 100%
  );
  width: 100vw;
  height: 50vh;
  .title {
    width: 100vw;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: var(--white);
    font-size: 3.5vmax;
    font-weight: 900;
  }
`;
