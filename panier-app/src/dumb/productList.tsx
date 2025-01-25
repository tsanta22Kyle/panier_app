import { useState } from 'react'
import ProductItem from './productItem'
import CartItem from './dumb/cartItem'
import ProductListSmart from '../smart/productListSmart'


function ProductList(  ) {
  return (
   <ProductListSmart></ProductListSmart>
  )
}

export default ProductList
