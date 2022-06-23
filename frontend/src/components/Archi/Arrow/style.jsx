import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10vh 0;
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
    background-color: var(--yellow);
    position: relative;
    margin: -1vw;
  }
`;
