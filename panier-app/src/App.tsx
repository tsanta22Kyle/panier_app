import { useState } from 'react'
import ProductItem from './dumb/productItem'
import CartItem from './dumb/cartItem'
import NavBar from './dumb/navbar'
import ProductListSmart from './smart/productListSmart'
import HeroSection from './dumb/hero'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <ProductListSmart></ProductListSmart>
    </>
  )
}

export default App
