import styled from 'styled-components';
import {Link} from "react-router-dom";

export const ProductDetailsPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin: 0 auto;
  padding: 10px;
  width: 100vw;
  
  & > div {
    margin-bottom: 2px;
  }
  
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    min-width: unset;
    width: 90%;
  }
`;

export const LinkContainer = styled(Link)`
  color: #fc26fa;
  height: 100%;
  width: 70px;
  padding: 12px;
  
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }  
`;

// export const LoadingPageContainer = styled.div`
//   font-family: "Electrolize", sans-serif;
// `;