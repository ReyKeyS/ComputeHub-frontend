import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import client from '../../services/client'

import Header from '../../components/Header'
import Footer from '../../components/Footer';


function History() {
  const navigate = useNavigate();
  const [user, setUser] = useState()
  const [listHistory, setListHistory] = useState([])

  useEffect(() => {
    if (localStorage.getItem('user_token')) {
        client.get('/users/detail', {
            headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") },
        }).then((res) => {
            setUser(res.data._id)
            console.log(res.data._id);
        }).catch((err) => {
            console.log(err);
        })
    }
  },[])

  useEffect(() => {
    if (localStorage.getItem('user_token')) {
        client.get('/users/transaction/history/fetch/', {
            headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") },
            params: { userId: user },
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
            <div className="h-auto">
                {/* listHistory.map */}
                <div className="border border-oranye rounded-3xl h-fit font-black ">
                    <div className="grid grid-cols-3">
                        <div className="">
                            <div className="ml-8 mb-1 mt-8 text-2xl">INV </div>
                            <div className="ml-8 mb-2  text-2xl">Tanggal </div>
                        </div>
                        <div className="col-span-2">
                            <div className="text-end mb-1 mt-8 mr-4 text-4xl">Status </div>
                        </div>
                    </div>
                    <div className=" w-5/6 m-auto rounded-3xl mb-8 bg-abu-super-gelap h-56 grid grid-cols-4 ">
                        <div className="">
                            <img src="" alt="" />
                        </div>
                        <div className="text-2xl">
                            <div className="ml-8 mb-2 mt-8 text-2xl">Nama </div>
                            <div className="ml-8 mb-2  text-2xl">Harga </div>
                        </div>
                        <div className="col-span-2">
                            <div className="text-end text-oranye mt-4 mr-20 text-4xl">
                                Total
                            </div>
                            <div className="text-end mr-20 text-4xl text-white">
                                Rp 36.000.000
                            </div>
                            <div className="text-end">
                                <button className=" bg-oranye px-3 py-2 mr-4 mt-4 w-48 h-12 rounded-xl text-2xl mr-20 text-abu-super-gelap">Detail</button>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default History