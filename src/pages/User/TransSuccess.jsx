import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import client from '../../services/client'

const TransSuccess = () => {
    const location = useLocation()
    const navigate = useNavigate()
    
    useEffect(() => {
        client.get("/users/transaction/update" ,{
            params: { 
                order_id: new URLSearchParams(location.search).get('order_id'), 
                status_code: new URLSearchParams(location.search).get('status_code'), 
                transaction_status: new URLSearchParams(location.search).get('transaction_status'), 
            }
        }).then((res)=>{navigate("/cart")}).catch((err) => {console.log(err)});
    }, [])
  
    return (
        <div className='w-screen h-screen flex items-center justify-center bg-oranye'>
            <p className='text-6xl'>Payment Success</p>
        </div>
    )
}

export default TransSuccess