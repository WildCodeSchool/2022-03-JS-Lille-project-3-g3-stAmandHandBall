import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
display: flex;
flex-direction: column;
justify-content: flex-start;
:root{
  --blue: #004696;
  --yellow: #FCCA26;
  --white: #f2f6fa;
  --white-opacity: #f2f6fa30;
  --green: #2D9C4E;
  --size-h3: 2em;
  --blue-opacity:rgba(0, 27, 59, 0.7);
  --black:rgba(0, 11, 23, 0.927);
  --font-family: 'Francois One', sans-serif;
  --text-shadow: 2px 2px 6px var(--black);
  --box-shadow: 2px 2px 5px var(--black);
  
  background-color: var(--blue);
  font-family: var(--font-family);
}
h1,h2,h3,h4,h5,h6, p, li{
  font-family: var(--font-family);
}
p, h5, h6{
  font-size: 1em;
  line-height:1.5em;
}
h1{
  font-size: 1.5em;
}
h2{
  font-size: 2em;
}
h3{
  font-size: 1.5em;
}
h4{
  font-size: 1.2em;
  line-height:1.5em;
}
@media screen and (max-width: 700px) {
    width: 90vw;
    h1{
  font-size: 1em;
  line-height:1.2em;
}
  }
 `;
export default GlobalStyle;
