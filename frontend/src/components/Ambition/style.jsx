import styled from "styled-components";

export default styled.div`
  background: linear-gradient(
    90deg,
    rgba(45, 156, 78, 1) 0%,
    rgba(78, 147, 67, 1) 50%,
    rgba(21, 97, 185, 1) 100%
  );
  height: 50vh;
  .title {
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: var(--white);
    font-size: 3.5vmax;
    font-weight: 900;
    img {
      width: 15%;
      margin-top: -4%;
    }
  }
  .secondtitle {
    height: 20vh;
    color: var(--white);
    font-size: 3.5vmax;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
  }
  @media screen and (max-width: 640px) {
    height: 14vh;
    .title {
      height: 8vh;
      font-size: 2vmax;
      img {
        width: 20%;
      }
    }
    .secondtitle {
      height: 8vh;
      font-size: 2vmax;
    }
  }
`;
