import { useState } from 'react'
import Navbar from './components/header/navbar'



function App() {

  return (
    <div className="App">
      <div className="navbar lg:px-12 shadow-xl bg-slate-50">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <a href="\home">Home</a>
              <a href="\blogs">Blogs</a>
              <a href="\contact">Contact</a>
              <a href="\service">Service</a>
            </ul>
          </div>
          <a className=" text-2xl font-serif font-bold text-slate-500">MealDB</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className=" flex gap-6 px-1 ">
            <a className='font-semibold text-slate-500 hover:text-orange-500   ' href="\home">Home</a>
            <a className='font-semibold text-slate-500 hover:text-orange-500' href="\blogs">Blogs</a>
            <a className='font-semibold text-slate-500 hover:text-orange-500' href="\contact">Contact</a>
            <a className='font-semibold text-slate-500 hover:text-orange-500' href="\service">Service</a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
