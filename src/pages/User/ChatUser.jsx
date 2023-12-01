import React, { useState, useEffect, useRef } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import client from "../../services/client"

import Footer from "../../components/Footer"
import Header from "../../components/Header"

// Material UI
import { TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const ChatUser = () => {
    const ref = useRef(null);
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [userChat, setUserChat] = useState();

    useEffect(() => {
        if (!localStorage.getItem("user_token")) navigate("/")

        client.get("/users/detail", {
            headers: { "Authorization": "Bearer " + localStorage.getItem("user_token")}
        }).then((res)=>{
            setUser(res.data)
            setUserChat(res.data.chats[0]);
        }).catch((err) => {console.log(err)});
    }, [])

    useEffect(() =>{
        if (ref.current)
          ref.current.scrollTop = ref.current.scrollHeight;
    }, [userChat])

    const { register, handleSubmit } = useForm();
    
    const addChat = (data) => {
        client.post("/users/chat/add", {
            content: data.content,
            email_to: "admin@gmail.com"
        },{
            headers: { "Authorization": "Bearer " + localStorage.getItem("user_token")}
        }).then((res) => {
            navigate(0)
        }).catch((err) => {console.log(err)});
    }

    return (<>
        <Header />
        <div className='min-h-[calc(100vh-5rem)] flex justify-center p-10 bg-neutral-700'>
            <div className='w-3/5 bg-abu-super-gelap rounded-2xl px-8 py-6'>
                <div className='flex pb-5 border-b-2 border-oranye'>
                    <img src="/img/istts_bg.png" alt="" className='w-12 h-12'/>
                    <p className='text-oranye text-4xl mt-1 ms-5'>Chat dengan Admin</p>
                </div>
                <div ref={ref} className='w-full h-[calc(100vh-23rem)] bg-neutral-200 p-2 overflow-y-auto no-scrollbar'>
                    {userChat?.chatting?.map((c, index) => {
                        return (<>
                            <div className={'chat ' + (user?.email == c.sender?" chat-end" : " chat-start")}>
                                {/* <div className='chat-header'>{c.sender}</div> */}
                                <div className={'chat-bubble bg-abu-super-gelap break-words text-2xl'+(user?.email == c.sender?"" : " bg-oranye text-black")}>
                                    <div className='px-2 py-1'>{c.content}</div>
                                </div>
                                <div className='chat-footer text-lg font-bold'>{new Date(c.time).toLocaleTimeString("id-ID").substring(0, 5)}</div>
                            </div>
                        </>)
                    })}
                </div>
                <form onSubmit={handleSubmit(addChat)}>
                    <div className="h-[6rem] flex items-center justify-between px-10 pt-5 border-t-2 border-oranye">
                        <input autoFocus className="text-white text-xl px-7 py-3 bg-abu-gelap border border-oranye w-full rounded-s-xl" placeholder='Type Here..' {...register("content")}/>
                        <button type='submit' className='text-white text-lg border-y border-e bg-abu-gelap hover:bg-oranye transition duration-300 border-oranye px-4 py-3 rounded-e-xl'><SendIcon /></button>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </>)
}

export default ChatUser