import styled from "styled-components";

export default styled.section`
  width: 100vw;
  height: 90vh;
  .imgPosition {
    margin-left: 10%;
    position: relative;
    img {
      width: 45vw;
      height: 75vh;
    }
  }
  .cube {
    width: 45vw;
    height: 69vh;
    background-color: var(--yellow);
    margin-top: -35%;
    margin-left: 46%;
    .hash {
      height: 40%;
      display: flex;
      .vide {
        width: 35vw;
      }
      p {
        margin-top: 10%;
        font-size: 1.3vmax;
        color: var(--blue);
        line-height: 140%;
      }
    }
  }
  .title {
    color: white;
    font-size: 3.5vmax;
    text-align: center;
    position: relative;
    top: -75%;
    left: 10%;
  }

  @media screen and (max-width: 700px) {
    margin-top: 40%;
    .imgPosition {
      margin-left: 0;
      img {
        height: 25vh;
        width: 60vw;
      }
    }
    .cube {
      width: 50vw;
      height: 23vh;
      margin-top: -52%;
      margin-left: 50%;
      .hash {
        .vide {
          width: 55vw;
        }
        p {
          font-size: 1vmax;
        }
      }
    }
    .title {
      color: white;
      font-size: 3.5vmax;
      text-align: center;
      position: relative;
      top: -25%;
      left: -10%;
      margin-left: 40%;
    }
  }
`;
