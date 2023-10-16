import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <>
        <div className='text-3xl'>LoginPage</div>
        <Link to="/">
        <button className='w-24 h-10 border rounded-lg m-5'>Back</button>
        </Link>
    </>
  )
}

export default LoginPage