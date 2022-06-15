import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .top {
    width: 2vw;
    min-height: 2vw;
    background: url("../src/assets/pictures/arrow.svg") no-repeat;
    background-size: contain;
    position: relative;
    top: 0.2vw;
    transform: rotate(180deg);
  }
  .bottom {
    width: 2vw;
    min-height: 2vw;
    background: url("../src/assets/pictures/arrow.svg") no-repeat;
    background-size: contain;
    position: relative;
    bottom: 0.2vw;
  }
  .line {
    background-color: var(--yellow);
    width: 1px;
    height: 100%;
    border: 1px var(--yellow) solid;
  }

  @media screen and (max-width: 700px) {
    display: ${(props) => (props.mobileDisplay ? "block" : "none")};
  }
`;
