import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import ProductCost from './components/ProductCost'
import ProductName from './components/ProductName'
import ProductSale from './components/ProductSale'
import ProductSort from './components/ProductSort'

export default function App() {
  return (
    <div className="App">
      <ProductCost/>
      <ProductName/>
      <ProductSale/>
      <ProductSort/>
    </div>
  )
}
