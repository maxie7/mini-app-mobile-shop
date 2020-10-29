import React from "react";
import {shallow} from "enzyme";
import Item from "../../components/Item/Item.component";

it('should render Item section', () => {
  expect(shallow(<Item />)).toMatchSnapshot();
});