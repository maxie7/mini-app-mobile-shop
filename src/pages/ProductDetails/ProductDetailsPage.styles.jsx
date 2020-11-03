import styled from 'styled-components';
import {Link} from "react-router-dom";

export const ProductDetailsPageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin: 20px auto;
  padding: 10px;
  max-width: 80vw;
  
  & > div {
    margin-bottom: 2px;
  }
  
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 4px;
    min-width: unset;
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  @media screen and (min-width: 801px) {
    grid-area: 1 / 1 / 3 / 2;
    max-width: 40vw;
    min-width: unset;
  }
`;

export const DescriptionContainer = styled.div`
  @media screen and (min-width: 801px) {
    grid-area: 1 / 2 / 2 / 3;
  }
  
  @media screen and (max-width: 432px) {
    margin-top: -55px;
  }
`;

export const ActionsContainer = styled.div`
  @media screen and (min-width: 801px) {
    grid-area: 2 / 2 / 3 / 3;
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
