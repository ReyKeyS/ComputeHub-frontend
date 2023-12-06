import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import client from '../../services/client'

import Footer from "../../components/Footer"
import Header from "../../components/Header"

// Material UI
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
            console.log(res.data);
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    useEffect(()=>{
        client.get("/items").then((res)=>{
            setListOther(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

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

    return (
        <>
            <Header />
            <div className="w-3/4 mx-auto">
                <div className="text-5xl font-bold my-4">
                    Detail
                </div>
                <div className="grid grid-cols-2 bg-abu-super-gelap rounded-lg p-10 justify-items-center">
                    <img src={import.meta.env.VITE_BACKEND_GET_PICTURE_URL+item.picture} width="50%" />
                    <div className="flex flex-col text-putih">
                        <span className="text-6xl font-extrabold">{item?.name}</span>
                        {item.discount &&  <span className='text-5xl font-extrabold text-oranye'>Rp {item.discount.promo_price.toLocaleString('id-ID')}</span>}
                        <span className={(item.discount?" line-through text-abu-abu text-2xl ":" text-5xl font-extrabold text-oranye")}>Rp {item?.price?.toLocaleString("id-ID")}</span>
                        <span className="text-2xl font-extrabold">Category: {item?.category}</span>
                        <span className="text-2xl font-extrabold">Stok : {item?.stock}</span>
                        <div className='w-full h-full mt-2 mb-8'>
                            {item?.description}
                        </div>
                        <div className="flex gap-3 justify-center">
                            <span className="text-lg text-oranye place-self-center">Amount :</span>
                            <input type="number" className="rounded-lg text-black px-4 py-2 w-[10rem]" min={1} max={item?.stock} value={amount} onChange={(e)=>{if(e.target.value != "") setAmount(e.target.value)}}/>
                            <button className="bg-oranye text-abu-super-gelap px-3 py-2 font-bold rounded-lg" onClick={addToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="text-4xl font-bold mt-5">
                    Other items
                </div>
                <div className="flex snap-x mt-4 mb-8 gap-8">
                    {listOther && listOther.map((i)=>{
                        if (i._id != item._id)
                            return (<>
                                <div className='bg-abu-gelap w-48 h-60 rounded-xl flex flex-col border-2 '>
                                    <div className='h-2/3 flex flex-col-reverse rounded-xl bg-white bg-[url("/img/graphic_card.png")] bg-center'>
                                        <img src={import.meta.env.VITE_BACKEND_GET_PICTURE_URL+i.picture} alt="" />
                                        <div className='grid grid-cols-3 gap-1'>
                                            <div className='col-start-3 font-black'>5<StarIcon sx={{ color: yellow[500] }} /></div>
                                        </div>
                                    </div>
                                    <div className='h-1/3'>
                                        <div className='grid grid-rows-4'>
                                            <div className='row-span-2 text-white font-bold text-xl'>{i.name}</div>
                                            <div className='text-oranye font-bold text-lg'>Rp {i.price.toLocaleString('id-ID')}</div>
                                        </div>
                                    </div>
                                </div>
                            </>)
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default LihatBarang