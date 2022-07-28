import CategoriesRoute from "../categories/categories.route";
import ProductsListRoute from "../products-list/product-list.route";
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CategoriesRoute />}/>
      <Route path="/products-list/:id" element={<ProductsListRoute />}/>
    </Routes>
  );
}

export default App;

// <div className="App">
// <CategoriesRoute />
// </div>