import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
display: flex;
flex-direction: column;
justify-content: flex-start;
:root{
  --blue: #004696;
  --yellow: #FCCA26;
  --white: #f2f6fa;
  --green: #2D9C4E;
  --blue-opacity:rgba(0, 27, 59, 0.7);
  --font-family: 'Francois One', sans-serif;
  background-color: var(--blue);
  font-family: var(--font-family);
}
h1,h2,h3,h4,h5,h6, p, li{
  font-family: var(--font-family);
}
 `;
export default GlobalStyle;
