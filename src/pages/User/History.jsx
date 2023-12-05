import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import client from '../../services/client'

import Header from '../../components/Header'
import Footer from '../../components/Footer';


function History() {
  const navigate = useNavigate();
  const [listHistory, setListHistory] = useState([])

  useEffect(() => {
    client.get("users/transaction/fetch", {
        headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") },
    }).then((res)=>{
      setListHistory(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <>
        <span className="text-6xl font-bold">History</span> <br />
            <div className="grid grid-cols-2 gap-4 h-full">
                <div className="border border-oranye rounded-3xl h-1/2 p-8 font-black text-5xl flex flex-col">
                    <div className="flex flex-col">
                        <div>
                            <span className=""> </span>
                            <span className="text-oranye">Produk</span>
                        </div>
                        <span className="text-xl">In Your Cart</span>
                    </div>
                </div>
                <div className="border border-oranye rounded-3xl h-1/2 p-8 font-black text-5xl grid grid-rows-2">
                    <div className="flex flex-col">
                        <div>
                            <span className=""> </span>
                            <span className="text-oranye">Produk</span>
                        </div>
                        <span className="text-xl">Ordered</span>
                    </div>
                    <div className="self-end">
                        <button className="bg-oranye px-3 py-2 rounded-xl text-abu-super-gelap"
                        onClick={async (e) => {navigate("/profile/history")}}>History</button>
                       
                    </div>
                </div>
            </div>
    </>
  )
}

export default History