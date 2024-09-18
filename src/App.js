
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Product from './Pages/Product'
import ProductDetail from './Pages/ProductDetail'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Pages/Home'
import Cart from './Pages/Cart'

import Footer from './Components/Footer/Footer'
import { CartProvider } from './Pages/CartContext'
function App() {
    
  return (
    <div >
    <CartProvider>
     <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product/:id' element={<ProductDetail  />} />
      <Route path='/cart' element={<Cart  />} />
     </Routes>
     <Footer/>
     </BrowserRouter> 
     </CartProvider>  
     
      
    </div>
  );
}

export default App;
