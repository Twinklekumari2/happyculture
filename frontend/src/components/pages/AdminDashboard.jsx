import React from 'react'
import NavUnn from '../common/NavUnn'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import Hero from '../pagesCompo/AdminDashboard/Hero'

function AdminDashboard() {
  return (
    <div>
      <Navbar/>
      <NavUnn/>
      <Hero/>
      <Footer/>
    </div>

  )
}

export default AdminDashboard