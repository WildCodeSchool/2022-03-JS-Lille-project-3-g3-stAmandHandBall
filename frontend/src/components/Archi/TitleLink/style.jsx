import styled from "styled-components";

export default styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    height: 10vh;
    width: 16vw;
    margin-bottom: 10vh;
  }
  .title {
    filter: drop-shadow(var(--box-shadow));
  }
  .arrow {
    width: 18vw;
    background-color: var(--yellow);
    clip-path: polygon(0 0, 82% 0, 100% 50%, 82% 100%, 0% 100%);
    box-shadow: var(--box-shadow);
  }
  h3 {
    font-size: 2em;
    line-height: 2.3rem;
    margin-left: 10px;
    position: relative;
    bottom: 23vh;
    color: var(--white);
    text-shadow: var(--text-shadow);
  }
  .link {
    height: 10vh;
    width: 40vw;
    margin-bottom: 10vh;
    filter: drop-shadow(var(--box-shadow));
  }
  .arrow2 {
    width: 40vw;
    background-color: var(--yellow);
    clip-path: polygon(100% 0, 100% 100%, 0% 100%, 8% 50%, 0% 0%);
  }
  p {
    font-size: 1.2em;
    margin-left: 4vw;
    position: relative;
    bottom: 16.4vh;
    color: var(--white);
    text-shadow: var(--text-shadow);
  }
  a {
    text-decoration: none;
  }
`;
