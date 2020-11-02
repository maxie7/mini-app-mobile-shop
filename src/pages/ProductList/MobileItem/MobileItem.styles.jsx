import styled from 'styled-components';

export const MobileItemContainer = styled.div`
  background: #021114;
  display: flex;
  flex-direction: column;
  font-family: "Electrolize", sans-serif;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  padding: 20px 40px;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  
  &:hover {
    transform: scale(1.1);
  }
  
  @media screen and (max-width: 800px) {
    width: 42vw;
    
    &:hover {
      transform: unset;
  }
`;
