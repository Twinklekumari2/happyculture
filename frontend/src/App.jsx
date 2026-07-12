import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/pages/SignUp'
import Login from './components/pages/Login'
import UserDashboard from './components/pages/UserDashboard'

const App = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<SignUp/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/user" element={<UserDashboard/>}/>
      </Routes>
    </div>
  )
}

export default App