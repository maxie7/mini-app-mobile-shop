import React, { useEffect, useState } from "react";
import { ProductListPageContainer, LoadingPageContainer } from "./ProductListPage.styles";
import MobileItem from "./MobileItem/MobileItem.component";
import { API } from "../../api/api";
import { Loading } from "arwes";
import Searcher from "./Searcher/Searcher.component";

const ProductListPage = () => {
  const [ mobilesData, setMobilesData ] = useState(undefined);
  const [ searchField, setSearchField ] = useState('');

  useEffect( () => {
    const getProductsData = async () => {
      const result = await API.requestProducts();
      setMobilesData(result.data);
    };

    getProductsData();
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

  const filteredMobiles = mobilesData.filter(mobile => {
    return Object.keys(mobile).some(mobileProperty =>
      mobile[mobileProperty].toLowerCase().includes(searchField.toLowerCase())
    );
  });

  return (
  <>
    <Searcher placeholder='search a ...' handleChange={handleChange} />
    <ProductListPageContainer>
      {filteredMobiles.map(mobileItem => (
        <MobileItem key={mobileItem.id}
                    id={mobileItem.id}
                    brand={mobileItem.brand}
                    model={mobileItem.model}
                    price={mobileItem.price}
                    imgUrl={mobileItem.imgUrl}
        />
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