import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import client from '../../services/client'

// Material UI
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const TransSuccess = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const trans_status = new URLSearchParams(location.search).get('transaction_status')
    
    useEffect(() => {
        let timeout;
        client.get("/users/transaction/update" ,{
            params: {
                order_id: new URLSearchParams(location.search).get('order_id'), 
                status_code: new URLSearchParams(location.search).get('status_code'), 
                transaction_status: new URLSearchParams(location.search).get('transaction_status'), 
            }
        }).then((res)=>{
            timeout = setTimeout(() => {
                navigate("/cart")
            }, 3000);
        }).catch((err) => {console.log(err)});

        return () => {
            clearTimeout(timeout)
        }
    }, [])
  
    return (
        <div className='w-screen h-screen bg-abu-super-gelap text-oranye flex justify-center items-center'>
            <div className='text-8xl text-center'>
                <div>
                    {trans_status=="settlement" && <CheckCircleOutlineIcon sx={{fontSize: "12rem"}}/>}
                    {trans_status!="settlement" && <CancelOutlinedIcon sx={{fontSize: "12rem"}}/>}
                </div>
                <div className='mx-auto'>Payment {trans_status=="settlement"?"Success":"Failed"}</div>
            </div>
        </div>
    )
}

export default TransSuccess