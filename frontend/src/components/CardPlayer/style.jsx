import styled from "styled-components";

export default styled.div`
  margin-top: -5vh;
  .number {
    width: 6.8vw;
    aspect-ratio: 1/1.06;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../src/assets/images/logos/sah-logo-for-number.svg")
      no-repeat;
    background-size: cover;
    position: relative;
    top: 5vw;
    right: 1.5vw;
    color: var(--blue);
    font-size: 1.8em;
    p {
      position: relative;
      top: 0.3vw;
    }
  }
  .image {
    background: url("../src/assets/images/elements/claw-blue.svg") no-repeat;
    background-size: contain;
    background-position: center;
    background-color: var(--white);
    margin: auto;
    box-shadow: 5px 5px 3px var(--blue-opacity);
  }
  img {
    width: 16vw;
    aspect-ratio: 1/1.26;
    object-fit: cover;
  }
  .informations {
    display: none;
    width: 16vw;
    aspect-ratio: 1/1.26;
    color: var(--white);
    background-color: var(--blue-opacity);
    p,
    h3 {
      line-height: 1.5em;
    }
  }

  .image:hover {
    content: "palmares";
    background-color: var(--blue-opacity);
    transition: 0.5s;
    img {
      display: none;
    }
    .informations {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .name {
    width: 15vw;
    aspect-ratio: 1/0.3;
    background-color: var(--yellow);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: relative;
    bottom: 1.7vw;
    color: var(--blue);
    box-shadow: 5px 5px 3px var(--blue-opacity);
    text-align: center;
  }
  .none {
    display: none;
  }
  @media screen and (max-width: 700px) {
    .number {
      width: 17.68vw;
      top: 13vw;
      right: 3.9vw;
      font-size: 1.95em;
      p {
        font-size: 0.6em;
      }
    }
    .number p {
      top: 0.78vw;
    }
    img {
      width: 41.6vw;
    }
    .name {
      width: 39vw;
      bottom: 4.42vw;
    }

    .informations {
      width: 41.6vw;
      p,
      h3 {
        line-height: 1.2em;
      }
    }
  }
`;
