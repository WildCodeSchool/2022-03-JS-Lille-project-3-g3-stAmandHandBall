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
  @media screen and (max-width: 700px) {
    width: 100vw;
    margin-bottom: 7.2vw;
    img {
      width: 28.8vw;
    }
    .detail {
      width: 8.64vw;
    }
  }
`;
