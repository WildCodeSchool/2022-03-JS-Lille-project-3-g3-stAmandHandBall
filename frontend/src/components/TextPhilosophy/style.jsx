import styled from "styled-components";

export default styled.section`
  color: var(--white);
  article {
    height: 100%;
  }
  .presentationText {
    p {
      font-size: 1.5em;
      margin-top: 2rem;
      text-align: justify;
      /* padding-top: 0rem; */
    }
    p:nth-child(3n) {
      padding-bottom: 2rem;
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
  .descriptionText {
    width: 50%;
    height: 20%;
    margin-top: 4rem;
    p {
      padding: 2.2em;
    }
  }
  .image {
    display: flex;
  }
  .complement {
    font-size: 1.3rem;
    padding-bottom: 2rem;
  }
  .playerList {
    font-size: 1.8rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
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
      padding-bottom: 2rem;
    }
    .complement {
      font-size: 1rem;
      padding-bottom: 2rem;
      text-align: justify;
    }
    .playerList {
      font-size: 1.5rem;
    }
    .presentationText {
      p {
        font-size: 1.2em;
      }
      p:nth-child(3n) {
        padding-bottom: 5rem;
      }
    }
    .image {
      display: block;
    }

    .descriptionText {
      width: 100%;
      p {
        padding: 0.3em;
        text-align: justify;
      }
    }
  }
`;
