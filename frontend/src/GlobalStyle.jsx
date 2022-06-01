import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --blue: #004696;
  --yellow: #FCCA26;
  --white: #f2f6fa;
  --green: #2D9C4E;
  --font-family: 'Francois One', sans-serif;
}
h1,h2,h3,h4,h5,h6, p, li{
  font-family: var(--font-family);
}
 `;
export default GlobalStyle;
