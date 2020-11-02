import React from "react";
import {shallow} from "enzyme";
import MobileItem from "../../pages/ProductList/MobileItem/MobileItem.component";

it('should render MobileItem section', () => {
  expect(shallow(<MobileItem />)).toMatchSnapshot();
});