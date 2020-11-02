import React from 'react';
import PropTypes from 'prop-types';
import {SearcherInput, SearcherContainer} from "./Searcher.styles";
import { Frame } from "arwes";

const Searcher = ({ placeholder, handleChange }) => (
  <SearcherContainer>
    <Frame
      animate={true}
      level={1}
      corners={4}
      layer='header'
    >
      <SearcherInput type='search' placeholder={placeholder} onChange={handleChange} />
    </Frame>
  </SearcherContainer>
);

Searcher.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func
};

export default Searcher;
