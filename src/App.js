import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Footer from './components/Footer';
import HeroProducts from './components/Tabs/HeroProducts';
import Navbar from './components/Navbar';
import Carousel from './components/Carou';
import TwoCards from './components/TwoCards';
import Brands from './components/Brands';
import ZaraCTA from './components/ZaraCTA';
import SectionTab from './components/SectionTab';
import HeroPSect from './components/HeroPSect';
function App() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <TwoCards/>
    <HeroPSect/>
    <Brands/>
    <ZaraCTA/>

    </>
  );
}

export default App;
