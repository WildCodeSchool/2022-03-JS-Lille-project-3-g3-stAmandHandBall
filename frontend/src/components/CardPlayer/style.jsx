import styled from "styled-components";

export default styled.div`
  .number {
    width: 6.8vw;
    aspect-ratio: 1/1.06;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../src/assets/pictures/cards/players/logo-background.png")
      no-repeat;
    background-size: cover;
    position: relative;
    top: 5vw;
    right: 1.5vw;
    color: var(--blue);
    font-size: 1.8em;
  }
  .number p {
    position: relative;
    top: 0.3vw;
  }
  .image {
    background: url("../src/assets/pictures/cards/griffe.png") no-repeat;
    background-size: contain;
    background-position: center;
    background-color: var(--white);
    margin: auto;
    box-shadow: 5px 5px 3px var(--blue-opacity);
  }

  .image:hover {
    content: "palmares";
    background-color: var(--blue-opacity);
    transition: 0.5s;
  }

  img {
    width: 16vw;
    aspect-ratio: 1/1.26;
    object-fit: cover;
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
  @media screen and (max-width: 700px) {
    .number {
      width: 17.68vw;
      top: 13vw;
      right: 3.9vw;
      font-size: 1.95em;
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
  }
`;
