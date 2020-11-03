import React from 'react';
import PropTypes from 'prop-types';
import {Paragraph, Project} from "arwes";

const MobileInfo = ({mobileItemData}) => {

  return (
    <Project animate header='DESCRIPTION'>
      <Paragraph>Brand: {mobileItemData.brand}</Paragraph>
      <Paragraph>Model: {mobileItemData.model}</Paragraph>
      <Paragraph>Price: {mobileItemData.price} €</Paragraph>
      <Paragraph>CPU: {mobileItemData.cpu}</Paragraph>
      <Paragraph>RAM: {mobileItemData.ram}</Paragraph>
      <Paragraph>OS: {mobileItemData.os}</Paragraph>
      <Paragraph>Resolution: {mobileItemData.displayResolution}</Paragraph>
      <Paragraph>Battery: {mobileItemData.battery}</Paragraph>
      <Paragraph>Camera: {mobileItemData.primaryCamera}</Paragraph>
      { mobileItemData.secondaryCmera && <Paragraph>2nd Camera: { mobileItemData.secondaryCmera }</Paragraph> }
      <Paragraph>Dimensions: {mobileItemData.dimentions}</Paragraph>
      { mobileItemData.weight && <Paragraph>Weight: { mobileItemData.weight } g</Paragraph> }
    </Project>
  )
}

MobileInfo.propTypes = {
  mobileItemData: PropTypes.object
}

export default MobileInfo;