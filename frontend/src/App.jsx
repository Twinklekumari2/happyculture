import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/pages/SignUp'

const App = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App