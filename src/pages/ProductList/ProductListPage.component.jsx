import React, { useEffect, useState } from "react";
import { ProductListPageContainer, LoadingPageContainer } from "./ProductListPage.styles";
import MobileItem from "./MobileItem/MobileItem.component";
import { usersAPI } from "../../api/api";
import { Loading } from "arwes";
import Searcher from "../../components/Searcher/Searcher.component";

const ProductListPage = () => {
  const [ mobilesData, setMobilesData ] = useState(undefined);
  const [ searchField, setSearchField ] = useState('');

  useEffect( () => {
    const getProductData = async () => {
      const result = await usersAPI.requestProducts();
      setMobilesData(result.data);
    };

    getProductData();
  }, []);

  const handleChange = e => {
    setSearchField(e.target.value);
  }

  if (!mobilesData) {
    return (
      <LoadingPageContainer>
        <Loading animate />
        <p>Loading products...</p>
      </LoadingPageContainer>);
  }

  let filteredMobiles = mobilesData.filter(mobile => {
    return (
      mobile.model.toLowerCase().includes(searchField.toLowerCase()) ||
      mobile.brand.toLowerCase().includes(searchField.toLowerCase())
    )
  });

  return (
  <>
    <Searcher placeholder='search a ...' handleChange={handleChange} />
    <ProductListPageContainer>
      {filteredMobiles.map(mobileItem => (
        <MobileItem key={mobileItem.id} brand={mobileItem.brand} model={mobileItem.model} price={mobileItem.price} />
      ))}
    </ProductListPageContainer>
  </>
  )
}

// const apiResponse = [
//   {
//     "id": "ZmGrkLRPXOTpxsU4jjAcv",
//     "brand": "Acer",
//     "model": "Iconia Talk S",
//     "price": "170",
//     "imgUrl": "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
//   },
//   {
//     "id": "cGjFJlmqNPIwU59AOcY8H",
//     "brand": "Acer",
//     "model": "Liquid Z6 Plus",
//     "price": "250",
//     "imgUrl": "https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg"
//   },
//   {
//     "id": "8hKbH2UHPM_944nRHYN1n",
//     "brand": "Acer",
//     "model": "Liquid Z6",
//     "price": "120",
//     "imgUrl": "https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg"
//   },
//   {
//     "id": "xyPoqGJxYR4Nn3yVGQcfI",
//     "brand": "Acer",
//     "model": "Iconia Tab 10 A3-A40",
//     "price": "230",
//     "imgUrl": "https://front-test-api.herokuapp.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg"
//   },
//   {
//     "id": "ND1elEt4nqZrCeFflDUZ2",
//     "brand": "Acer",
//     "model": "Liquid X2",
//     "price": "230",
//     "imgUrl": "https://front-test-api.herokuapp.com/images/ND1elEt4nqZrCeFflDUZ2.jpg"
//   },
//   {
//     "id": "pMZMhe_ZaAPZoaCCtlDrg",
//     "brand": "Acer",
//     "model": "Liquid Jade 2",
//     "price": "",
//     "imgUrl": "https://front-test-api.herokuapp.com/images/pMZMhe_ZaAPZoaCCtlDrg.jpg"
//   },
//   {
//     "id": "ke-gsQbO8qH9PQ-zcdiAJ",
//     "brand": "Acer",
//     "model": "Liquid Zest Plus",
//     "price": "200",
//     "imgUrl": "https://front-test-api.herokuapp.com/images/ke-gsQbO8qH9PQ-zcdiAJ.jpg"
//   },
//   {
//     "id": "meQvyTcXACAwWn3wCKSw6",
//     "brand": "Acer",
//     "model": "Liquid Zest",
//     "price": "110",
//     "imgUrl": "https://front-test-api.herokuapp.com/images/meQvyTcXACAwWn3wCKSw6.jpg"
//   },
// ];

export default ProductListPage;