import React from 'react'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Announcements></Announcements>
        <Navbar></Navbar>
        <Slider></Slider>
        <Categories></Categories>
        <Products></Products>
    </div>
  )
}

export default Home