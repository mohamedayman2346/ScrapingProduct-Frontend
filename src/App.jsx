import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import About from './page/About'
import NotFound from './page/NotFound'
import Wishlist from './page/Wishlist'

function App() {

  return (
   <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
   </>
  )
}

export default App
