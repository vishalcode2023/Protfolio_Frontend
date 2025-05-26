import React from 'react'
import MainRouter from './Components/NavbarComponents/MainRouter'
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <div className='w-full h-auto overflow-hidden'>
      <Toaster position="top-center" reverseOrder={false} />
      <MainRouter/>
    </div>
  )
}

export default App