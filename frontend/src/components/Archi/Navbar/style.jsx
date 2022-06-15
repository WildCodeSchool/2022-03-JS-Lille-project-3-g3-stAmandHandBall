import styled from "styled-components";

export default styled.nav`
  width: 100vw;
  font-weight: bold;
  font-size: 1.5rem;
  position: fixed;

  .upperNav {
    height: 10vh;
    background-color: var(--blue);
    color: var(--white);
  }
  .underNav {
    height: 5vh;
    background-color: var(--white);
    color: var(--blue);
  }
  .visible {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
  .burger {
    display: none;
  }

  @media screen and (max-width: 700px) {
    .visible {
      display: none;
    }
    .underNav {
      background-color: var(--yellow);
      height: 2vh;
    }
    .burger {
      display: block;
    }
  }
`;
