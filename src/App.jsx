import React from 'react';
import Header from './components/Header';
import Home from './modules/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';
import './App.css';
import About from './modules/About/indexAbout';
import Contact from './modules/Contact/indexContact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  


function App() {
  return(
    <div >
      <Header/>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/products/:id" element= {<Product/>} />
        <Route path="/products"  element= {<Products/>} />
        <Route path='/categories/:name' element={<CategoryProducts/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='*' element={<div>404</div>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
  
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;