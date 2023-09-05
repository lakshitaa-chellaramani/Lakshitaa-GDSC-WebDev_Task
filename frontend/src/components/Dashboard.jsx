import React from 'react'
import Footer from './Footer';
import Carousel from './Carou';
import TwoCards from './TwoCards';
import Brands from './Brands';
import HeroPSect from './HeroPSect';
import ZaraCTA from './ZaraCTA';
import HeroProducts from './Tabs/HeroProducts';
const Dashboard = () => {
  return (
    <div>
    <Carousel/>
    <TwoCards/>
    <HeroProducts/>
    <Brands/>
    <ZaraCTA/>
    <Footer/>
    </div>
  )
}

export default Dashboard
