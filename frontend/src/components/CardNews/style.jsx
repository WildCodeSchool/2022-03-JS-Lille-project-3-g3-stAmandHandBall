import styled from "styled-components";

export default styled.div`
  margin: 1.2rem;
  .mainCards {
    width: 22vw;
    position: relative;
    margin-top: 20%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    position: relative;
    top: 3%;
  }
  h4 {
    color: var(--white);
    text-shadow: var(--text-shadow);
    font-size: 2em;
  }
  img {
    width: 22vw;
    box-shadow: var(--box-shadow);
  }
  .text {
    overflow: hidden;
    box-shadow: var(--box-shadow);
    background-color: var(--yellow);
    width: 15vw;
    height: 20vh;
    margin-top: -5%;
    position: relative;
    color: var(--blue);
    padding: 2%;
    line-height: 130%;
  }
  @media screen and (max-width: 700px) {
    .mainCards {
      width: 17.68vw;
      top: 13vw;
      right: 3.9vw;
      font-size: 1.95em;
    }
  }
`;
