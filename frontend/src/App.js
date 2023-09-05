import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Footer from './components/Footer';
import HeroProducts from './components/Tabs/HeroProducts';
import Navbar from './components/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductDetail from './components/ProductDetail';
import { CartProvider } from "./components/CartContext";
import Cart from './components/Cart';
function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Dashboard/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path="/product/:productId" element={<ProductDetail/>}></Route>{/* Define the product detail route */}


    </Routes>
    </BrowserRouter>
    </CartProvider>
    

    </>
  );
}

export default App;
