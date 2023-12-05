import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import client from '../../services/client'

import Header from '../../components/Header'
import Footer from '../../components/Footer';

//MUI
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';


function History() {
    const navigate = useNavigate();
    const [user, setUser] = useState()
    const [listHistory, setListHistory] = useState([])
    const [listItemHistory, setListItemHistory] = useState([])
    const [jam, setJam] = useState()
    const [tanggal, setTanggal] = useState()

    function formatTanggalWaktu(tanggalWaktuISO) {
        const tanggalWaktu = new Date(tanggalWaktuISO);
      
        const tanggal = tanggalWaktu.toLocaleDateString('id-ID');
        const jam = tanggalWaktu.toLocaleTimeString('id-ID');
      
        return (<div>{tanggal} | {jam}</div>);
      }
      

    useEffect(() => {
        if (localStorage.getItem('user_token')) {
            client.get('/users/detail', {
                headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") },
            }).then((res) => {
                setUser(res.data)
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [])

      useEffect(() => {
        if (localStorage.getItem('user_token') && user) {
            console.log("masuk");
            client.get(`/users/transaction/history/fetch/${user?._id}`, {
                headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") },
            }).then((res) => {
                setListHistory(res.data)
                console.log( res.data);
                console.log( res.data[0].detail_trans[0].item_id.picture);
            }).catch((err) => {
                console.log(err);
            })
        }
      }, [user])

    return (
        <>
            <span className="text-6xl font-bold">History</span> <br />
            <div className="h-auto">
            {listHistory?.map((item, index) => (
                 <div className="mt-8" key={index}>
                    <div className="border border-oranye rounded-3xl h-fit font-black ">
                        <div className="grid grid-cols-3">
                            <div className="">
                                <div className="ml-8 mb-1 mt-8 text-2xl">{item.invoice} </div>
                                <div className="ml-8 mb-2  text-2xl">{formatTanggalWaktu(item.trans_date)} </div>
                            </div>
                            <div className="col-span-2">
                                <div className="text-end mb-1 mt-8 mr-4 text-4xl">
                                    {item.status === 1 && <div className='text-green-400'>Approved <CheckIcon></CheckIcon></div>}
                                    {item.status === 2 && <div className='text-oranye'>Pending <HistoryToggleOffIcon></HistoryToggleOffIcon></div>}
                                    {item.status !== 1 && item.status !== 2 && <div className='text-red-500'>Rejected <CloseIcon></CloseIcon></div>}
                                </div>
                            </div>
                        </div>
                        {item.detail_trans?.map((detail, index) => (
                        <div className=" w-5/6 m-auto rounded-3xl mb-8 bg-abu-super-gelap h-56 grid grid-cols-4 "key={index}>
                            <div className="w-20 h-20 rounded">
                                <img src={import.meta.env.VITE_BACKEND_GET_PICTURE_URL+detail.item_id.picture} alt="Item" />
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
                         ))}
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

export default History