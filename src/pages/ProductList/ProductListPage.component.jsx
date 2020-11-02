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
    return Object.keys(mobile).some(key =>
      mobile[key].toLowerCase().includes(searchField.toLowerCase())
    );
    // return (
    //   mobile.model.toLowerCase().includes(searchField.toLowerCase()) ||
    //   mobile.brand.toLowerCase().includes(searchField.toLowerCase())
    // )
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
//   }
// ];

export default ProductListPage;