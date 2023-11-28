import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import client from "../../services/client"

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ListCart from '../../components/ListCart'

// Material UI
import Checkbox from '@mui/material/Checkbox';

const Cart = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [grandTotal, setGrandTotal] = useState()
    const [buildService, setBuildService] = useState(false)

    useEffect(() => {
        if (!localStorage.getItem("user_token")) navigate("/")
        
        client.get("/users/detail", {
            headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")},
        }).then((res)=>{
            setUser(res.data)
            countGrandTotal()
        }).catch((err) => {console.log(err)});

        // Midtrans
        let script = document.createElement('script');
        script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
        script.async = true;
        script.setAttribute('data-client-key', import.meta.env.VITE_CLIENT_KEY)
        document.head.appendChild(script);
        return () => {
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
                    /* You may add your own implementation here */
                    alert("Payment success!");
                    console.log(result);
                },
                onPending: function (result) {
                    /* You may add your own implementation here */
                    alert("Waiting for your payment!");
                    console.log(result);
                },
                onError: function (result) {
                    /* You may add your own implementation here */
                    alert("Payment failed!");
                    console.log(result);
                },
                onClose: function () {
                    /* You may add your own implementation here */
                    alert('You closed the popup without finishing the payment');
                }
            });
        }).catch(err=>console.log(err))
    }    

    return (<>
        <Header />
        <div className='min-h-[calc(100vh-21rem)] flex justify-center'>
            <div className='w-5/6'>
                <p className='text-5xl font-bold ps-14 py-7'>Your Cart</p>
                <div className='flex justify-center mb-10'>
                    {/* {user?.carts.length < 1 && 
                        <p className='text-white text-center text-5xl py-2'>Your cart is empty</p>
                    } */}
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
                </div>
            </div>
        </div>
        <Footer />
        <div id="snap-container"></div>
    </>)
}

export default Cart