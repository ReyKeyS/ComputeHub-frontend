import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
        <div className='text-3xl'>HomePage</div>
        <Link to="/login">
            <button className='w-24 h-10 border rounded-lg m-5'>Login</button>
        </Link>
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