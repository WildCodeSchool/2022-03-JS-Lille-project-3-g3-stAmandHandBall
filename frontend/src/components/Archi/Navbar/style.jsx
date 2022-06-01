import styled from "styled-components";

export default styled.nav`
  width: 100vw;
  font-weight: bold;
  font-size: 1.5rem;

  .upperNav {
    /* border: 1px solid red;
    box-sizing: border-box; */
    height: 10vh;
    background-color: var(--blue);
    color: var(--white);
  }
  .underNav {
    /* border: 1px solid yellow;
    box-sizing: border-box; */
    height: 5vh;
    background-color: var(--white);
    color: var(--blue);
  }
  .visible {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  li {
    margin: 0.8rem;
  }
  .submenu {
    border: 1px solid var(--white);
    box-sizing: border-box;
    position: fixed;
    visibility: hidden;
    background-color: var(--blue);
    font-size: 1.2rem;
    border-radius: 5px;
  }
  li:hover {
    .submenu {
      visibility: visible;
    }
  }
`;
