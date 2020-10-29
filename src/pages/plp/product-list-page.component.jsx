import React from "react";
import { ProductListPageContainer } from "./product-list-page.styles";
import Item from "../../components/item/item.component";

const ProductListPage = () => (
  <ProductListPageContainer>
    {apiResponse.map( item => (
      <Item key={item.id} brand={item.brand} model={item.model} price={item.price} />
    ))}
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
  {
    "id": "ND1elEt4nqZrCeFflDUZ2",
    "brand": "Acer",
    "model": "Liquid X2",
    "price": "230",
    "imgUrl": "https://front-test-api.herokuapp.com/images/ND1elEt4nqZrCeFflDUZ2.jpg"
  },
  {
    "id": "pMZMhe_ZaAPZoaCCtlDrg",
    "brand": "Acer",
    "model": "Liquid Jade 2",
    "price": "",
    "imgUrl": "https://front-test-api.herokuapp.com/images/pMZMhe_ZaAPZoaCCtlDrg.jpg"
  },
  {
    "id": "ke-gsQbO8qH9PQ-zcdiAJ",
    "brand": "Acer",
    "model": "Liquid Zest Plus",
    "price": "200",
    "imgUrl": "https://front-test-api.herokuapp.com/images/ke-gsQbO8qH9PQ-zcdiAJ.jpg"
  },
  {
    "id": "meQvyTcXACAwWn3wCKSw6",
    "brand": "Acer",
    "model": "Liquid Zest",
    "price": "110",
    "imgUrl": "https://front-test-api.herokuapp.com/images/meQvyTcXACAwWn3wCKSw6.jpg"
  },
];

export default ProductListPage;