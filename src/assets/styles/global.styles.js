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
  
  //button,
  //input,
  //optgroup,
  //select,
  //textarea,html input[type="button"],
  //input[type="reset"],
  //input[type="submit"],button[disabled],
  //html input[disabled],button::-moz-focus-inner,
  //input::-moz-focus-inner, input[type="checkbox"],
  //input[type="radio"], input[type="number"]::-webkit-inner-spin-button,
  //input[type="number"]::-webkit-outer-spin-button, input[type="search"], input[type="search"]::-webkit-search-cancel-button,
  //input[type="search"]::-webkit-search-decoration {
  //  border:none;
  //  background-image:none;
  //  background-color:transparent;
  //  -webkit-box-shadow: none;
  //  -moz-box-shadow: none;
  //  box-shadow: none;
  //}
`;