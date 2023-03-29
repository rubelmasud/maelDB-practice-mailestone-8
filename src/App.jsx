import { useState } from 'react'
import CartContainer from './components/cart-container/CartContainer'
import Navbar from './components/header/Navbar'



function App() {

  return (
    <div className="App bg-slate-200">
      <Navbar />
      <CartContainer />
    </div>
  )
}

export default App
