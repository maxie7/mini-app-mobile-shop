import React, { useEffect, useState } from "react";
import { ProductListPageContainer } from "./ProductListPage.styles";
import MobileItem from "./MobileItem/MobileItem.component";
import { API } from "../../api/api";
import Searcher from "./Searcher/Searcher.component";
import Preloader from "../../components/Preloader/Preloader";

const ProductListPage = () => {
  const [ searchField, setSearchField ] = useState('');
  const [ mobilesData, setMobilesData ] = useState(() => {
    try {
      const savedProductsList = localStorage.getItem("productsList");
      return savedProductsList ? JSON.parse(savedProductsList) : undefined;
    } catch (error) {
      return undefined;
    }
  });

  useEffect( () => {
    const getProductsData = async () => {
      const productsData = await API.requestProducts();
      setMobilesData(productsData);
      const json = JSON.stringify(productsData);
      localStorage.setItem("productsList", json);
    };

    if (!mobilesData) {
      getProductsData();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("productsList", mobilesData)
  }, [mobilesData]);

  const handleChange = e => {
    setSearchField(e.target.value);
  }

  if (!mobilesData) {
    return <Preloader />;
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
        <MobileItem
          key={mobileItem.id}
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