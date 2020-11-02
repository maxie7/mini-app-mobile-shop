import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { MobileItemContainer } from "./MobileItem.styles";
import { Frame } from "arwes";

const MobileItem = ({ id, brand, model, price }) => {
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
      <MobileItemContainer key={ id }>
        <p>{ brand }</p>
        <p>{ model }</p>
        <p>{ price }</p>
      </MobileItemContainer>
    </Frame>
  )
}

MobileItem.propTypes = {
  id: PropTypes.string,
  brand: PropTypes.string,
  model: PropTypes.string,
  price: PropTypes.string
};

export default MobileItem;


