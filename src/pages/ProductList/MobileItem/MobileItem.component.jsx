import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MobileItemContainer } from "./MobileItem.styles";
import { Image, Frame } from "arwes";
import { NavLink } from "react-router-dom";

const MobileItem = ({ id, brand, model, price, imgUrl }) => {
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
        <NavLink to={'/product/' + id}>
          <Image animate resources={ imgUrl }>
            <p>{ brand }</p>
            <p>{ model }</p>
            { price && <p>{ price } €</p> }
          </Image>
        </NavLink>
      </MobileItemContainer>
    </Frame>
  )
}

MobileItem.propTypes = {
  id:     PropTypes.string,
  brand:  PropTypes.string,
  model:  PropTypes.string,
  price:  PropTypes.string,
  imgUrl: PropTypes.string
};

export default MobileItem;
