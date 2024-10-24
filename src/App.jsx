import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import mens_banner from './Components/Assets/banner_mens.jpg';
import womens_banner from './Components/Assets/banner_womens.png';
import kids_banner from './Components/Assets/banner_kids.jpg';


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={mens_banner} category="men"/>} />
        <Route path='/womens' element={<ShopCategory banner={womens_banner} category="women"/>} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>} />
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </>
  )
}

export default App
