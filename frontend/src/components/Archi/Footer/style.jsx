import styled from "styled-components";

export default styled.footer`
  background-color: var(--yellow);
  height: 50vh;
  position: relative;
  bottom: 0;
  overflow: hidden;
  display: flex;
  .imgPosition {
    width: 55vw;
    height: 125vh;
    img {
      width: 100%;
      height: 100%;
      margin-left: -32%;
      margin-top: -8%;
    }
  }

  .buttonPosition {
    width: 100vw;
    height: 20vh;
    position: absolute;
    text-align: center;
    button {
      height: 55%;
      width: 45vw;
      border: none;
      background-color: var(--blue);
      box-shadow: 0rem 0.3rem 0.3rem black;
      margin-top: 1rem;
      cursor: pointer;
      p {
        color: var(--white);
        font-size: 3.5vmax;
        font-weight: 900;
        text-transform: uppercase;
      }
    }
  }
  .logo {
    position: absolute;
    text-align: center;
    width: 100vw;
    height: 28vh;
    margin-top: 15vh;
    display: flex;
    justify-content: space-around;
  }
  .reve {
    position: absolute;
    width: 100vw;
    text-align: center;
    bottom: 0;
    color: var(--white);
    text-transform: uppercase;
    font-size: 3.5vmax;
    font-weight: 900;
  }
  @media screen and (max-width: 640px) {
    height: 20vh;
    .imgPosition {
      width: 50vw;
      img {
        height: 30%;
        margin-left: -25%;
        margin-top: -10%;
      }
    }
    .buttonPosition {
      height: 8vh;
      button {
        margin-top: 0.5rem;
        p {
          font-size: 2vmax;
        }
      }
    }
    .logo {
      margin-top: 3rem;
      height: 11vh;
    }
    .reve {
      font-size: 2vmax;
    }
  }
`;
