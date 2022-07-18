import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: space-between;
  width: 22vw;
  margin-bottom: 4vw;
  .image {
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

  .sizes {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0.5rem;
    font-size: 1.4rem;
    color: var(--white);
  }
  .size {
    width: 2.5vw;
    aspect-ratio: 1/1.15;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--yellow);
  }

  @media screen and (max-width: 700px) {
    width: 90vw;
    margin-bottom: 7.2vw;
    display: block;
    justify-content: space-between;
    img {
      width: 90vw;
    }
    .details,
    .sizes {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
    .detail,
    .size {
      width: 30vw;
      outline: 1px solid var(--blue);
    }
  }
`;
