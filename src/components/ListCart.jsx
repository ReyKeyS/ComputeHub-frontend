import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import client from '../services/client'

// Material UI
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const CardCart = ({item_id, amount, countGrandTotal}) => {
    const navigate = useNavigate()
    const [item, setItem] = useState();
    const [amountItem, setAmountItem] = useState(amount);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(()=>{
        client.get(`/items/${item_id}`).then((res)=>{
            setItem(res.data);
            setSubtotal(res.data.price * amountItem)
        }).catch((err)=>{console.log(err)});
    }, [])

    const minAmount = () => {
        if (amountItem-1 > 0){
            client.put(`/users/carts/edit/${item_id}`, {
                amount: amountItem-1
            }, {
                headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")}
            }).then((res)=>{
                setAmountItem(amountItem-1);
                setSubtotal(res.data.carts.amount * item?.price)
                countGrandTotal();
            }).catch(err=>console.log(err))
        }
    }

    const maxAmount = () => {
        if (amountItem+1 <= item?.stock){
            client.put(`/users/carts/edit/${item_id}`, {
                amount: amountItem+1
            }, {
                headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")}
            }).then((res)=>{
                setAmountItem(amountItem+1);
                setSubtotal(res.data.carts.amount * item?.price)
                countGrandTotal();
            }).catch(err=>console.log(err))
        }
    }

    const removeCart = () => {
        client.delete(`/users/carts/remove/${item_id}`, {
            headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")}
        }).then((res)=>{
            navigate(0)
        }).catch(err=>console.log(err))
    }

    return (
        <div className='bg-abu-super-gelap rounded-2xl px-10 py-8 mb-5 text-white flex relative'>
            <div className='w-1/5'>
                <img src={import.meta.env.VITE_BACKEND_GET_PICTURE_URL+item?.picture} className='w-40 h-40 rounded-xl'/>
            </div>
            <div className='w-4/5'>
                <div className='flex justify-between'>
                    <p className='w-5/6 h-[3rem] text-3xl truncate flex items-center'>{item?.name}</p>
                    <div className='text-2xl'>Stock : <span className='text-oranye'>{item?.stock}</span></div>
                </div>
                <p className='text-2xl'>Price : <span className='text-oranye'>Rp {item?.discount?item?.discount.promo_price.toLocaleString("id-ID"):item?.price.toLocaleString("id-ID")}</span></p>
                <div className='w-1/6'>
                    <p className="text-lg text-oranye text-end me-11">Amount</p>
                    <div className='h-[3rem] flex justify-end items-center mb-1'>
                        <button className='w-8 h-8 bg-oranye rounded-full' onClick={minAmount}><RemoveIcon sx={{color: "black"}}/></button>
                        <input type="text" className="rounded-lg text-black px-4 py-1 mx-2 w-16 text-center text-lg" min={1} max={item?.stock} value={amountItem} readOnly/>
                        <button className='w-8 h-8 bg-oranye rounded-full' onClick={maxAmount}><AddIcon sx={{color: "black"}}/></button>
                    </div>
                </div>
                <div className='absolute bottom-5 right-5'>
                    <p className="text-3xl">Subtotal : &nbsp;<span className='text-oranye'>Rp {subtotal.toLocaleString("id-ID")}</span></p>
                    <div className='w-full flex justify-end mt-7'>
                        <button className='text-xl px-4 py-2 rounded-xl bg-red-600' onClick={removeCart}>Cancel</button>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default CardCart