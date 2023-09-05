import React from 'react'
import Footer from './Footer';
import Carousel from './Carou';
import Brands from './Brands';
import ZaraCTA from './ZaraCTA';
import HeroProducts from './Tabs/HeroProducts';
const Dashboard = () => {
  return (
    <div>
    <Carousel/>
    <HeroProducts/>
    <Brands/>
    <ZaraCTA/>
    <Footer/>
    </div>
  )
}

export default Dashboard
