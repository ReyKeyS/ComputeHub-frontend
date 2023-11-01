import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <>
        {/* <div className='text-3xl'>LoginPage</div>
        <Link to="/">
        <button className='w-24 h-10 border rounded-lg m-5'>Back</button>
        </Link> */}
        <div className='w-screen h-screen flex flex-col justify-center bg-gradient-to-r from-white to-black'>
          <div className='bg-black text-white'>ComputeHUB</div>
          <div className='bg-black py-5 px-16 w-1/2 m-auto flex flex-col border rounded-xl place-content-center'>
            {/* <h1 className='text-center font-bold text-6xl bg-gradient-to-r from-blue-500 to-red-700 bg-clip-text text-transparent'>LOGIN</h1> */}
            <h1 className='text-center font-bold text-6xl text-oranye'>LOGIN</h1>
            <div className='text-white text-xl mb-1'>Email</div>
            <input type="text" placeholder='Enter your email'  className='mb-3 px-3 py-2 border shadow rounded-lg w-full h-14 text-xl focus:ring-2 focus:ring-blue-500 focus:outline-none'/>
            <div class="text-white text-xl mb-1">Password</div>
            <input type="password" name="pass" placeholder="Enter your password" class="px-3 py-2 border rounded-xl w-full h-14 text-xl shadow focus:ring-2 focus:ring-blue-500 focus:outline-none"></input>
            {/* <div class="text-xl text-center mt-3">Doesn't have an account? &nbsp;<a class="font-semibold text-blue-400 duration-500 hover:text-purple-600 hover:duration-500">Register Now!</a></div> */}
            <div class="text-white text-xl text-center mt-3">Doesn't have an account? &nbsp;<a class="font-semibold text-oranye">Register Now!</a></div>
            <div class="flex">
              <Link to="/">
                {/* <button type="submit" name="home" formaction="index.php" class="my-5 text-lg font-bold mr-auto px-7 py-3 flex text-white rounded-full bg-gradient-to-r from-purple-700 to-blue-600 hover:bg-gradient-to-r hover:from-purple-900 hover:to-blue-800 active:bg-sky-600 focus:ring-4 focus:ring-purple-800"> */}
                <button type="submit" name="home" formaction="index.php" class="my-5 text-lg font-bold mr-auto px-7 py-3 flex text-black rounded-lg bg-oranye">
                HOME
                </button>
              </Link>
              {/* <button type="submit" name="login" class="my-5 text-lg font-bold ml-auto px-7 py-3 text-white rounded-full bg-gradient-to-r from-purple-700 to-blue-600 hover:bg-gradient-to-r hover:from-purple-900 hover:to-blue-800 active:bg-sky-600 focus:ring-4 focus:ring-sky-200">LOGIN</button> */}
              <button type="submit" name="login" class="my-5 text-lg font-bold ml-auto px-7 py-3 text-black rounded-lg bg-oranye">LOGIN</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default LoginPage