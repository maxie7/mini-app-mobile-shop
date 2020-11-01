import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { ItemContainer } from "./Item.styles";
import { Paragraph, Frame } from "arwes";

const Item = ({ id, brand, model, price }) => {
  const [showFrame, setShowFrame] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFrame(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Frame
      show={showFrame}
      animate={true}
      level={3}
      corners={4}
      layer='primary'
    >
      <ItemContainer key={ id }>
        <Paragraph>{ brand }</Paragraph>
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


