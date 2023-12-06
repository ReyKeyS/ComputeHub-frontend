import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import client from '../../services/client'

//MUI
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


function DetailHistory() {
    const navigate = useNavigate();
    const [user, setUser] = useState()
    const { trans_id } = useParams();
    const [listHistory, setListHistory] = useState([])
    const [listItemHistory, setListItemHistory] = useState([])
    const [jam, setJam] = useState()
    const [tanggal, setTanggal] = useState()
    const [itemId, setItemId] = useState()
    const [ratingItem, setRatingItem] = useState()

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
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [])

    useEffect(() => {
        if (localStorage.getItem('user_token') && user) {
            client.get(`/users/transaction/detail/${trans_id}`, {
                headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") },
            }).then((res) => {
                setListItemHistory(res.data)

                let temp = []
                for (const i of res.data.detail_trans) {
                    temp.push({
                        item_id: i.item_id,
                        rating: i.rating
                    })
                }
                setRatingItem(temp)
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [user])

    const addRating = (index) => {
        if (ratingItem[index].rating == undefined) return

        client.post(`/items/rating/${ratingItem[index].item_id._id}`, {
            rating: ratingItem[index].rating, 
            trans_id: listItemHistory._id
        }, {
            headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")}
        }).then((res)=>{
            navigate(0)
        }).catch((err)=>{console.log(err);})
    }

    return (
        <>
            <span className="text-6xl font-bold">Detail Transaction</span> <br />
            <div className="w-[72rem] h-auto">
                 <div className="mt-8">
                    <div className="border border-oranye rounded-3xl h-fit font-black ">
                        <div className="grid grid-cols-3">
                            <div className="">
                                <div className="ml-8 mb-1 mt-8 text-4xl text-oranye">{listItemHistory.invoice} </div>
                                <div className="ml-8 mb-2  text-2xl">{formatTanggalWaktu(listItemHistory.trans_date)} </div>
                            </div>
                            <div className="col-span-2">
                                <div className="text-end mb-1 mt-8 mr-4 text-4xl">
                                    {listItemHistory.status === 1 && <div className='text-green-400'>Approved <CheckIcon fontSize='large' /></div>}
                                    {listItemHistory.status === 2 && <div className='text-oranye'>Pending <HistoryToggleOffIcon fontSize='large' /></div>}
                                    {listItemHistory.status !== 1 && listItemHistory.status !== 2 && <div className='text-red-500'>Rejected <CloseIcon fontSize='large' /></div>}
                                </div>
                            </div>
                        </div>
                        
                        <div className='mt-3'>
                            {listItemHistory.detail_trans?.map((detail, index) => (
                                <div className="w-11/12 m-auto rounded-3xl mb-8 bg-abu-super-gelap h-fit grid grid-cols-4 " key = {index}>
                                    <div className="w-40 h-40 rounded-xl m-auto">
                                        <img className="rounded-lg" 
                                        src={import.meta.env.VITE_BACKEND_GET_PICTURE_URL+detail.item_id.picture} 
                                        alt="Item" />
                                    </div>
                                    <div className="w-[20rem] text-2xl text-white">
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
                                                {/* <input type="number" placeholder="0-5" className="border border-oranye rounded-lg bg-abu-super-gelap w-40 h-10 text-xl" /> */}
                                                <div className='flex gap-4 justify-end'>
                                                    <div className="text-2xl justify-self-center">Rating</div>
                                                    <div className='w-fit'>
                                                        <Stack spacing={1} className="bg-white rounded-xl px-3 py-1 border border-oranye">
                                                            <Rating name="half-rating" defaultValue={ratingItem[index].rating?ratingItem[index].rating:0} precision={0.5} onChange={(e)=>{
                                                                ratingItem[index].rating = e.target.value
                                                                setRatingItem([...ratingItem])
                                                            }}/>
                                                        </Stack>
                                                    </div>
                                                </div>
                                                {!detail.rating && 
                                                    <div className='flex justify-end'>
                                                        <button className="bg-oranye py-1 mt-4 w-40 rounded-xl text-2xl text-abu-super-gelap" onClick={()=>{addRating(index)}}>Submit</button>
                                                    </div>
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-left px-20 text-3xl" >
                            <div className="flex mb-4">
                                {listItemHistory.build_pc && 
                                    <div>Total Price :<span className="text-oranye ml-4"> {formatHarga(listItemHistory.grand_total*1 -200000)}</span> <br /></div>
                                }
                                {!listItemHistory.build_pc && 
                                    <div>Total Price :<span className="text-oranye ml-4"> {formatHarga(listItemHistory.grand_total*1)}</span> <br /></div>
                                }
                            </div>
                            <div className="flex mb-4">
                                {listItemHistory.build_pc === false && <div className='text-white'>Build Service : Rp 0</div>}
                                {listItemHistory.build_pc === true && <div className='text-white '>Build Service : <div className="ml-4 text-oranye">Rp 200.000</div></div>}
                            </div>
                            <div className="flex mb-4">
                                <div className='text-white'>Grand Total : 
                                    <div className="ms-14 text-5xl text-oranye">{formatHarga(listItemHistory.grand_total*1)}</div>
                                </div>
                            </div>
                            <div className="flex justify-end gap-8 mb-10">
                                {/* <button className="bg-red-500 hover:bg-red-600 transition duration-300 text-white px-3 py-2 mt-4 w-48 h-12 rounded-xl text-2xl" onClick={(e)=>{navigate(`/profile/history/`)}}>Cancel</button> */}
                                <button className="bg-oranye hover:bg-hover-oranye transition duration-300 px-3 py-2 mt-4 w-48 h-12 rounded-xl text-2xl text-abu-super-gelap" onClick={(e)=>{navigate('/profile/history/')}}>Back to History</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailHistory