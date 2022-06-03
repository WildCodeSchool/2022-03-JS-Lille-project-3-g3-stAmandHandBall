import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
 `;
export default GlobalStyle;
