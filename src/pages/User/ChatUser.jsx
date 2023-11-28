import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import client from "../../services/client"

import Footer from "../../components/Footer"
import Header from "../../components/Header"

// Material UI
import { TextField } from '@mui/material'

const ChatUser = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("user_token")) navigate("/")
    }, [])
    
    return (<>
        <Header />
        <div className='min-h-[calc(100vh-5rem)] flex justify-center p-10'>
            <div className='w-3/5 bg-abu-super-gelap rounded-2xl px-8 py-6'>
                <div className='flex pb-5 border-b-2 border-oranye'>
                    <img src="/img/istts_bg.png" alt="" className='w-12 h-12'/>
                    <p className='text-oranye text-4xl mt-1 ms-5'>Chat Admin</p>
                </div>
                <div className='w-full min-h-[calc(100vh-23rem)] bg-abu-abu overflow-y-auto'>
                    {/* Isi Chat */}
                </div>
                <div className='w-full flex border-t-2 border-oranye pt-7'>
                    <input type="text" className='w-full px-7 py-3 rounded-xl text-xl text-white bg-abu-gelap' placeholder='Type here...'/>
                    <button className='px-12 py-2 ms-5 rounded-xl bg-oranye hover:bg-hover-oranye transition duration-300 text-2xl tracking-wide text-white font-bold'>Send</button>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}

export default ChatUser