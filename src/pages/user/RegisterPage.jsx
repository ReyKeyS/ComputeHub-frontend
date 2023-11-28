import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Joi from "joi"
import { joiResolver } from "@hookform/resolvers/joi"
import client from "../../services/client"

import ComputerIcon from '@mui/icons-material/Computer';

function RegisterPage() {
    const navigate = useNavigate();

    const schema = Joi.object({
        name: Joi.string().min(3).required().messages({
            "string.empty": "Name is required",
            "string.min": "Name must be at least 3 characters",
        }),
        email: Joi.string().email({ tlds: { allow: false } }).required().messages({ 
            "string.empty": "Email is required",
            "string.email": "Email is not a valid email"
        }),
        address: Joi.string().required().messages({
            "string.empty": "Address is required",
        }),
        phone_number: Joi.string().required().messages({
            "string.empty": "Phone Number is required",
        }),
        password: Joi.string().min(6).required().messages({
            "string.empty": "Password is required",
            "string.min": "Password must be at least 6 characters",
        }),
        confirm_password: Joi.any().equal(Joi.ref("password")).messages({ 
            "any.only": "Konfirmasi Password harus sama dengan password" 
        }),
    })
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({resolver: joiResolver(schema)})

    const registered = (data) => {
        client.post("/users/register", data).then((res)=>{
            alert(res.data.message)
            if (res.status === 201)
                navigate("/login")
        }).catch((err)=>{alert(err.response.data.message);})
    }
    
    return (
        <div className='w-screen h-fit flex flex-col justify-center bg-gradient-to-r from-white to-black'>
            <div className='w-1/2 m-auto'>
            <div className='bg-abu-super-gelap text-white rounded-lg text-6xl p-5 w-1/2 m-auto flex justify-center'><ComputerIcon fontSize=''/><div className='mx-2'>Compute</div><a className='bg-oranye px-1 rounded-lg font-bold text-abu-super-gelap pb-1'>HUB</a></div>
                <div className='bg-abu-super-gelap py-5 px-16 mt-2 w-full m-auto flex flex-col border rounded-3xl place-content-center'>
                    <form onSubmit={handleSubmit(registered)}>
                    <h1 className='text-center font-bold text-4xl text-oranye'>REGISTER</h1>
                    <div className='text-white text-xl mb-1'>Name</div>
                    <input type="text" placeholder= "Enter your name"   {...register('name')} className={`mb-3 px-3 py-2 border shadow rounded-lg w-full h-14 text-xl focus:ring-2 focus:ring-blue-500 focus:outline-none `} />
                    <div className='w-4/6 h-4 flex justify-start mt-1'>
                        <span className='text-red-500 text-xl'>{errors?.name?.message}</span>
                    </div><br />
                    <div className='text-white text-xl mb-1'>Email</div>
                    <input type="text"  placeholder="Enter your Email" {...register('email')} className={`mb-3 px-3 py-2 border shadow rounded-lg w-full h-14 text-xl focus:ring-2 focus:ring-blue-500 focus:outline-none `} />
                    <div className='w-4/6 h-4 flex justify-start mt-1'>
                        <span className='text-red-500 text-xl'>{errors?.email?.message}</span>
                    </div><br />
                    <div className='text-white text-xl mb-1'>Address</div>
                    <input type="text" placeholder= "Enter your Address"{...register('address')} className={`mb-3 px-3 py-2 border shadow rounded-lg w-full h-14 text-xl focus:ring-2 focus:ring-blue-500 focus:outline-none `}/>
                    <div className='w-4/6 h-4 flex justify-start mt-1'>
                        <span className='text-red-500 text-xl'>{errors?.address?.message}</span>
                    </div><br />
                    <div className='text-white text-xl mb-1'>Phone Number</div>
                    <input type="text" placeholder= "Enter your Phone Number" {...register('phone_number')} className={`mb-3 px-3 py-2 border shadow rounded-lg w-full h-14 text-xl focus:ring-2 focus:ring-blue-500 focus:outline-none `} />
                    <div className='w-4/6 h-4 flex justify-start mt-1'>
                        <span className='text-red-500 text-xl'>{errors?.phone_number?.message}</span>
                    </div><br />
                    <div className='text-white text-xl mb-1'>Password</div>
                    <input type="password" placeholder="Enter your Password" {...register('password')} className={`mb-3 px-3 py-2 border shadow rounded-lg w-full h-14 text-xl focus:ring-2 focus:ring-blue-500 focus:outline-none `}/>
                    <div className='w-4/6 h-4 flex justify-start mt-1'>
                        <span className='text-red-500 text-xl'>{errors?.password?.message}</span>
                    </div><br />
                    <div className='text-white text-xl mb-1'>Confirm Password</div>
                    <input type="password" placeholder='Enter your confirm password' {...register('confirm_password')} className={`mb-3 px-3 py-2 border shadow rounded-lg w-full h-14 text-xl focus:ring-2 focus:ring-blue-500 focus:outline-none `} />
                    <div className='w-4/6 h-4 flex justify-start mt-1'>
                        <span className='text-red-500 text-xl'>{errors?.confirm_password?.message}</span>
                    </div><br />

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