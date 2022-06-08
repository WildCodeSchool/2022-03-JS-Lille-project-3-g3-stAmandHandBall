import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .arrows {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left {
    width: 5vw;
    min-height: 5vw;
    background: url("../src/assets/pictures/arrow.svg") no-repeat;
    background-size: contain;
    background-position: left;
    transform: rotate(90deg);
  }
  .right {
    width: 5vw;
    min-height: 5vw;
    background: url("../src/assets/pictures/arrow.svg") no-repeat;
    background-size: contain;
    background-position: right;
    transform: rotate(-90deg);
  }
  .line {
    width: 100%;
    border: 1px var(--yellow) solid;
    position: relative;
    margin: -2vw;
  }
`;
