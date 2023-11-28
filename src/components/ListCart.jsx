import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import client from '../services/client'

const CardCart = ({item_id, amount, setGrandTotal}) => {
    const navigate = useNavigate()
    const [item, setItem] = useState();

    useEffect(()=>{
        client.get(`/items/${item_id}`).then((res)=>{
            setItem(res.data);
        }).catch((err)=>{console.log(err)});
    }, [])

    return (
        <div className='bg-abu-super-gelap rounded-2xl px-10 py-8 mb-5 text-white flex'>
            <div className='w-1/5'>
                <img src={import.meta.env.VITE_BACKEND_GET_PICTURE_URL+item?.picture} className='w-40 h-40 rounded-xl'/>
            </div>
            <div className='w-4/5'>
                <div className='flex justify-between'>
                    <div className='text-4xl'>{item?.name}</div>
                    <div className='text-2xl'>Stock : <span className='text-oranye'>{item?.stock}</span></div>
                </div>
                <p className='text-2xl mt-3'>Price : <span className='text-oranye'>Rp {item?.discount?item?.discount.promo_price.toLocaleString("id-ID"):item?.price.toLocaleString("id-ID")}</span></p>
            </div>
        </div>
    )
}

export default CardCart