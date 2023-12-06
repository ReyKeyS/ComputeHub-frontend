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
      
      function formatHarga(harga){
        return harga.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
        });
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
            <div className="w-[72rem] h-[calc(100vh-14rem)] overflow-y-auto">
            {listHistory?.map((item, index) => (
                 <div className="mt-8" key={index}>
                    <div className="border border-oranye rounded-3xl h-fit font-black ">
                        <div className="grid grid-cols-3">
                            <div className="">
                                <div className="ml-8 mb-1 mt-8 text-4xl text-oranye">{item.invoice} </div>
                                <div className="ml-8 mb-2  text-2xl">{formatTanggalWaktu(item.trans_date)} </div>
                            </div>
                            <div className="col-span-2">
                                <div className="text-end mb-1 mt-8 mr-4 text-4xl">
                                    {item.status === 1 && <div className='text-green-400'>Approved <CheckIcon fontSize='large' /></div>}
                                    {item.status === 2 && <div className='text-oranye'>Pending <HistoryToggleOffIcon fontSize='large' /></div>}
                                    {item.status !== 1 && item.status !== 2 && <div className='text-red-500'>Rejected <CloseIcon fontSize='large' /></div>}
                                </div>
                            </div>
                        </div>
                        <div className="w-11/12 mx-auto mt-2 rounded-3xl mb-4 bg-abu-super-gelap h-56 grid grid-cols-4 ">
                            <div className="w-40 h-40 rounded-xl m-auto">
                                <img className="rounded-lg" src={import.meta.env.VITE_BACKEND_GET_PICTURE_URL+item.detail_trans[0].item_id.picture} />
                            </div>
                            <div className="w-[20rem] text-2xl text-white">
                                <div className="ml-4 mb-2 mt-8 text-2xl">{item.detail_trans[0].name} </div>
                                <div className="flex ">
                                    <div className="ml-4 mb-2  text-2xl">{item.detail_trans[0].qty} X </div>
                                    <div className="ml-2 text-oranye text-2xl">{formatHarga(item.detail_trans[0].price)} </div>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="text-end text-oranye mt-4 me-8 text-4xl">
                                    Total
                                </div>
                                <div className="text-end me-8 text-4xl text-white">
                                    {formatHarga(item.detail_trans[0].qty*item.detail_trans[0].price)}
                                </div>
                            </div>
                        </div>
                         <div className="text-end mr-8 mb-4 text-3xl">
                            Grand Total : {formatHarga(item.grand_total)} <br />
                            <button className=" ml-4 bg-oranye px-3 py-1 mr-4 mt-4 w-48 rounded-xl text-3xl text-abu-super-gelap hover:bg-hover-oranye transition duration-300"
                             onClick={async (e) => {navigate(`/profile/detail/${item._id}`)}}>Detail</button>
                         </div>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

export default History