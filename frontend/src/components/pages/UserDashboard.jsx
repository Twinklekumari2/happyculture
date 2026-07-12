import React from 'react'
import NavUnn from '../common/NavUnn'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import Hero from '../pagesCompo/UserDashboard/Hero'

function UserDashboard() {
  return (
    <div>
      <Navbar/>
      <NavUnn/>
      <Hero/>
      <Footer/>
    </div>

  )
}

export default UserDashboard