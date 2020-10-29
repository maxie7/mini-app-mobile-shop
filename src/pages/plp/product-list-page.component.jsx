import React from "react";
import { ProductListPageContainer } from "./product-list-page.styles";
import Item from "../../components/item/item.component";

const ProductListPage = () => (
  <ProductListPageContainer>
    <Item key={apiResponse[0].id} brand={apiResponse[0].brand} model={apiResponse[0].model} price={apiResponse[0].price} />
  </ProductListPageContainer>
)

const apiResponse = [
  {
    "id": "ZmGrkLRPXOTpxsU4jjAcv",
    "brand": "Acer",
    "model": "Iconia Talk S",
    "price": "170",
    "imgUrl": "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
  },
  {
    "id": "cGjFJlmqNPIwU59AOcY8H",
    "brand": "Acer",
    "model": "Liquid Z6 Plus",
    "price": "250",
    "imgUrl": "https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg"
  },
  {
    "id": "8hKbH2UHPM_944nRHYN1n",
    "brand": "Acer",
    "model": "Liquid Z6",
    "price": "120",
    "imgUrl": "https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg"
  },
  {
    "id": "xyPoqGJxYR4Nn3yVGQcfI",
    "brand": "Acer",
    "model": "Iconia Tab 10 A3-A40",
    "price": "230",
    "imgUrl": "https://front-test-api.herokuapp.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg"
  },
];

export default ProductListPage;