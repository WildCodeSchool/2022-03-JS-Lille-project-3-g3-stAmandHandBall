import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: space-between;
  width: 22vw;
  margin-bottom: 4vw;
  margin: 2rem;

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
    align-items: flex-start;
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
    width: 90vw;
    margin-bottom: 7.2vw;
    display: block;
    justify-content: space-between;
    img {
      width: 90vw;
    }
    .details {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
    .detail {
      width: 30vw;
      outline: 1px solid var(--blue);
    }
  }
`;
