import styled from "styled-components";

export default styled.div`
  margin-top: -5vh;

  .name {
    width: 6.2vw;
    aspect-ratio: 1/1.16;
    background-color: var(--yellow);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: relative;
    top: 6vw;
    left: 6.5vw;
    color: var(--blue);
    box-shadow: 5px 5px 3px var(--blue-opacity);
    text-align: center;
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
    aspect-ratio: 1/1.16;
    object-fit: cover;
  }
  .picto {
    width: 4vw;
    aspect-ratio: 1/1.06;
    background: url("../src/assets/pictures/cards/staff/picto.png") no-repeat;
    background-size: cover;
    position: relative;
    bottom: 3vw;
    left: 13.5vw;
  }
  @media screen and (max-width: 700px) {
    .name {
      width: 16.12vw;
      top: 15.6vw;
      left: 16vw;
    }
    img {
      width: 41.6vw;
    }
    .picto {
      width: 10.4vw;
      bottom: 7.8vw;
      left: 35.1vw;
    }
  }
`;
