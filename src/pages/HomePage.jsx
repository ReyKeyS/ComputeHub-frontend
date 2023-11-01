import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../component/Header'

function HomePage() {
  return (
    <>
        <Header></Header>
        {/* <NavLink digunakan ketika ingin styling Navbar (active) /> */}
        {/* <NavLink
            className={({ isActive, isPending }) =>
                (isActive?'text-white':'text-black')} 
            to="/"
        >
            Home
        </NavLink> */}
    </>
  )
}

export default HomePage