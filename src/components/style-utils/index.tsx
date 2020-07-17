import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #root {
    margin: 0;
    padding: 0;
    width: auto;
    height: 100%;
    overflow: auto;
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
  }
`;

export default GlobalStyle;
