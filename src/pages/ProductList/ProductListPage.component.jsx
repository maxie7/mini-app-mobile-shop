import React, { useEffect, useState } from "react";
import { ProductListPageContainer } from "./ProductListPage.styles";
import MobileItem from "./MobileItem/MobileItem.component";
import Searcher from "./Searcher/Searcher.component";
import Preloader from "../../components/Preloader/Preloader";
import { getProducts } from "../../core/application/getProductsService";
import { storage } from "../../core/infrastructure/storage";


const getInitialValues = () => {
  const savedProductsList = storage.get();
  if (savedProductsList) {
    return JSON.parse(savedProductsList);
  }
  return undefined;
}

const ProductListPage = () => {
  const [ searchField, setSearchField ] = useState('');
  const [ mobilesData, setMobilesData ] = useState(getInitialValues());

  useEffect( () => {
    const getProductsData = async () => {
      const productsData = await getProducts();
      setMobilesData(productsData);
    };

    if (!mobilesData) {
      getProductsData();
    }
  }, []);

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