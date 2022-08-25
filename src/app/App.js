import CategoriesRoute from "../categories/categories.route";
import ProductsListRoute from "../products-list/product-list.route";
import './app.css';
import { Routes, Route } from 'react-router-dom';
import Cart from '../cart/cart.route';
import React from "react";
import Root from "../root/root.component";
import Checkout from "../checkout/checkout.component";

function App() {
    return (
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<CategoriesRoute />}/>
          <Route path="/products-list/:id" element={<ProductsListRoute />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Route>
      </Routes>
  );
}

export default App;