import styled from "styled-components";

export default styled.nav`
  font-size: 1.2rem;

  ul {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    position: fixed;
    right: 0rem;
    top: 3rem;
    background-color: var(--white);
    color: var(--blue);
    opacity: 0.9;
    border-radius: 10px;
    text-align: left;
  }

  li {
    height: auto;
    width: 45vw;
    margin: 0;
    padding: 0.5rem;
  }

  .subMenu {
    position: sticky;
    margin: 0;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: var(--white);
    background-color: var(--blue);
    border-radius: 0px;
  }

  .hamburger {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .burger {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: var(--white);
    transform-origin: 1px;
    transition: all 0.3s linear;
  }
  details[open] summary ~ * {
    animation: 0.5s ease-out;
  }
  .burger1 {
    transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
  }

  .burger2 {
    transform: ${(props) =>
      props.isOpen ? "translateX(100%)" : "translateX(0)"};
    opacity: ${(props) => (props.isOpen ? 0 : 1)};
  }

  .burger3 {
    transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
  }
  .aColor {
    color: var(--white);
  }
  a {
    color: var(--blue);
    text-decoration: none;
  }
  @media screen and (min-width: 700px) {
    .hamburger {
      display: none;
    }
  }
`;
