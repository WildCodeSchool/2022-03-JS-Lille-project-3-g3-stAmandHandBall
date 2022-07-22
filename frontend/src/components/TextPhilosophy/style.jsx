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

  /* 
    p:nth-child(3) {
      margin: 1rezm;
    }
  }
  h3 {
    margin-left: 1rem;
  }
  p {
    margin: 1rem;
    font-size: 1.5rem;
  }
  .yellow {
    color: var(--yellow);
    font-size: 2rem;
  }
 
  .descriptionText {
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
  }*/

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
    /*
    .yellow {
      text-align: center;
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
    .descriptionText {
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
    */
  }
`;
