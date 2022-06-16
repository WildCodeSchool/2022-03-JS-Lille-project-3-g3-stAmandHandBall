import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-shadow: 2px 2px 5px black;
  margin-bottom: 2vw;
  .day {
    width: 4vw;
    aspect-ratio: 1/1;
    background-color: var(--yellow);
    box-shadow: 2px 2px 5px black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    color: var(--white);
    font-size: 2em;
  }
  .hit {
    width: 4vw;
    background-size: contain;
    background-position: center;
  }
  .date {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      color: var(--yellow);
    }
  }
  .place {
    width: 4vw;
    aspect-ratio: 1/1;
  }
  .club {
    width: 4vw;
    aspect-ratio: 1/1;
  }
  .club1 {
    background: ${(props) => {
      return `url(../src/assets/images/logos/clubs/${props.club1}.png) no-repeat`;
    }};
    background-size: contain;
    background-position: center;
  }
  .club2 {
    background: ${(props) => {
      return `url(../src/assets/images/logos/clubs/${props.club2}.png) no-repeat`;
    }};
    background-size: contain;
    background-position: center;
  }
  .result {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 2vw;
  }
  .meeting {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    color: var(--white);
    h3 {
      margin: 0 10px 0 10px;
    }
  }
  .link {
    background-color: var(--yellow);
    margin: 1vw;
    color: var(--white);
    height: 2em;
    display: inline-block;
    h3 {
      margin-left: 10px;
      margin-right: 10px;
      position: relative;
      bottom: 1vw;
    }
  }
`;
