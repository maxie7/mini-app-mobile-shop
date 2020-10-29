import React from "react";
import {shallow} from "enzyme";
import ProductListPage from "../../pages/ProductList/ProductListPage.component";

it('should render PLP - Product List Page', () => {
  expect(shallow(<ProductListPage />)).toMatchSnapshot();
});