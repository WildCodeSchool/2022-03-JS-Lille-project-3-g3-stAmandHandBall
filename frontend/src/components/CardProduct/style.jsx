import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: space-between;
  width: 22vw;
  margin-bottom: 4vw;
  .image {
    background-color: var(--white);
    box-shadow: 5px 5px 3px var(--blue-opacity);
  }
  img {
    width: 16vw;
    aspect-ratio: 1/1.16;
    object-fit: contain;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .detail {
    width: 4.8vw;
    aspect-ratio: 1/1.15;
    background-color: var(--white);
    box-shadow: 5px 5px 3px var(--blue-opacity);
  }
  .price {
    background-color: var(--yellow);
    color: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
  }
  /* @media screen and (max-width: 700px) {
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
  } */
`;
