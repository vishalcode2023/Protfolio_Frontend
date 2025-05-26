import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainComponents from '../LandingPageComponents/MainComponents'
import ContactPage from '../LandingPageComponents/ContactPage'



const MainRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<MainComponents/>} />
            <Route path='/Contact' element={<ContactPage/>} />
        </Routes>
    </div>
  )
}

export default MainRouter