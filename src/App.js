import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Footer from './components/Footer';
import HeroProducts from './components/HeroProducts';
import Navbar from './components/Navbar';
import Carousel from './components/Carou';
import TwoCards from './components/TwoCards';
import Brands from './components/Brands';
import ZaraCTA from './components/ZaraCTA';
function App() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <TwoCards/>
    <HeroProducts/> 
    <Brands/>
    <ZaraCTA/>

    </>
  );
}

export default App;
