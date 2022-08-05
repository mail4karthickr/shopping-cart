import CategoriesRoute from "../categories/categories.route";
import ProductsListRoute from "../products-list/product-list.route";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../navigation/navigation.route';
import Cart from '../cart/cart.route';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<CategoriesRoute />}/>
        <Route path="/products-list/:id" element={<ProductsListRoute />}/>
        <Route path="/cart" element={<Cart />}/>
      </Route>
    </Routes>
  );
}

export default App;

// <div className="App">
// <CategoriesRoute />
// </div>