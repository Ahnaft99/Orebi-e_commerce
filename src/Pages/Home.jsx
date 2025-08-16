import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Offer from '../Components/Offer'
import Three from '../Components/Three'
import NewArrival from '../Components/NewArrival'
import Products from '../Components/Products'
import Banner from '../Components/Banner'
import Banner2 from '../Components/Banner2'
import SpecialOffer from '../Components/SpecialOffer'
import Footer from '../Components/Footer'

const Home = () => {
  return (
   <>
   <Header/>
   <Navbar/>
   <Banner/>
   <Offer/>
   <Three/>
   <NewArrival/>
   <Products/>
   <Banner2/>
   <SpecialOffer/>
   <Footer/>
   </>
  )
}

export default Home