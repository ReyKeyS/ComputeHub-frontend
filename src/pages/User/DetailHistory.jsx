import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import client from '../../services/client'

import Header from '../../components/Header'
import Footer from '../../components/Footer';

//MUI
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';


function DetailHistory() {
    const navigate = useNavigate();
    const [user, setUser] = useState()
    const { trans_id } = useParams();
    const [listHistory, setListHistory] = useState([])
    const [listItemHistory, setListItemHistory] = useState([])
    const [jam, setJam] = useState()
    const [tanggal, setTanggal] = useState()
    const [itemId, setItemId] = useState()

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
            console.log(trans_id);
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
            client.get(`/users/transaction/detail/${trans_id}`, {
                headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") },
            }).then((res) => {
                setListItemHistory(res.data)
                console.log( res.data);
            }).catch((err) => {
                console.log(err);
            })
        }
      }, [user])

      const addRating = (data) => {
        client.post(`/items/rating/${itemId}`, data
        ).then((res)=>{
            alert(res.data.message)
        }).catch((err)=>{alert(err.response.data.message);})
      }

    return (
        <>
            <span className="text-6xl font-bold">Detail Transaction</span> <br />
            <div className="h-auto">
                 <div className="mt-8">
                    <div className="border border-oranye rounded-3xl h-fit font-black ">
                        <div className="grid grid-cols-3">
                            <div className="">
                                <div className="ml-8 mb-1 mt-8 text-2xl">{listItemHistory.invoice} </div>
                                <div className="ml-8 mb-2  text-2xl">{formatTanggalWaktu(listItemHistory.trans_date)} </div>
                            </div>
                            <div className="col-span-2">
                                <div className="text-end mb-1 mt-8 mr-4 text-4xl">
                                    {listItemHistory.status === 1 && <div className='text-green-400'>Approved <CheckIcon></CheckIcon></div>}
                                    {listItemHistory.status === 2 && <div className='text-oranye'>Pending <HistoryToggleOffIcon></HistoryToggleOffIcon></div>}
                                    {listItemHistory.status !== 1 && listItemHistory.status !== 2 && <div className='text-red-500'>Rejected <CloseIcon></CloseIcon></div>}
                                </div>
                            </div>
                        </div>
                        {listItemHistory.detail_trans?.map((detail, index) => (
                        <div className=" w-5/6 m-auto rounded-3xl mb-8 bg-abu-super-gelap h-fit grid grid-cols-4 " key = {index}>
                            <div className="w-40 h-40 rounded-xl m-auto">
                                <img className="rounded-lg" 
                                src={import.meta.env.VITE_BACKEND_GET_PICTURE_URL+detail.item_id.picture} 
                                alt="Item" />
                            </div>
                            <div className="text-2xl text-white">
                                <div className="ml-4 mb-2 mt-8 text-2xl">{detail.name} </div>
                                <div className="flex ">
                                    <div className="ml-4 mb-2  text-2xl">{detail.qty} X </div>
                                    <div className="ml-2 text-oranye text-2xl">{formatHarga(detail.price)} </div>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="text-end text-oranye mt-4 mr-20 text-4xl">
                                    Total
                                </div>
                                <div className="text-end mr-20 text-4xl text-white">
                                    {formatHarga(detail.qty*detail.price)}
                                </div><br></br>
                                {listItemHistory.status === 1 &&
                                 <div className='mt-20 mb-4 mr-12'>
                                    <input type="number" placeholder="0-5"
                                     className="border border-oranye rounded-lg bg-abu-super-gelap w-40 h-10 text-xl" 
                                     
                                    />
                                    <span className="ml-4 text-2xl justify-self-center">Rating</span><br />
                                    <button className=" ml-4 bg-oranye px-3 mr-4 mt-4 w-40 h-8 rounded-xl text-2xl mr-20 text-abu-super-gelap">
                                        Submit</button>
                                 </div>}
                            </div>
                        </div>
                         ))}
                         <div className="text-left mr-8 mb-4 text-3xl ml-20" >
                            <div className="flex mb-4">
                                Total Price :<div className="text-oranye ml-4"> {formatHarga(listItemHistory.grand_total*1)}</div> <br />
                            </div>
                            <div className="flex mb-4">
                                {listItemHistory.build_pc === false && <div className='text-white'>Build Service : Rp 0</div>}
                                {listItemHistory.build_pc === true && <div className='text-white '>Build Service : <div className="ml-4 text-oranye">Rp 200.000</div></div>}
                            </div>
                            <div className="flex mb-4">
                                {listItemHistory.build_pc === false && <div className='text-white'>Grand Total : 
                                    <div className="ml-4 text-oranye">{formatHarga(listItemHistory.grand_total*1)}</div>
                                </div>}
                                {listItemHistory.build_pc === true && <div className='text-white '>Grand Total : 
                                    <div className="ml-4 text-oranye">{formatHarga(listItemHistory.grand_total+200000)}</div>
                                </div>}<br /> 
                            </div>
                            <div className="flex">
                                <button className=" ml-4 bg-red-500 text-dark px-3 py-2 mr-4 mt-4 w-48 h-12 rounded-xl text-2xl mr-20 text-abu-super-gelap"
                                onClick={async (e) => {navigate(`/profile/history/`)}}>Cancel</button>
                                <button className=" ml-4 bg-oranye px-3 py-2 mr-4 mt-4 w-48 h-12 rounded-xl text-2xl mr-20 text-abu-super-gelap"
                                onClick={async (e) => {navigate(`/profile/history/`)}}>Back to History</button>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailHistory