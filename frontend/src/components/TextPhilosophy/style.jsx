import styled from "styled-components";

export default styled.section`
  color: var(--white);
  article {
    height: 100%;
    margin-bottom: 3rem;
  }
  .presentationText {
    p {
      font-size: 1.5em;
      margin-top: 2rem;
      text-align: justify;
      padding: 0.6rem;
    }
  }
  .left,
  .right {
    display: flex;
    text-align: justify;
  }
  .right {
    flex-direction: row-reverse;
    display: flex;
  }
  .yellow {
    color: var(--yellow);
    font-size: 2rem;
    text-align: center;
  }
  .playerList {
    font-size: 1.5em;
    padding-top: 2rem;
  }
  .complementary {
    padding-bottom: 2rem;
    font-size: 1.5em;
  }
  .descriptionText {
    width: 50%;
    height: 20%;
    margin-top: 4rem;
    p {
      font-size: 1.5em;

      padding: 2.2em;
    }
  }
  .image {
    display: flex;
  }

  @media screen and (max-width: 700px) {
    .left,
    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .yellow {
      padding: 0.3rem;
    }
    .presentationText {
      p {
        text-align: start;
      }
    }
    .image {
      display: block;
    }

    .descriptionText {
      width: 100%;
      p {
        padding: 0.3em;
        text-align: start;
      }
    }
  }
`;
