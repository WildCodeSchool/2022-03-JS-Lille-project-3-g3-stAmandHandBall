import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .left {
    width: 2vw;
    min-height: 3vw;
    background: url("../src/assets/images/elements/arrow.svg") no-repeat;
    background-size: contain;
    background-position: left;
    transform: rotate(90deg);
  }
  .right {
    width: 2vw;
    min-height: 3vw;
    background: url("../src/assets/images/elements/arrow.svg") no-repeat;
    background-size: contain;
    background-position: right;
    transform: rotate(-90deg);
  }
  .line {
    width: 100%;
    height: 1px;
    border: 1px var(--yellow) solid;
    position: relative;
    margin: -1vw;
  }
  @media screen and (max-width: 700px) {
    .left {
      width: 8vw;
    }
    .right {
      width: 8vw;
    }
    .line {
      position: relative;
      margin: -3vw;
      bottom: 1vh;
    }
  }
`;
