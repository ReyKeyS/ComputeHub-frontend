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
            console.log(res.data);
        }).catch((err) => {console.log(err)});
    }, [])

    return (<div className='w-full h-[calc(100vh-6rem)]'>
        <div className="judul text-white text-5xl font-bold ms-10 my-7">
            <h1>Confirmation</h1>
        </div>

        <div className='text-center mx-10'>

            <div className="rounded-lg w-full mt-4 h-80 text-white border border-oranye bg-abu-gelap">
                <div className="header flex text-2xl">
                    <div className="w-48 ml-3 text-oranye">Pesanan Baru</div>
                    <div className="w-32 ml-3 text-oranye">INV003</div>
                    <div className="w-44 ml-3 text-white">BUDI AGUNG</div>
                    <div className="w-64 ml-3 text-white">31 Agustus 2023 </div>
                    <div className="w-32 text-align-left text-white">19:50 WIB</div>
                    {/* <div className=" w-16 ml-3">Action</div> */}
                </div>

                <hr className="border border-oranye"></hr>
                <div className="listdata flex text-white h-40 place-items-center text-lg font-bold">
                    <div className="text-align-center bg-oranye w-40 h-32 mt-5 ml-8 rounded">
                        <img src="" alt="" />
                    </div>
                    <div className="text-align-center w-52 h-32 mt-5 ml-8">
                        <div className="ml-3 mt-3 text-2xl text-white">RTX 4090 TI</div>
                        <div className="ml-3 mt-3 text-xl text-white">1 x Rp. 40.000.000</div>
                    </div>
                    <div className="text-align-center w-64 h-32 mt-5 ml-10">
                        <div className="ml-3 mt-3 text-2xl text-white">Address</div>
                        <div className="ml-3 mt-3  text-white">Jl Tongkrongan sok asik 87, Surabaya</div>
                    </div>

                </div>
                <div className="flex mt-10 ml-7">
                    <div className="text-2xl flex">
                        <div className="text-white">
                            Transaction Amount : 
                        </div>
                        <div className="text-oranye ml-3">
                            Rp. 40.000.000 
                        </div>
                    </div>
                    <div className="flex justify-end ml-auto">
                        <div className="col-span-4 text-right mr-12">
                            <button className='rounded bg-oranye text-black mt-5 w-48 h-10 text-xl '>Batal</button>
                        </div>
                        <div className="col-span-4 text-right mr-12">
                            <button className='rounded bg-oranye text-black mt-5 w-48 h-10 text-xl '>Terima</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ulangi terus */}
    </div>)
}

export default Confirmation