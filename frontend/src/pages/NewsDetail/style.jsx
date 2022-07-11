import styled from "styled-components";

export default styled.div`
  width: 80%;
  margin: auto;
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  line-height: 2em;

  p {
    font-size: 1.5em;
  }
  .date {
    opacity: 0.5;
  }
  h3 {
    font-size: 2em;
    margin: 3vh 0;
  }
  .bloc {
    display: block;
    margin: 5vh 0 10vh 0;
  }
  img {
    width: 40%;
    margin-left: 3vw;
    float: right;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    .date {
      margin-top: -5vh;
    }
    .bloc {
      margin-top: 1vh;
      display: flex;
      flex-direction: column;
    }
    img {
      width: 100%;
      object-fit: contain;
      margin: 0 0 3vh 0;
      float: none;
    }
  }
`;
