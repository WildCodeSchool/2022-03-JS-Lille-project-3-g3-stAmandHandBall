import styled from "styled-components";

export default styled.section`
  background: ${(props) => {
    return `url(../../src/assets/images/photos/${props.image}) no-repeat;`;
  }};
  width: 75vw;
  height: 60vh;
  aspect-ratio: 5/1;
  margin: auto;
  margin-right: 10vw;
  margin-bottom: 20vh;

  .cube {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    margin-top: 30vh;
    position: relative;
    width: 30vw;
    height: 55vh;
    background-color: var(--yellow);
    bottom: 8vh;
    right: 5vw;
    box-shadow: var(--box-shadow);

    .title {
      height: 3vh;
      color: var(--white);
      text-shadow: var(--text-shadow);
      font-size: 3em;
      text-align: center;
      position: relative;
      top: -3vh;
    }
    .logo {
      width: 80%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin: auto;
      margin-top: 5vh;
      img {
        width: 5.5vw;
        aspect-ratio: 1/1;
        margin: 0 1vw 0 1vw;
      }
    }
    .hash {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 3vh;
      p {
        font-size: 3em;
        color: var(--blue);
      }
    }
  }

  @media screen and (max-width: 640px) {
    height: 35vh;
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
