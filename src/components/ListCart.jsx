import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import client from '../services/client'

const CardCart = ({item_id, amount}) => {
    const navigate = useNavigate()
    const [item, setItem] = useState();

    useEffect(()=>{
        client.get(`/items/${item_id}`).then((res)=>{
            setItem(res.data);
        }).catch((err)=>{console.log(err)});
    }, [])

    return (
        <div className='bg-abu-super-gelap rounded-2xl px-8 py-6 mb-5 text-white flex'>
            <div>
                <img src={import.meta.env.VITE_BACKEND_GET_PICTURE_URL+item.picture} className='w-40 h-40 rounded-xl'/>
            </div>
            <div className=''>
                {item?.name}
            </div>
        </div>
    )
}

export default CardCart