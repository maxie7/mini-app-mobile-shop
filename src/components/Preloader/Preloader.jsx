import React from "react";
import { LoadingPageContainer } from "./Preloader.styles";
import { Loading } from "arwes";


const Preloader = () => {
  return (
    <LoadingPageContainer>
      <Loading animate />
      <p>Loading products...</p>
    </LoadingPageContainer>
  );
}

export default Preloader;