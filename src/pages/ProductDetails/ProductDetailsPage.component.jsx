import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { Button, Project, Image } from "arwes";
import {
  ActionsContainer,
  DescriptionContainer,
  ImageContainer,
  LinkContainer,
  ProductDetailsPageContainer
} from "./ProductDetailsPage.styles";
import Preloader from "../../components/Preloader/Preloader";
import MobileInfo from "./MobileInfo/MobileInfo.component";
import { getProductInfo } from "../../core/application/getProductInfoService";
import { getInitialValues } from "../../utils/getInitialValues";


const ProductDetailsPage = () => {
  const { id } = useParams();

  const [ mobileItemData, setMobileItemData ] = useState(getInitialValues(id));

  useEffect( () => {
    const getProductData = async () => {
      const productData = await getProductInfo(id);
      setMobileItemData(productData);
    };

    if (!mobileItemData) {
      getProductData();
    }
  }, []);

  if (!mobileItemData) {
    return <Preloader />;
  }

  return (
    <>
      <LinkContainer to='/'>
        <Button animate layer='primary'>Back</Button>
      </LinkContainer>

      <ProductDetailsPageContainer>

        <ImageContainer>
          <Image animate resources={mobileItemData.imgUrl} />
        </ImageContainer>

        <DescriptionContainer>
          <MobileInfo mobileItemData={mobileItemData} />
        </DescriptionContainer>

        <ActionsContainer>
          <Project animate header='ACTIONS'>Lorem Lorem</Project>
        </ActionsContainer>

      </ProductDetailsPageContainer>
    </>
  )

}

ProductDetailsPage.propTypes = {
  id: PropTypes.string
};

export default ProductDetailsPage;
