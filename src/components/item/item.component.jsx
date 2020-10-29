import React from 'react';
import PropTypes from 'prop-types';
import { ItemContainer } from "./item.styles";

const Item = ({ id, brand, model, price }) => {
  return (
    <ItemContainer key={ id }>
      <p>{ brand }</p>
      <p>{ model }</p>
      <p>{ price }</p>
    </ItemContainer>
  )
}

Item.propTypes = {
  id: PropTypes.string,
  brand: PropTypes.string,
  model: PropTypes.string,
  price: PropTypes.string
};

export default Item;


