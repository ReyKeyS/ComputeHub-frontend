import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import client from "../../services/client"

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ListCart from '../../components/ListCart'

// Material UI
import Checkbox from '@mui/material/Checkbox';

const Cart = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [user, setUser] = useState()
    const [grandTotal, setGrandTotal] = useState()
    const [buildService, setBuildService] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (new URLSearchParams(location.search).get('transaction_status')) navigate(`/success?order_id=${new URLSearchParams(location.search).get('order_id')}&status_code=${new URLSearchParams(location.search).get('status_code')}&transaction_status=${new URLSearchParams(location.search).get('transaction_status')}`)

        let timeout;
        if (!localStorage.getItem("user_token")) navigate("/")
        
        client.get("/users/detail", {
            headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")},
        }).then((res)=>{
            if (res.data.email_verified){
                setUser(res.data)
                countGrandTotal()

                setTimeout(()=>{
                    setLoading(false)
                }, 1000)
            }else 
                navigate("/verifyemail")
        }).catch((err) => {console.log(err)});

        // Midtrans
        let script = document.createElement('script');
        script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
        script.async = true;
        script.setAttribute('data-client-key', import.meta.env.VITE_CLIENT_KEY)
        document.head.appendChild(script);

        return () => {
            clearTimeout(timeout);
            document.head.removeChild(script);
        };
    }, [])
    
    const countGrandTotal = (build) => {
        client.get("/users/carts/getgrandtotal", {
            headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")},
        }).then((res)=>{
            if (build == null){
                if (buildService)
                    setGrandTotal(res.data.grandtotal + 200000)
                else 
                    setGrandTotal(res.data.grandtotal)
            }else {
                if (build)
                    setGrandTotal(res.data.grandtotal + 200000)
                else 
                    setGrandTotal(res.data.grandtotal)
            }
        }).catch((err) => {console.log(err)});
    }

    const buying = () => {
        client.post("/users/transaction/purchase", {
            build_service: buildService
        }, {
            headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")}
        }).then((res)=>{
            // Midtrans
            window.snap.pay(res.data.midtrans.token, {
                onSuccess: function (result) {
                    navigate(`/success?order_id=${result.order_id}&status_code=${result.status_code}&transaction_status=${result.transaction_status}`)
                },
                onPending: function (result) {
                    navigate(`/success?order_id=${result.order_id}&status_code=${result.status_code}&transaction_status=${result.transaction_status}`)
                },
                onError: function (result) {
                    navigate(`/success?order_id=${result.order_id}&status_code=${result.status_code}&transaction_status=${result.transaction_status}`)
                },
                onClose: function () {

                }
            });
        }).catch(err=>console.log(err))
    }    

    return (<>
        <Header />
        <div className='min-h-[calc(100vh-21rem)] flex justify-center'>
            <div className='w-5/6'>
                <p className='text-5xl font-bold ps-14 py-7'>Your Cart</p>
                <div className='flex justify-center mb-10 min-h-[calc(100vh-34rem)]'>
                    {loading && 
                        <div className='w-full h-[28rem] flex justify-center items-center'>
                            <div className='scale-[5]'><span className="loading loading-infinity loading-lg text-oranye"></span></div>
                        </div>
                    }
                    {!loading && user?.carts.length < 1 && 
                        <div className='flex items-center'>
                            <div className='text-center'>
                                <p className='text-center text-6xl font-extrabold py-2'>Your cart is empty</p>
                                <button className='btn bg-oranye hover:bg-hover-oranye border-0 mt-5 text-xl' onClick={()=>{navigate("/shop")}}>Go back to Shop</button>
                            </div>
                        </div>
                    }
                    {!loading && user?.carts.length > 0 && 
                        <>                        
                            <div className='w-3/4 h-full'>
                                {user?.carts && user?.carts.map((c) =>{
                                    return (<>
                                        <ListCart item_id={c.item_id} amount={c.amount} countGrandTotal={countGrandTotal}/>
                                    </>)
                                })}
                            </div>
                            <div className='w-1/4 ms-10 h-full bg-abu-super-gelap rounded-2xl px-7 py-5'>
                                <div className='flex'>
                                    <Checkbox sx={{ color: "#ffa31a", '& .MuiSvgIcon-root': { fontSize: 42 }, '&.Mui-checked': { color: "#ffa31a" }}} onChange={(e)=>{setBuildService(e.target.checked); countGrandTotal(e.target.checked)}}/>
                                    <div className='ms-3'>
                                        <p className='text-white text-xl'>Build Service</p>
                                        <p className='text-oranye font-bold text-2xl'>Rp 200.000</p>
                                    </div>
                                </div>
                                <p className='text-2xl text-white mt-2'>Grand Total :</p>
                                <p className='my-2 text-center text-4xl text-oranye'>Rp {grandTotal?.toLocaleString("id-ID")}</p>                        
                                <div className='flex justify-end'>
                                    <button className='text-center text-2xl font-bold w-1/3 my-2 py-2 rounded-xl bg-oranye hover:bg-hover-oranye' onClick={buying}>Buy</button>
                                </div>
                            </div>
                        </>
                    }                    
                </div>
            </div>
        </div>
        <Footer />
        <div id="snap-container"></div>
    </>)
}

export default Cart