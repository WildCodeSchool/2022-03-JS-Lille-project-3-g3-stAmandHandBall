import styled from "styled-components";

export default styled.section`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  .timeline {
    position: relative;
    width: 75vw;
    margin: 0 auto;
    padding: 15px 0;
  }
  .timeline::after {
    content: "";
    position: absolute;
    width: 2px;
    background: var(--white);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }
  .container {
    padding: 15px 30px;
    position: relative;
    background: inherit;
    width: 50%;
  }
  .container.left {
    left: 0;
  }
  .container.right {
    left: 50%;
  }
  .container::after {
    content: "";
    position: absolute;
    width: 1rem;
    height: 16px;
    top: calc(30px + 1em);
    right: -8px;
    background: var(--white);
    border: 2px solid var(--white);
    border-radius: 16px;
  }
  .container.right::after {
    left: -8px;
  }
  .container::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 2px;
    top: calc(29px + 1.5em);
    right: 8px;
    background: var(--white);
  }
  .container.right::before {
    left: 8px;
  }
  .container .content {
    padding: 30px 90px 30px 30px;
    position: relative;
  }
  .container.right .content {
    padding: 30px 30px 30px 90px;
  }
  .container .content h2 {
    margin: 0 0 10px 0;
    font-size: 18px;
    font-weight: normal;
    color: var(--blue);
    text-align: center;
    background-color: var(--yellow);
  }
  .container .content p {
    margin: 0;
    font-size: 16px;
    line-height: 22px;
    color: var(--white);
  }
  @media (max-width: 700px) {
    .timeline {
      width: 90vw;
    }
    .timeline::after {
      left: 90px;
    }
    .container {
      width: 100%;
      padding: 13px;
    }
    .container.right {
      left: 0%;
    }
    .container.left::after,
    .container.right::after {
      left: 82px;
    }
    .container.left::before,
    .container.right::before {
      left: 100px;
      border-color: transparent var(--blue) transparent transparent;
    }
    .container.left .date,
    .container.right .date {
      right: auto;
      left: 15px;
    }
    .container.left .content,
    .container.right .content {
      padding: 30px 30px 30px 90px;
      border-radius: 500px 0 0 500px;
    }
    .container::before {
      display: none;
    }
  }
`;
