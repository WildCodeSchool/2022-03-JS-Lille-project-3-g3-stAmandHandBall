import styled from "styled-components";

export default styled.div`
  margin-bottom: 5vh;
  .mainCards {
    width: 22vw;
    position: relative;
    margin-bottom: 10vh;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    position: relative;
    top: 3vh;
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
    width: 90vw;
    .mainCards {
      width: 100%;
      position: relative;
      margin-bottom: 0vh;
    }
    .title {
      position: relative;
      top: 3vh;
    }
    img {
      width: 100%;
    }
    .text {
      width: 80%;
      height: 18vh;
      margin-top: -5%;
    }
  }
`;
