import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import CardGroup from '../components/CardGroup'

export default function Home() {
  
  return (
    <div>
      <Navbar />
      <Herosection  />
      <CardGroup />
    </div>
  )
}
