import React from 'react';

import { SearcherContainer } from "./Searcher.styles";
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
    <input
      type='search'
      // placeholder={placeholder}
      // onChange={handleChange}
    />
    </Frame>
  </SearcherContainer>
);

export default Searcher;
