import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../component/Header'

function HomePage() {
  return (
    <>
      <Header />
      <div className='w-screen h-[768px] bg-[url(https://source.unsplash.com/1920x768/?tech)]'></div>
      {/* <div className="bg-cover"
        style={{
          backgroundImage: 'url(https://source.unsplash.com/1920x1080/?tech)',
          // Atur kelas CSS Tailwind lainnya di sini sesuai kebutuhan
        }}></div> */}
      {/* <img src="https://source.unsplash.com/1920x768/?tech" alt="" /> */}
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