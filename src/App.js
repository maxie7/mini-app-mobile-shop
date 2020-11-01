import React from 'react';
import { Switch, Route } from "react-router-dom";
import { ThemeProvider, createTheme, Arwes } from 'arwes';
import Header from "./components/Header/Header.component";
import ProductListPage from "./pages/ProductList/ProductListPage.component";
import {customTheme} from "./assets/styles/customThemeArwes";
import {GlobalStyle} from "./assets/styles/global.styles";

const App = () => (
  <ThemeProvider theme={createTheme(customTheme)}>
    <Arwes>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={ProductListPage}/>
        </Switch>
      </div>
    </Arwes>
  </ThemeProvider>
)

export default App;
