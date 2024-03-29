import React from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Joi from "joi"
import { joiResolver } from "@hookform/resolvers/joi"
import client from "../../services/client"

import ComputerIcon from '@mui/icons-material/Computer';

function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user_token")){
      client.get('/users/detail', {
        headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")},
      }).then((res) => {
        if (res.data.role == 0) 
          navigate("/admin")
        else 
          navigate("/")
      }).catch((err) => {
        console.log(err);
      })
    }
  }, [])

  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({ 
      "string.empty": "Email is required",
      "string.email": "Email is not a valid email"
    }),
    password: Joi.string().min(6).required().messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 6 characters",
    }),
  })
  const { register, handleSubmit, reset, formState: { errors } } = useForm({resolver: joiResolver(schema)})

  function login(data){
    const login = client.post("/users/login", data).then((res)=>{
      localStorage.setItem("user_token", res.data.data.token)
      if (res.data.data.role == 0){
        navigate("/admin/")
      }else{
        navigate("/")
      }
    }).catch((err)=>{
      console.log(err);
      alert(err.response.data.message)
    })
  }

  return (
    <>
      {/* <div className='text-3xl'>LoginPage</div>
        <Link to="/">
        <button className='w-24 h-10 border rounded-lg m-5'>Back</button>
        </Link> */}
      <div className='w-screen h-screen flex flex-col justify-center bg-gradient-to-r from-white via-abu-abu to-abu-gelap animate-geserBg'>
        <div className='w-1/2 m-auto'>
          <div className='bg-abu-super-gelap text-white rounded-lg text-6xl p-5 w-fit m-auto flex justify-center'><ComputerIcon fontSize=''/><div className='mx-2'>Compute</div><a className='bg-oranye rounded-lg font-bold text-abu-super-gelap pb-1'>HUB</a></div>
          <div className='bg-abu-super-gelap py-5 px-16 mt-10 w-full m-auto flex flex-col border rounded-3xl place-content-center'>
            {/* <h1 className='text-center font-bold text-6xl bg-gradient-to-r from-blue-500 to-red-700 bg-clip-text text-transparent'>LOGIN</h1> */}
            <form onSubmit={handleSubmit(login)}>
            <h1 className='text-center font-bold text-4xl text-oranye'>LOGIN</h1>
            <div className='text-white text-xl mb-1'>Email</div>
            <input type="email" name='email' id='email' placeholder='Enter your email' {...register('email')} className='mb-3 px-3 py-2 border shadow rounded-lg w-full h-14 text-xl focus:ring-2 focus:ring-blue-500 focus:outline-none'/>
            <div className="text-white text-xl mb-1">Password</div>
            <input type="password" name="pass" id='pass' placeholder="Enter your password" {...register('password')} className="px-3 py-2 border rounded-xl w-full h-14 text-xl shadow focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
            {/* <div class="text-xl text-center mt-3">Doesn't have an account? &nbsp;<a class="font-semibold text-blue-400 duration-500 hover:text-purple-600 hover:duration-500">Register Now!</a></div> */}
            <div className="text-white text-xl text-center mt-3">Doesn't have an account? &nbsp;<Link to="/register"><a id='register_now' className="font-semibold text-oranye">Register Now!</a></Link></div>
            <div className="flex justify-between">
              {/* <button type="submit" name="home" formaction="index.php" class="my-5 text-lg font-bold mr-auto px-7 py-3 flex text-white rounded-full bg-gradient-to-r from-purple-700 to-blue-600 hover:bg-gradient-to-r hover:from-purple-900 hover:to-blue-800 active:bg-sky-600 focus:ring-4 focus:ring-purple-800"> */}
              <button type="button" name="home" id='home' className="my-5 text-lg font-extrabold px-7 py-3 flex text-abu-super-gelap rounded-lg bg-oranye" onClick={()=>{navigate("/")}}>
                HOME
              </button>
              <div className={'mt-3 h-16 text-xl text-red-500 text-center' + ((errors.email && errors.password)?' pt-1':' flex items-center')}>
                <div>{errors.email && <span>{errors.email.message}</span>}</div>
                <div>{errors.password && <span>{errors.password.message}</span>}</div>
              </div>
              {/* <button type="submit" name="login" class="my-5 text-lg font-bold ml-auto px-7 py-3 text-white rounded-full bg-gradient-to-r from-purple-700 to-blue-600 hover:bg-gradient-to-r hover:from-purple-900 hover:to-blue-800 active:bg-sky-600 focus:ring-4 focus:ring-sky-200">LOGIN</button> */}
              <button type="submit" name='login' id='login' className="my-5 text-lg font-extrabold px-7 py-3 text-abu-super-gelap rounded-lg bg-oranye">LOGIN</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage