import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import client from '../../services/client'

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import BuildComp from '../../components/BuildComp';

function Build(){
    const navigate = useNavigate();
    const [grandTotal, setGrandTotal] = useState(0)
    const itemsCate = [
        {type: "Processor", item_id: "", amount: 0},
        {type: "Motherboard", item_id: "", amount: 0},
        {type: "VGA", item_id: "", amount: 0},
        {type: "RAM", item_id: "", amount: 0},
        {type: "PSU", item_id: "", amount: 0},
        {type: "SSD", item_id: "", amount: 0},

        {type: "HDD", item_id: "", amount: 0},
        {type: "Casing", item_id: "", amount: 0},
        {type: "Cooling", item_id: "", amount: 0},
        {type: "Monitor", item_id: "", amount: 0},
        {type: "Keyboard", item_id: "", amount: 0},
        {type: "Mouse", item_id: "", amount: 0},
    ]
    const [items, setItems] = useState(itemsCate)
    const [compabilityProc, setCompabilityProc] = useState("");
    const [user, setUser] = useState({})

    useEffect(() =>{
        if (localStorage.getItem('user_token')){
            client.get('/users/detail', {
                headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")},
            }).then((res) => {
                setUser(res.data)
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [])

    const reset = () => {
        navigate(0)
    }

    const addToCart = () => {
        if (user?.email_verified){
            let temp = []
            for (const i of items) {
                if (i.item_id != ""){
                    temp.push({
                        item_id: i.item_id,
                        amount: i.amount,
                    })
                }
            }
    
            if (temp.length > 0) {
                client.post("/users/carts/add", {
                    items: temp
                },{
                    headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")},
                }).then((res)=>{
                    alert(res.data.message)
                    navigate("/cart")
                }).catch((err)=>{console.log(err)});
            }
        }else navigate("/verifyemail")
    }

    return(
        <>
            <Header/>
                <div className="py-10 px-20 flex flex-col">
                    <span className="text-5xl font-bold mb-6">Build Your PC</span>
                    <div className="w-full bg-abu-gelap rounded-2xl">
                        <div className="px-14 py-10">
                            
                            {items.map((item, index) => {
                                return <BuildComp key={index} item={item} grandTotal={grandTotal} setGrandTotal={setGrandTotal} idx={index} items={items} setItems={setItems} compabilityProc={compabilityProc} setCompabilityProc={setCompabilityProc} />
                            })}
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='w-3/5 bg-abu-gelap rounded-b-xl -mt-5 pt-8 p-5 flex items-center justify-between text-5xl pe-8'>
                            <p className='text-oranye ms-4 font-bold'>Grand Total : </p>
                            <div className="w-2/3 h-fit text-oranye font-bold flex gap-5 items-center justify-center">
                                <div>Rp</div>
                                <div className="w-full bg-white text-abu-gelap rounded-xl px-4 py-1 flex items-center">{grandTotal.toLocaleString("id-ID")}</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end gap-10 mt-10 font-bold'>
                        <div><button className='w-64 py-3 bg-abu-super-gelap text-4xl rounded-xl text-oranye hover:scale-105 transition duration-300 hover:cursor-pointer' onClick={reset}>Reset</button></div>
                        <div><button className='w-64 py-3 bg-abu-super-gelap text-4xl rounded-xl text-oranye hover:scale-105 transition duration-300 hover:cursor-pointer' disabled={!localStorage.getItem("user_token")?true:false} onClick={addToCart}>Add to Cart</button></div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}
export default Build