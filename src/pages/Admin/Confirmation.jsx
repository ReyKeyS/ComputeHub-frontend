import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import client from '../../services/client'

function Confirmation() {
    const navigate = useNavigate();
    const [listTrans, setListTrans] = useState([]);
    
    useEffect(() => {
        client.get("/users/transaction/fetch", {
            headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")},
        }).then((res) => {
            const pendingTrans = []
            for (const t of res.data) {
                if (t.status == 2) pendingTrans.push(t)
            }
            setListTrans(pendingTrans);
        }).catch((err) => {console.log(err)});
    }, [])

    const rejectTrans = (id) => {
        client.put(`/users/transaction/confirm/${id}`, {status: 0}, {
            headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")}
        }).then((res) => {
            alert("Transaction rejected")
            navigate(0)
        }).catch((err) => {console.log(err)});
    }

    const confirmTrans = (id) => {
        client.put(`/users/transaction/confirm/${id}`, {status: 1}, {
            headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")}
        }).then((res) => {
            alert("Transaction confirmed")
            navigate(0)
        }).catch((err) => {console.log(err)});
    }

    return (<div className='w-full min-h-[calc(100vh-6rem)]'>
        <div className="judul text-white text-5xl font-bold ms-10 my-7">
            <h1>Confirmation</h1>
        </div>

        <div className='text-center h-auto mx-10 mb-36'>
            {listTrans.length == 0 && 
                <div className='w-full h-[calc(100vh-18rem)] flex items-center justify-center'>
                    <div className='text-6xl text-white font-bold'>You have no confirmations at this time</div>
                </div>
            }

            {listTrans && listTrans.map((t, index) => {
                return (
                    <div className="rounded-xl w-full my-8 h-auto text-white border border-oranye bg-abu-gelap" key={index}>
                        <div className="flex py-2 text-3xl">
                            <div className="w-52 text-oranye">Pesanan Baru</div>
                            <div className="w-64 mx-2 text-oranye">{t.invoice}</div>
                            <div className="w-[25rem] truncate mx-2 text-start text-white">{t.user_id.display_name}</div>
                            <div className="w-[17.5rem] mx-1 text-white">{new Date(t.payment_date).toLocaleDateString("id-ID", {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                            <div className="w-36 text-white">{new Date(t.payment_date).toLocaleDateString("id-ID", {hour: 'numeric', minute: 'numeric'}).substring(11)} WIB</div>
                        </div>

                        <hr className="border border-oranye"></hr>
                        <div className="w-full h-auto text-white text-lg font-bold">
                            
                            {t.detail_trans && t.detail_trans.map((d, index) => {
                                return (<div className='flex items-center px-10 py-3 border-dashed border-b border-oranye last-of-type:border-solid' key={index}>
                                    <img src={import.meta.env.VITE_BACKEND_GET_PICTURE_URL+d.item_id.picture} className='w-32 h-32 rounded-lg mx-10'/>
                                    <div className="text-start w-full h-32 mt-5 ml-8">
                                        <div className="ml-3 mt-3 text-3xl text-white truncate">{d.item_id.name}</div>
                                        <div className="ml-3 mt-3 text-2xl text-white">{d.qty} x Rp {d.price.toLocaleString("id-ID")}</div>
                                    </div>
                                </div>)
                            })}

                        </div>
                        <div className="flex w-full h-16 px-10 items-center">
                            <div className="text-3xl flex w-3/5">
                                <div className="text-white">
                                    Transaction Amount : 
                                </div>
                                <div className="text-oranye ml-3">
                                    Rp {t.grand_total.toLocaleString("id-ID")}
                                </div>
                            </div>
                            <div className="flex items-center justify-end gap-12 w-2/5 font-bold text-2xl">
                                <div>
                                    <button className='rounded-xl bg-oranye hover:bg-hover-oranye transition duration-300 text-black w-48 h-10' onClick={()=>rejectTrans(t._id)}>Reject</button>
                                </div>
                                <div>
                                    <button className='rounded-xl bg-oranye hover:bg-hover-oranye transition duration-300 text-black w-48 h-10' onClick={()=>confirmTrans(t._id)}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </div>

    </div>)
}

export default Confirmation