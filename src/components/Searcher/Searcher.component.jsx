import React from 'react';

import {SearcherInput, SearcherContainer} from "./Searcher.styles";
import { Frame } from "arwes";

const Searcher = (
  // {
  // placeholder,
  // handleChange
// }
) => (
  <SearcherContainer>
    <Frame
      animate={true}
      level={1}
      corners={4}
      layer='header'
    >
      <SearcherInput type='search' />
    </Frame>
  </SearcherContainer>
);

export default Searcher;
