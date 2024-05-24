import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='bg-amber-100 lg:h-screen lg:py-12 lg:px-28 flex flex-col justify-between px-10 py-5 w-screen gap-10'>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
