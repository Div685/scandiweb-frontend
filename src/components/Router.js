import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ProductList from '../containers/ProductList'
import App from './App';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        {/* Display Form */}
        <Route path="/add-product" element={<App />} />
      </Routes>
    </div>
  )
}

export default Router;
