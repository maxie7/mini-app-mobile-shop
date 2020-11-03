import styled from 'styled-components';

export const ProductListPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 0 auto;
  width: 85vw;
  
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
