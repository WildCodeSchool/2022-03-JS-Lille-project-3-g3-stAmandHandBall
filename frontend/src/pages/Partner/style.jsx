import styled from "styled-components";

export default styled.section`
  display: flex;
  flex-direction: column;
  width: 75vw;
  margin: auto;
  color: var(--white);
  div {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 5vh;
  }
  img {
    width: 15%;
    aspect-ratio: 3/2;
    object-fit: contain;
    background-position: center;
    margin: 2.5%;
  }
  @media screen and (max-width: 700px) {
    background-color: yellow;
  }
`;
