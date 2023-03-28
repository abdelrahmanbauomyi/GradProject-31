import React from 'react'
import Home from '../components/Home/Home'
import Header from '../components/NavigationBar/Navbar/Header'
import Footer from '../components/Footer/Footer'
import Subscribe from '../components/Footer/Subscribe'
 import Tiktok from '../TiktokReels/Tiktok'
const HomeScreen = () => {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Tiktok/>
      <Subscribe/>
      <Footer/>
      
    </div>
  )
}

export default HomeScreen
