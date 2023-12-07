import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import client from '../../services/client'

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import CardBarang from "../../components/CardBarang"

// Material UI
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';

function LihatBarang() {
    const navigate = useNavigate()
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [listOther, setListOther] = useState([])
    const [amount, setAmount] = useState(1)

    useEffect(() => {
        client.get(`/items/${id}`).then((res) => {
            setItem(res.data)
        }).catch((err) => {
            console.log(err)
            if (err.response.status == 404)
                navigate("/error")
        })
    }, [id])

    useEffect(()=>{
        client.get("/items").then((res)=>{
            let temp = []
            for (const i of res.data) {
                if (i.category == item?.category) 
                    temp.push(i)
            }
            setListOther(temp)
        }).catch((err)=>{
            console.log(err)
        })
    }, [item, id])

    const addToCart = () => {
        client.post("/users/carts/add", {
            items: [{
                item_id: id,
                amount: amount,
            }]
        },{
            headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")},
        }).then((res)=>{
            alert(res.data.message)
            navigate("/cart")
        }).catch((err)=>{console.log(err)});
    }

    const minAmount = () => {
        if (amount-1 > 0){
            setAmount(amount-1)
        }
    }

    const maxAmount = () => {
        if (amount+1 <= item?.stock){
            setAmount(amount+1)
        }
    }

    return (
        <>
            <Header />
            <div className="w-3/4 mx-auto">
                <div className="text-5xl font-bold my-4">
                    Detail
                </div>
                <div className="grid grid-cols-2 bg-abu-super-gelap rounded-lg p-10 justify-items-center">
                    <img src={import.meta.env.VITE_BACKEND_GET_PICTURE_URL+item.picture} width="75%" />
                    <div className="flex flex-col text-putih">
                        <span className="text-6xl font-extrabold">{item?.name}</span>
                        {item.discount &&  <span className='text-5xl font-extrabold text-oranye'>Rp {item.discount.promo_price.toLocaleString('id-ID')}</span>}
                        <span className={(item.discount?" line-through text-abu-abu text-2xl ":" text-5xl font-extrabold text-oranye")}>Rp {item?.price?.toLocaleString("id-ID")}</span>
                        <span className="text-2xl font-extrabold">Category: {item?.category}</span>
                        <span className="text-2xl font-extrabold">Stok : {item?.stock}</span>
                        <div className='w-full h-full mt-2 mb-8 text-lg'>
                            {item?.description}
                        </div>
                        <div className="flex gap-3 justify-end items-center">
                            <div><span className="text-lg text-oranye">Amount :</span></div>
                            <div className='w-1/4'>
                                <div className='h-[3rem] flex justify-end items-center'>
                                    <button className='w-8 h-8 bg-oranye rounded-full' onClick={minAmount}><RemoveIcon sx={{color: "black"}}/></button>
                                    <input type="text" className="rounded-lg text-black px-4 py-1 mx-2 w-16 text-center text-lg" min={1} max={item?.stock} value={amount} readOnly/>
                                    <button className='w-8 h-8 bg-oranye rounded-full' onClick={maxAmount}><AddIcon sx={{color: "black"}}/></button>
                                </div>
                            </div>
                            <button className="bg-oranye text-abu-super-gelap ms-10 px-4 py-2 text-xl font-bold rounded-lg" disabled={localStorage.getItem("user_token")?false:true} onClick={addToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="text-4xl font-bold mt-5">
                    Similar items
                </div>
                <div className='w-full snap-x flex overflow-x-scroll no-scrollbar'>

                    {listOther?.map((item, index) => {
                    return(<div className='snap-center'>
                        <CardBarang key={index} item={item}/>
                    </div>)
                    })}

                </div>
            </div>
            <Footer />
        </>
    )
}
export default LihatBarang