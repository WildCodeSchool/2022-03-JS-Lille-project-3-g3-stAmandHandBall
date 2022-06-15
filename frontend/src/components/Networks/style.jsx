import styled from "styled-components";

export default styled.section`
  height: 90vh;
  margin-bottom: 5%;
  margin-top: 10%;
  .imgPosition {
    display: flex;
    justify-content: center;
    img {
      width: 60vw;
      height: 80vh;
      margin-top: 5%;
      position: relative;
    }
  }
  .cube {
    position: relative;
    width: 35vw;
    height: 70vh;
    background-color: var(--yellow);
    left: 10%;
    top: -100%;
    .title {
      height: 5vh;
      text-transform: uppercase;
      color: white;
      font-size: 3.5vmax;
      text-align: center;
      margin-top: 5%;
      position: relative;
      top: -4%;
    }
    .logo {
      height: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin: 6%;
      margin-top: 8%;
      img {
        height: 45%;
        width: 20%;
        margin-right: 6%;
      }
    }
    .hash {
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      p {
        font-size: 3.5vmax;
        color: var(--blue);
      }
    }
  }

  @media screen and (max-width: 640px) {
    height: 35vh;
    .imgPosition {
      img {
        height: 30vh;
        width: 100vw;
      }
    }
    .cube {
      position: relative;
      width: 45vw;
      height: 25vh;
      left: 0;
      top: -95%;
      .title {
        font-size: 2vmax;
      }
      .logo {
        img {
          height: 40%;
          width: 25%;
          margin-top: -15%;
        }
      }
      .hash {
        p {
          font-size: 2vmax;
        }
      }
    }
  }
`;
