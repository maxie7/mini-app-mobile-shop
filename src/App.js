import React from 'react';
import './App.css';
import Header from "./components/header/header.component";
import { Switch, Route } from "react-router-dom";
import ProductListPage from "./pages/plp/product-list-page.component";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={ProductListPage}/>
      </Switch>
    </div>
  );
}

export default App;
