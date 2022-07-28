import styled from "styled-components";

export default styled.div`
  background: linear-gradient(
    90deg,
    rgba(45, 156, 78, 1) 0%,
    rgba(78, 147, 67, 1) 50%,
    rgba(21, 97, 185, 1) 100%
  );
  a {
    text-decoration: none;
  }
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
      margin: -3vh 1vw 0 1vw;
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
  .mobile {
    display: none;
  }
  @media screen and (max-width: 640px) {
    margin-top: -26vh;
    height: 16vh;
    .title {
      height: 8vh;
      font-size: 2vmax;
      img {
        width: 20%;
      }
    }
    .noMobile {
      display: none;
    }
    .mobile {
      display: flex;
      justify-content: center;
      font-size: 2.2vmax;
      color: var(--white);
      font-weight: 900;
      text-align: center;
    }
    .secondtitle {
      height: 4vh;
      font-size: 2.2vmax;
    }
  }
`;
