import React from 'react'
import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Announcements></Announcements>
        <Navbar></Navbar>
        <Slider></Slider>
    </div>
  )
}

export default Home