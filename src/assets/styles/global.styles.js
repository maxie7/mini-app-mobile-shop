import { createGlobalStyle } from "styled-components";
import "fontsource-electrolize";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Electrolize", sans-serif;
    padding: 20px 40px;
    text-align: center;
      
    @media screen and (max-width: 800px) {
      overflow-y: hidden;
      padding: 10px;
    }  
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }  
`;