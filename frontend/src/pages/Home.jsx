import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Cards'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Card/>
        <Footer/>
    </div>
  )
}

export default Home