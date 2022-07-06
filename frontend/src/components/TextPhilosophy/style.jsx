import styled from "styled-components";

export default styled.section`
  color: var(--white);
  .presentationText {
    p {
      font-size: 1.5rem;
      margin-top: 2rem;
      text-align: justify;
    }
  }
  p {
    margin: 1rem;
    font-size: 1.5rem;
  }
  .yellow {
    color: var(--yellow);
    font-size: 2rem;
  }
  .image {
    display: flex;
  }
  .left,
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
  }

  .right {
    flex-direction: row-reverse;
  }
  .descriptifText {
    width: 50vw;
    height: 40vh;
    font-size: 1.5em;
  }
  .playerList {
    font-size: 2rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
  }
  .image,
  .descriptifText {
    margin: 0.5rem;
  }
  @media screen and (max-width: 700px) {
    .left,
    .right {
      display: block;
    }
    .presentationText {
      p {
        font-size: 1rem;
        margin-top: 2rem;
      }
    }
    p {
      font-size: 1rem;
      text-align: justify;
    }
    .image {
      justify-content: center;
    }
    .descriptifText {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 20vh;
      margin: 0;
      h3 {
        text-align: center;
      }
    }
    article {
      margin-top: 1rem;
    }
    .playerList {
      font-size: 1rem;
    }
  }
`;
