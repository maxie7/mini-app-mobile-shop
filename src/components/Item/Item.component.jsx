import React from 'react';
import PropTypes from 'prop-types';
import { ItemContainer } from "./Item.styles";
import { Frame } from "arwes";

const Item = ({ id, brand, model, price }) => {
  return (
    <Frame animate={true}
           level={3}
           corners={4}
           layer='primary'
    >
      <ItemContainer key={ id }>
        <p>{ brand }</p>
        <p>{ model }</p>
        <p>{ price }</p>
      </ItemContainer>
    </Frame>
  )
}

Item.propTypes = {
  id: PropTypes.string,
  brand: PropTypes.string,
  model: PropTypes.string,
  price: PropTypes.string
};

export default Item;


