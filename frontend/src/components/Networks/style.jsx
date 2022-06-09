import styled from "styled-components";

export default styled.section`
  width: 100vw;
  height: 90vh;
  .imgPosition {
    display: flex;
    justify-content: center;
    img {
      width: 60vw;
      height: 80vh;
      margin-top: 5%;
      position: relative;
    }
    .cube {
      position: absolute;
      width: 35vw;
      height: 70vh;
      background-color: var(--yellow);
      left: 10%;
      top: 10%;
      .title {
        height: 5vh;
        text-transform: uppercase;
        color: white;
        font-size: 3.5vmax;
        text-align: center;
        margin-top: -5%;
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
  }

  @media screen and (max-width: 640px) {
    height: 35vh;
    .imgPosition {
      img {
        height: 30vh;
        width: 100vw;
      }
      .cube {
        position: absolute;
        width: 45vw;
        height: 30vh;
        left: 0;
        top: 5%;
        .title {
          font-size: 2vmax;
        }
        .logo {
          img {
            height: 40%;
            width: 27%;
          }
        }
        .hash {
          p {
            font-size: 2vmax;
          }
        }
      }
    }
  }
`;
