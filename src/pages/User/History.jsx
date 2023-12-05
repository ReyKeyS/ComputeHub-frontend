import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import client from '../../services/client'

import Header from '../../components/Header'
import Footer from '../../components/Footer';


function History() {
  const navigate = useNavigate();
  const [listHistory, setListHistory] = useState([])

  useEffect(() => {
    if (localStorage.getItem('user_token')) {
        client.get('/users/transaction/history', {
            headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") },
            params: { userId: userId }
        }).then((res) => {
            setListHistory(res.data)
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }
  }, [])

  return (
    <>
        <span className="text-6xl font-bold">History</span> <br />
            <div className="grid grid-cols-2 gap-4 h-auto">
                <div className="border border-oranye rounded-3xl h-fit p-8 font-black text-5xl flex flex-col">
                    <div className="flex flex-col">
                        <div>
                            <span className=""> </span>
                            <span className="text-oranye">Produk</span>
                        </div>
                        <span className="text-xl">In Your Cart</span>
                    </div>
                </div>
            </div>
    </>
  )
}

export default History