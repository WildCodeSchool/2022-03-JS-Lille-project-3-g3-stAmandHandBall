import styled from "styled-components";

export default styled.div`
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
    width: 16px;
    height: 16px;
    top: calc(50% - 8px);
    right: -8px;
    background: var(--white);
    border: 2px solid var(--white);
    border-radius: 16px;
    z-index: 1;
  }
  .container.right::after {
    left: -8px;
  }
  .container::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 2px;
    top: calc(50% - 1px);
    right: 8px;
    background: var(--white);
    z-index: 1;
  }
  .container.right::before {
    left: 8px;
  }
  .container .date {
    position: absolute;
    display: inline-block;
    top: calc(50% - 8px);
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 1;
  }
  .container.left .date {
    right: -75px;
  }
  .container.right .date {
    left: -75px;
  }

  .container .content {
    padding: 30px 90px 30px 30px;
    background: var(--yellow);
    position: relative;
    border-radius: 0 500px 500px 0;
  }
  .container.right .content {
    padding: 30px 30px 30px 90px;
    border-radius: 500px 0 0 500px;
  }
  .container .content h2 {
    margin: 0 0 10px 0;
    font-size: 18px;
    font-weight: normal;
    color: var(--white);
  }
  .container .content p {
    margin: 0;
    font-size: 16px;
    line-height: 22px;
    color: var(--blue);
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
      padding-left: 120px;
      padding-right: 30px;
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
  }
`;
