import React from 'react';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import client from '../../services/client'

import Footer from "../../components/Footer"
import Header from "../../components/Header"

// Material UI
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';

function Shop(params) {
    const navigate = useNavigate()
    const [listItem, setListItem] = useState([])
    const [search, setSearch] = useState("")
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(999999999999999)

    useEffect(()=>{
        client.get("/items", {params: {
            search: search,
            harga_min: minPrice,
            harga_max: maxPrice,
        }}
        ).then((res)=>{
            setListItem(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [search, minPrice, maxPrice])

    return (
        <>
            <Header />
            <div className="p-20 grid grid-cols-3">
                <span className="font-bold text-5xl">All Product</span>
                <span className="col-start-3 ml-auto text-abu-abu font-bold text-2xl">Sort By : Price (Up)</span>
                <div className="w-1/2 h-96 bg-abu-gelap rounded-xl grid justify-center">
                    <span className="text-putih text-3xl font-bold text-center">Filter</span>
                    <span className="text-putih text-lg font-bold">Harga (Rp)</span>
                    <input type="number" placeholder="Harga Minimum" className="border rounded-lg w-3/4 h-1/2" step={1000} value={minPrice} onChange={(e)=>{if(e.target.value != "") setMinPrice(e.target.value)}}/>
                    <input type="number" placeholder="Harga Maximum" className="border rounded-lg mt-3 w-3/4 h-1/2" step={1000} value={maxPrice} onChange={(e)=>{if(e.target.value != "") setMaxPrice(e.target.value)}}/>
                    <span className="text-putih">Rating</span>
                    <div className="flex justify-between place-items-center">
                        <input type="checkbox" className="w-5 h-5"/>
                        <Stack spacing={1} className="bg-white h-max rounded-xl p-1">
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        </Stack>
                    </div>
                </div>
                <div className="col-span-2 grid grid-cols-4">
                    {listItem && listItem.map((item) => {
                        return (
                            <Link to={`/barang/${item._id}`}>
                            <div className='bg-abu-gelap w-48 h-60 rounded-xl flex flex-col border-2 mt-14'>
                                <div className='h-2/3 flex flex-col-reverse rounded-xl bg-white bg-[url("/img/graphic_card.png")] bg-center'>
                                    <img src={import.meta.env.VITE_BACKEND_GET_PICTURE_URL+item.picture} alt="" />
                                    {/* <div className='grid grid-cols-3 gap-1'>
                                        <div className='col-start-3 text-white'>5<StarIcon sx={{ color: yellow[500] }} /></div>
                                    </div> */}
                                </div>
                                <div className='h-1/3'>
                                    <div className='grid grid-rows-4'>
                                        <div className='row-span-2 text-white font-bold text-xl'>{item.name}</div>
                                        {item.discount && 
                                            <div className='text-oranye font-bold text-lg'>Rp {item.discount.promo_price.toLocaleString('id-ID')}</div>
                                        }
                                        <div className={'text-oranye font-bold text-lg' + (item.discount?" line-through":"")}>Rp {item.price.toLocaleString('id-ID')}</div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        )
                    })}

                    {/* INI BERULANG */}
                    {/* <div className='bg-abu-gelap w-48 h-60 rounded-xl flex flex-col border-2 '>
                        <div className='h-2/3 flex flex-col-reverse rounded-xl bg-white bg-[url("/img/graphic_card.png")] bg-center'>
                            <div className='grid grid-cols-3 gap-1'>
                                <div className='col-start-3 font-black'>5<StarIcon sx={{ color: yellow[500] }} /></div>
                            </div>
                        </div>
                        <div className='h-1/3'>
                            <div className='grid grid-rows-4'>
                                <div className='row-span-2 text-white font-bold text-xl'>VGA ASUS ROG</div>
                                <div className='text-oranye font-bold text-lg'>Rp 9.000.000</div>
                            </div>
                        </div>
                    </div> */}
                    
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Shop