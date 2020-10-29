import React from "react";
import {shallow} from "enzyme";
import Header from "../../components/Header/Header.component";

it('should render Header section', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});