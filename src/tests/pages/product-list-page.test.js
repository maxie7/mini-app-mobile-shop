import React from "react";
import {shallow} from "enzyme";
import ProductListPage from "../../pages/plp/product-list-page.component";

it('should render PLP - Product List Page', () => {
  expect(shallow(<ProductListPage />)).toMatchSnapshot();
});