import React, { useEffect, useState } from "react";
import { ProductListPageContainer } from "./ProductListPage.styles";
import MobileItem from "./MobileItem/MobileItem.component";
import Searcher from "./Searcher/Searcher.component";
import Preloader from "../../components/Preloader/Preloader";
import { getProducts } from "../../core/application/getProductsService";
import { getInitialValues } from "../../utils/getInitialValues";


const ProductListPage = () => {
  const [ searchField, setSearchField ] = useState('');
  const [ mobilesData, setMobilesData ] = useState(getInitialValues("productList"));

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

export default ProductListPage;
