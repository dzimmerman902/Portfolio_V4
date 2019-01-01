import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    border: 0;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    line-height: 1;
  }
  
  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`
