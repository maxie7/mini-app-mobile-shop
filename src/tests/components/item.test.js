import React from "react";
import {shallow} from "enzyme";
import Item from "../../components/item/item.component";

it('should render item section', () => {
  expect(shallow(<Item />)).toMatchSnapshot();
});