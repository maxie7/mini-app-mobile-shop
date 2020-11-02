import styled from "styled-components";

export const SearcherContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Electrolize", sans-serif;
  //-webkit-appearance: none;
  //border: none;
  //outline: none;
  padding: 10px;
  //width: 150px;
  line-height: 30px;
  margin-bottom: 20px;
`;

export const SearcherInput = styled.input`
  background: transparent none;
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  color: #f458f2;
  font-family: "Electrolize", sans-serif;
  font-size: 20px;
  
  &:focus {
    background: none;
    border: 2px solid #f458f2;
    border-radius: unset;
  }
`;