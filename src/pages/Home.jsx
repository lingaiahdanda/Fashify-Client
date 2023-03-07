import React from 'react'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
        <Announcements></Announcements>
        <Navbar></Navbar>
        <Slider></Slider>
        <Categories></Categories>
        <Products></Products>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </div>
  )
}

export default Home