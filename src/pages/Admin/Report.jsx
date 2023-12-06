import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import client from "../../services/client"

// Material UI
import SearchIcon from '@mui/icons-material/Search';

function Report() {
    const navigate = useNavigate()
    const [listTrans, setListTrans] = useState([]);
    const [statusTrans, setStatusTrans] = useState(-1);
    const [search, setSearch] = useState("");
    const [minDate, setMinDate] = useState(new Date("2000-01-01").toJSON().substring(0, 10));
    const [maxDate, setMaxDate] = useState(new Date().toJSON().substring(0, 10))
    const [qty, setQty] = useState(0)
    const [income, setIncome] = useState(0)

    useEffect(() => {
        client.get("/users/transaction/fetch", {
            headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")},
        }).then((res) => {
            setListTrans(res.data);
            
            let qty = 0; let income = 0;
            console.log(res.data)
            for (const t of res.data) {
                income += t.grand_total
                for (const d of t.detail_trans) {
                    qty += d.qty
                }
            }
            setQty(qty);
            setIncome(income);
        }).catch((err) => {console.log(err)});
    }, [])

    return (<div className='w-full min-h-[calc(100vh-6rem)]'>
        <div className="judul text-white text-5xl font-bold ms-10 mt-7 mb-3">
            <h1>Report</h1>
        </div>

        <div className='flex me-10'>
            <div className='w-2/3'>
                <div className="flex gap-6 ms-10">
                    <div className="">
                        <button className='rounded-lg bg-oranye hover:bg-hover-oranye transition duration-300 text-black mt-5 w-48 py-2 text-2xl' onClick={()=>{setStatusTrans(-1)}} >All Transaction</button>
                    </div>
                    <div className="">
                        <button className='rounded-lg bg-oranye hover:bg-hover-oranye transition duration-300 text-black mt-5 w-48 py-2 text-2xl' onClick={()=>{setStatusTrans(2)}} >Pending</button>
                    </div>
                    <div className="">
                        <button className='rounded-lg bg-oranye hover:bg-hover-oranye transition duration-300 text-black mt-5 w-48 py-2 text-2xl' onClick={()=>{setStatusTrans(1)}} >Success</button>
                    </div>
                    <div className="">
                        <button className='rounded-lg bg-oranye hover:bg-hover-oranye transition duration-300 text-black mt-5 w-48 py-2 text-2xl' onClick={()=>{setStatusTrans(0)}} >Rejected</button>
                    </div>
                </div>
                <div className="flex mt-6 text-lg items-center ms-10">
                    <div className="text-oranye text-2xl">
                        Period : 
                    </div>
                    <input className= "ms-3 border border-oranye rounded-lg w-40 px-4 py-1 bg-white" type="date" min={'2000-01-01'} max={new Date().toJSON().substring(0, 10)} value={minDate} onChange={(e)=>{setMinDate(e.target.value)}}/> 
                    <h3 className="text-white ms-3"> - </h3>
                    <input className= "ms-3 border border-oranye rounded-lg w-40 px-4 py-1 bg-white" type="date" min={'2000-01-01'} max={new Date().toJSON().substring(0, 10)} value={maxDate} onChange={(e)=>{setMaxDate(e.target.value)}}/>
                </div>

                <div className="h-[6rem] w-full flex px-10 items-center text-oranye border-b border-oranye">
                    <input className= "w-[27.3rem] px-5 py-2 text-white text-xl bg-abu-gelap border border-oranye rounded-xl" placeholder="Search Invoice..." onChange={(e)=>{setSearch(e.target.value)}}/>
                </div>
            </div>
            <div className='w-1/3 border-b border-oranye'>
                <div className='text-oranye text-3xl py-3 px-6 my-5 border-2 border-oranye rounded-xl '>
                    <p className='text-5xl mb-8'>Summary</p>
                    <p>Total Sales Quantity :&nbsp; {qty} items</p>
                    <p>Total Income :&nbsp; Rp {income.toLocaleString("id-ID")}</p>
                </div>
            </div>
        </div>

        <div className='text-center h-auto mx-10 mb-36'>
            {listTrans && listTrans.sort((a, b)=>{
                if (a.trans_date != null && b.trans_date != null) 
                    return new Date(b.trans_date) - new Date(a.trans_date)
                else return 0
            }).filter((f) => f.invoice.toLowerCase().includes(search.toLowerCase()) && new Date(f.trans_date).toJSON().substring(0, 10) <= maxDate && new Date(f.trans_date).toJSON().substring(0, 10) >= minDate)
            .map((t, index) => {
                if (statusTrans == -1 || statusTrans == t.status)
                    return (
                        <div className="rounded-xl w-full my-8 h-auto text-white border border-oranye bg-abu-gelap" key={index}>
                            <div className="flex py-2 text-3xl">
                                <div className={"ms-6 text-start w-[13rem]" + (t.status==2?" text-yellow-400":t.status==1?" text-green-400":" text-red-400")}>{t.status==2?"Pending":t.status==1?"Pesanan Berhasil":"Pesanan Gagal"}</div>
                                <div className="w-64 mx-2 text-oranye">{t.invoice}</div>
                                <div className="w-[25rem] truncate mx-2 text-start text-white">{t.user_id.display_name}</div>
                                <div className="w-[17.5rem] mx-1 text-white">{new Date(t.trans_date).toLocaleDateString("id-ID", {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                <div className="w-36 text-white">{new Date(t.trans_date).toLocaleDateString("id-ID", {hour: 'numeric', minute: 'numeric'}).substring(11)} WIB</div>
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
                            <div className="flex w-full h-16 px-10 items-center justify-between">
                                <div className="text-3xl flex w-3/5">
                                    <div className="text-white">
                                        Transaction Amount : 
                                    </div>
                                    <div className="text-oranye ml-3">
                                        Rp {t.grand_total.toLocaleString("id-ID")}
                                    </div>
                                </div>
                                <div className='text-oranye text-3xl text-end w-2/3 truncate'>
                                    {t.user_id.address}
                                </div>
                            </div>
                        </div>
                    )
            })}
        </div>
    </div>)
}

export default Report