// import * as React from 'react';
import Header from '../../components/Header';
import NavbarAdmin from '../../components/NavbarAdmin';
import HeaderAdmin from '../../components/HeaderAdmin';
import { useEffect, useState } from 'react';
import client from '../../services/client';
import CardBarang from '../../components/CardBarang';

function Dashboard() {
  const [user, setUser] = useState()
  const [listItem, setListitem] = useState([])
  useEffect(() => {
    if (!localStorage.getItem("user_token")) navigate("/")

    client.get("/users/detail", {
      headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") }
    }).then((res) => {
      setUser(res.data)
    }).catch((err) => { console.log(err) });
  }, [])

  useEffect(() => {
    client.get("/items/promo/fetch").then((res) => {
      setListitem(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <>
      <div className="judul text-white text-4xl ms-9 mt-5 ">
        <div className='flex'>
          <h1>Welcome Back, </h1>
          <h1 className='text-oranye'>&nbsp;Admin</h1>
        </div>
      </div>
      <div className="headline text-white text-xl ml-9 mt-2">
        <p> Here's What happening with your store today</p>
      </div>
      <div className="w-full snap-x flex px-20 overflow-x-scroll no-scrollbar bg-abu-super-gelap mt-6">
        {listItem?.map((item, index) => {
          return (<div className='snap-center'>
            <CardBarang key={index} item={item} />
          </div>)
        })}

      </div>

      <div className="text-3xl text-white ml-9 mt-5">
        Recent Messages
      </div>
      <div className="rounded-lg h-fit m-10 mt-5 text-white border border-oranye bg-abu-gelap mb-36">
        {user?.chats?.sort((a, b) => {
          if (a.latest_time != null && b.latest_time != null)
            return new Date(b.latest_time) - new Date(a.latest_time)
          else return 0
        })
          .map((c, index) => {
            return (
              <div className="h-28 w-full grid place-items-center justify-items-start ms-12">
                <div className='flex'>
                  <img src={import.meta.env.VITE_BACKEND_GET_PICTURE_URL + c.profpict_sender} className="w-14 h-14 rounded-full"></img>
                  <div className="w-[14rem] text-white ms-10">
                    <h2 className="text-2xl font-bold truncate">{c.name_sender}</h2>
                    <p className='text-lg truncate'>{c.latest_chat}</p>
                  </div>
                  <div className='flex justify-end items-center'>
                    <div>
                      <div className={'ms-10 w-5 h-5 rounded-full'+(c.is_read?" bg-green-400":" bg-red-400")}></div>
                      <div className='text-end mt-3'>{new Date(c.latest_time).toLocaleTimeString("id-ID").substring(0, 5)}</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Dashboard