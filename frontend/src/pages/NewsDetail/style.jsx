import styled from "styled-components";

export default styled.div`
width:80%;
margin: auto;
color: var(--white);
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: left;
line-height:2em;

p{
font-size: 1.5em;
}
.date{
  opacity:0.5;
}
h3{
  font-size: 2em;
  margin: 3vh 0;
}
.bloc{
  display: block;
  margin:5vh 0 10vh 0;

}
img{
  width:40%;
  margin-left:3vw;
  float: right;
  }
  @media screen and (max-width: 700px) {

`;
