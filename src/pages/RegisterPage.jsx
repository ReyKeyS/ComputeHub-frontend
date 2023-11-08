import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Joi from "joi"
import { joiResolver } from "@hookform/resolvers/joi"
import client from "../services/client"

import ComputerIcon from '@mui/icons-material/Computer';

function RegisterPage() {
    const navigate = useNavigate();

    const schema = Joi.object({
        name: Joi.string().min(3).required().label("Display_Name").messages({
            "any.required": "{{label}} is required",
            "string.min": "{{#label}} must be at least 3 characters",
        }),
        email: Joi.string().email({ tlds: { allow: false } }).required().label("Email").messages({ 
            "any.required": "{{label}} is required",
            "string.email": "{{#label}} is not a valid email"
        }),
        address: Joi.string().required().label("Address").messages({
            "any.required": "{{label}} is required",
        }),
        phone_number: Joi.string().required().label("Phone_Number").messages({
            "any.required": "{{label}} is required",
        }),
        password: Joi.string().min(6).required().label("Password").messages({
            "any.required": "{{label}} is required",
            "string.min": "{{#label}} must be at least 6 characters",
        }),
        confirm_password: Joi.any().equal(Joi.ref("password")).label("Konfirmasi Password").messages({ 
            "any.only": "{{#label}} harus sama dengan password" 
        }),
    })
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({resolver: joiResolver(schema)})

    function registered(data){
        const registering = client.post("/users/register", data).then((res)=>{
            console.log(res)
            if (res.status === 201)
                navigate("/login")
        }).catch((err)=>{console.log(err);})
    }
    
    return (
        <div className='w-screen h-screen flex flex-col justify-center bg-gradient-to-r from-white to-black'>
            <div className='w-1/2 m-auto'>
            <div className='bg-abu-super-gelap text-white rounded-lg text-6xl p-5 w-1/2 m-auto flex justify-center'><ComputerIcon fontSize=''/><div className='mx-2'>Compute</div><a className='bg-oranye px-1 rounded-lg font-bold text-abu-super-gelap pb-1'>HUB</a></div>
                <div className='bg-abu-super-gelap py-5 px-16 mt-2 w-full m-auto flex flex-col border rounded-3xl place-content-center'>
                    <form onSubmit={handleSubmit(registered)}>
                    <h1 className='text-center font-bold text-4xl text-oranye'>REGISTER</h1>
                    <div className='text-white text-xl mb-1'>Name</div>
                    <input type="text" placeholder='Enter your name' {...register('name')} className='mb-3 px-3 py-2 border shadow rounded-lg w-full h-14 text-xl focus:ring-2 focus:ring-blue-500 focus:outline-none' />
                    <div className='text-white text-xl mb-1'>Email</div>
                    <input type="text" placeholder='Enter your email' {...register('email')} className='mb-3 px-3 py-2 border shadow rounded-lg w-full h-14 text-xl focus:ring-2 focus:ring-blue-500 focus:outline-none' />
                    <div className='text-white text-xl mb-1'>Address</div>
                    <input type="text" placeholder='Enter your address' {...register('address')} className='mb-3 px-3 py-2 border shadow rounded-lg w-full h-14 text-xl focus:ring-2 focus:ring-blue-500 focus:outline-none' />
                    <div className='text-white text-xl mb-1'>Phone Number</div>
                    <input type="text" placeholder='Enter your phone number' {...register('phone_number')} className='mb-3 px-3 py-2 border shadow rounded-lg w-full h-14 text-xl focus:ring-2 focus:ring-blue-500 focus:outline-none' />
                    <div className='text-white text-xl mb-1'>Password</div>
                    <input type="password" placeholder='Enter your password' {...register('password')} className='mb-3 px-3 py-2 border shadow rounded-lg w-full h-14 text-xl focus:ring-2 focus:ring-blue-500 focus:outline-none' />
                    <div className='text-white text-xl mb-1'>Confirm Password</div>
                    <input type="password" placeholder='Enter your confirm password' {...register('confirm_password')} className='mb-3 px-3 py-2 border shadow rounded-lg w-full h-14 text-xl focus:ring-2 focus:ring-blue-500 focus:outline-none' />
                    <div className="text-white text-xl text-center mt-3">Already have an account? &nbsp;<Link to="/login"><a className="font-semibold text-oranye">Login Now!</a></Link></div>
                    <div className="flex">
                        <Link to="/">
                            {/* <button type="submit" name="home" formaction="index.php" className="my-5 text-lg font-bold mr-auto px-7 py-3 flex text-white rounded-full bg-gradient-to-r from-purple-700 to-blue-600 hover:bg-gradient-to-r hover:from-purple-900 hover:to-blue-800 active:bg-sky-600 focus:ring-4 focus:ring-purple-800"> */}
                            <button type="button" name="home" className="my-5 text-lg font-extrabold mr-auto px-7 py-3 flex text-abu-super-gelap rounded-lg bg-oranye">
                                HOME
                            </button>
                        </Link>
                        {/* <button type="submit" name="login" className="my-5 text-lg font-bold ml-auto px-7 py-3 text-white rounded-full bg-gradient-to-r from-purple-700 to-blue-600 hover:bg-gradient-to-r hover:from-purple-900 hover:to-blue-800 active:bg-sky-600 focus:ring-4 focus:ring-sky-200">LOGIN</button> */}
                        <button type="submit" name="register" className="my-5 text-lg font-extrabold ml-auto px-7 py-3 text-abu-super-gelap rounded-lg bg-oranye">REGISTER</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default RegisterPage