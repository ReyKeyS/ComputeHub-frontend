import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import client from "../../services/client"

import Footer from "../../components/Footer"
import Header from "../../components/Header"

// Material UI
import Checkbox from '@mui/material/Checkbox';

const Cart = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [grandTotal, setGrandTotal] = useState()

    useEffect(() => {
        if (!localStorage.getItem("user_token")) navigate("/")
        
        client.get("/users/detail", {
            headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")},
        }).then((res)=>{
            setUser(res.data)
        }).catch((err) => {console.log(err)});
    }, [])
    
    return (<>
        <Header />
        <div className='min-h-[calc(100vh-21rem)] flex justify-center'>
            <div className='w-5/6'>
                <p className='text-4xl font-bold ps-14 py-4'>Your Cart</p>
                <div className='flex justify-center mb-16'>
                    <div className='w-3/4 h-full bg-abu-super-gelap rounded-2xl px-8 py-6'>
                        {user?.carts.length < 1 && 
                            <p className='text-white text-center text-5xl py-2'>Your cart is empty</p>
                        }
                        {user?.carts && user?.carts.map((c) =>{
                            return (<>
                                <p className='text-white'>{c.item_id}</p>
                            </>)
                        })}
                    </div>
                    <div className='w-1/4 ms-10 h-full bg-abu-super-gelap rounded-2xl px-7 py-5'>
                        <div className='flex'>
                            <Checkbox sx={{ color: "#ffa31a", '& .MuiSvgIcon-root': { fontSize: 42 }, '&.Mui-checked': { color: "#ffa31a" }}}/>
                            <div className='ms-3'>
                                <p className='text-white text-xl'>Build Service</p>
                                <p className='text-oranye font-bold text-2xl'>Rp 200.000</p>
                            </div>
                        </div>
                        <p className='text-2xl text-white mt-2'>Grand Total :</p>
                        <p className='my-2 text-center text-4xl text-oranye'>Rp 1.000.000.000</p>                        
                        <div className='flex justify-end'>
                            <button className='text-center text-2xl font-bold w-1/3 my-2 py-2 rounded-xl bg-oranye hover:bg-hover-oranye'>Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}

export default Cart