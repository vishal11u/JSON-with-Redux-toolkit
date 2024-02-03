import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import ProductsCard from './Component/ProductCard/ProductsCard';
import {Routes,Route} from 'react-router-dom';
import ShoppingCart from './Component/shoppingCart/ShoppingCart';
import Login from './Component/Login/Login';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductsCard/>}/>
        <Route path='/shoppingcart' element={<ShoppingCart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App;