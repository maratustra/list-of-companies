import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
  
  body {
	  margin: 0;
    background-color: #f0f0f0;
	  color: black;
    font-family: Roboto, sans-serif;
    font-size: 20px;
  }

  button {
    cursor: pointer;
  }

  input, button {
    font: inherit;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  h1, h2, h3 {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }
`;