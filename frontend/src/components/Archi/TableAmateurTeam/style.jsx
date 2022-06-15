import styled from "styled-components";

export default styled.div`
  a {
    text-decoration: none;
    color: var(--white);
    &:hover {
      color: var(--yellow);
    }
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  ul {
    border-top: 3px var(--white) solid;
  }
  li {
    padding: 0.5rem;
    font-size: 1.5rem;
  }
  .table {
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
  }
  .divisions {
    width: 25%;
    text-align: center;
    color: var(--white);
  }

  @media screen and (max-width: 700px) {
    h2 {
      font-size: 1.5rem;
    }
    li {
      font-size: 1.3rem;
    }
  }
`;
