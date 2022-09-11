import CategoriesRoute from "../categories/categories.route";
import ProductsListRoute from "../products-list/product-list.route";
import './app.css';
import { Routes, Route } from 'react-router-dom';
import React from "react";
import Checkout from "../checkout/checkout.component";
import Navigation from "navigation/navigation.route";

function App() {
    return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<CategoriesRoute />}/>
          <Route path="/products-list/:id" element={<ProductsListRoute />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Route>
      </Routes>
  );
}

export default App;