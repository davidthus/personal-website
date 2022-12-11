import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  ::-webkit-scrollbar
{
  width: 8px;  /* for vertical scrollbars */
  height: 8px; /* for horizontal scrollbars */
}

::-webkit-scrollbar-track
{
  background: #131112;
}

::-webkit-scrollbar-thumb
{
  background: #3B3538;
  border-radius: 99rem;
}
`;
