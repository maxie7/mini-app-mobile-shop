import React from "react";
import {shallow} from "enzyme";
import Header from "../../components/header.component";

it('should render header section', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});