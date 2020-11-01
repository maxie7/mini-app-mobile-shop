import styled from 'styled-components';

export const ItemContainer = styled.div`
  background: #021114;
  display: flex;
  flex-direction: column;
  //background-color: rgba(149, 218, 218, 0.7);
  //border: 1px solid grey;
  //border-radius: 5px;
  //padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  padding: 20px 40px;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  
  &:hover {
    transform: scale(1.1);
  }
`;
