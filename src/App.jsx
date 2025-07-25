import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Sidebar from './component/Sidebar'
import Header from './component/Header'
import Footer from './component/Footer'
import Hero from './component/Hero'

function App() {
  
  return(
    //main div
    <div className='min-h-screen  bg-black overflow-y-hidden  overflow-x-hidden  '>
      <div className='  lg:mx-20 mx-5 min-h-screen flex bg-main-dark-bg '>
      {/* sidebar and main page */}
      <div className='flex hidden md:flex  w-[215px]  text-white flex-col border-r-[1.5px] border-r-border'>
        <Sidebar/>

      </div>
      {/* main page */}
      <div className='min-h-screen md:flex-1 w-full  '>
        <Header />
        <Hero/>
        <Footer/>
       
      </div>
      </div>
    </div>
  )
}

export default App
