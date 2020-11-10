import React from 'react';
import { render } from '@testing-library/react';
import MobileInfo from "../../pages/ProductDetails/MobileInfo/MobileInfo.component";
import { productDetailsInfo } from "../mocks/productDetailsInfoMock";
import { createTheme, ThemeProvider } from "arwes";
import { customTheme } from "../../assets/styles/customThemeArwes";

describe ('MobileInfo component', () => {

  it ('renders MobileInfo component', () => {
    const mobileItemData = { ... productDetailsInfo }
    render(
      <ThemeProvider theme={createTheme(customTheme)}>
        <MobileInfo mobileItemData={mobileItemData} />
      </ThemeProvider>
    )
  })

})
