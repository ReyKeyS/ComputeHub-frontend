import { useEffect, useState } from "react"
import client from "../../services/client"
import { Link, useNavigate } from 'react-router-dom'

function ProfileDashboard() {
    const [user, setUser]=useState()
    const navigate = useNavigate();
    const [trans, setTrans]=useState();
    const [kedua, setKedua]=useState([])
    const [hasil, setHasil]=useState([])
    useEffect(() => {
        if (localStorage.getItem('user_token')) {
            client.get('/users/detail', {
                headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") },
            }).then((res) => {
                setUser(res.data)
                console.log("res.data", new Date(res.data.transactions[res.data.transactions.length - 1].trans_date).toLocaleDateString('id-ID'));
                setTrans(res.data.transactions[res.data.transactions.length - 1].trans_date)
                // setKedua(res.data.transactions)
                // console.log(res.data.transactions);
            }).catch((err) => {
                console.log(err);
            })
        }
    },[])
    // useEffect(() => { 
    //     let hasil=[]
    //     if(kedua){
    //         for (const iterator of kedua) {
    //             if(iterator.trans_date==1){
    //                 hasil.push(iterator)
    //             }
    //         }
    //     }
    //     setHasil(hasil)
    //  },[kedua])
    return (
        <>
            <div className="text-6xl font-bold mb-10">Dashboard</div>
            <div className="grid grid-cols-2 gap-4 h-full">
                <div className="border border-oranye rounded-3xl h-1/2 p-8 font-black text-5xl flex flex-col">
                    <div className="flex flex-col">
                        <div>
                            <span className="">{user?.carts.length} </span>
                            <span className="text-oranye">Produk</span>
                        </div>
                        <span className="text-3xl mt-2">In Your Cart</span>
                    </div>
                </div>
                <div className="border border-oranye rounded-3xl h-1/2 p-8 font-black text-5xl grid grid-rows-2">
                    <div className="flex flex-col">
                        <div>
                            <span className="">{user?.transactions.length} </span>
                            <span className="text-oranye">Produk</span>
                        </div>
                        <span className="text-3xl mt-2">Ordered</span>
                        <span className="text-3xl mt-8">Last Transaction</span>
                        <span>
                        {trans && <div className="text-4xl">{new Date(trans).toLocaleDateString('id-ID')} | {new Date(trans).toLocaleTimeString('id-ID')}</div>}
                        {/* {trans && new Date(trans).toLocaleDateString('id-ID')} */}
                        </span>
                    </div>
                    <div className="self-end">
                        <button className="bg-oranye px-6 py-2 rounded-xl text-abu-super-gelap hover:bg-hover-oranye transition duration-300"
                        onClick={async (e) => {navigate("/profile/history")}}>History</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileDashboard