import React, { useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import client from "../../services/client"
import { io } from 'socket.io-client'

// Material UI
import { Avatar } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

function ChatAdmin() {
    const [socket, setSocket] = useState();
    const ref = useRef(null)
    const navigate = useNavigate()
    const [user, setUser] = useState();
    const [whosChat, setWhosChat] = useState();
    const [search, setSearch] = useState("");

    // Socket
    useEffect(() => {
        const socketing = io(import.meta.env.VITE_SOCKET_URL)
        setSocket(socketing);
    
        return () => {
            socketing.disconnect()
        }
    }, [user])
    useEffect(() => {
        if(socket == null) return
        socket.emit("addUsersOn", user?.email)
    
        return () => {
          socket.off("getUsersOn")
        }
    }, [socket])
    useEffect(()=>{
        if(socket == null) return
        socket.on('gasRefresh', () => {
            client.get("/users/detail", {
                headers: { "Authorization": "Bearer " + localStorage.getItem("user_token")}
            }).then((res)=>{
                setUser(res.data)

                const newChat = res.data.chats.find(c => c.email_sender == whosChat?.email_sender)
                if (newChat != null) setWhosChat(newChat)
            }).catch((err) => {console.log(err)});      
        })

        return () => {
            socket.off('getMessage')
        }
    }, [socket])

    // FrontEnd
    useEffect(() => {
        if (!localStorage.getItem("user_token")) navigate("/")

        client.get("/users/detail", {
            headers: { "Authorization": "Bearer " + localStorage.getItem("user_token")}
        }).then((res)=>{
            setUser(res.data)
        }).catch((err) => {console.log(err)});
    }, [])
    useEffect(()=>{
        client.get("/users/detail", {
            headers: { "Authorization": "Bearer " + localStorage.getItem("user_token")}
        }).then((res)=>{
            setUser(res.data)
        }).catch((err) => {console.log(err)});
    }, [whosChat])

    useEffect(() =>{
        if (ref.current)
          ref.current.scrollTop = ref.current.scrollHeight;
    }, [user])

    const { register, handleSubmit, reset } = useForm();
    
    const addChat = (data) => {
        if (data.content != ""){
            client.post("/users/chat/add", {
                content: data.content,
                email_to: whosChat.email_sender
            },{
                headers: { "Authorization": "Bearer " + localStorage.getItem("user_token")}
            }).then((res) => {
                socket.emit("refreshing", {id: whosChat?.email_sender});
                socket.emit("refreshing", {id: user?.email});
                reset();
            }).catch((err) => {console.log(err)});
        }
    }

    return (<div className='w-full h-[calc(100vh-6rem)]'>
        <div className="judul text-white text-5xl font-bold ms-10 my-7">
            <h1>Chat</h1>
        </div>

        <div className="grid grid-cols-3 gap-4 ms-4">
            <div className="h-[calc(100vh-13.3rem)] rounded col-span-1 border border-oranye">
                <div className="h-[6rem] w-full flex items-center justify-center text-oranye border-b border-oranye">
                    <input className= "w-5/6 px-4 py-2 text-white text-xl bg-abu-gelap border border-oranye rounded-xl" placeholder="Search.." onChange={(e)=>{setSearch(e.target.value)}}/>
                </div>

                <div className="w-full h-[calc(100vh-19.5rem)]">
                    <div className="w-full h-[calc(100vh-19.5rem)] bg-abu-super-gelap text-white file:overflow-y-auto no-scrollbar">
                        
                        {user?.chats?.sort((a, b)=>{
                            if (a.latest_time != null && b.latest_time != null) 
                                return new Date(b.latest_time) - new Date(a.latest_time)
                            else return 0
                        }).filter((f) => f.name_sender.toLowerCase().includes(search.toLowerCase()))
                        .map((c, index) => {
                            return (
                                <div className={"w-full h-28 grid place-items-center justify-items-center border-oranye hover:cursor-pointer"+(c?.email_sender==whosChat?.email_sender?" border-x-4 bg-abu-gelap":" hover:border-x-4 hover:bg-abu-gelap")} onClick={()=>{setWhosChat(c)}} key={index} >
                                    <div className="relative h-28 w-full grid place-items-center justify-items-center">
                                        <div className='flex'>
                                            <img src={import.meta.env.VITE_BACKEND_GET_PICTURE_URL+c.profpict_sender} className="w-14 h-14 rounded-full"></img>
                                            <div className="w-[14rem] text-white ms-10">
                                                <h2 className="text-2xl font-bold truncate">{c.name_sender}</h2>
                                                <p className='text-lg truncate'>{c.latest_chat}</p>
                                            </div>
                                        </div>
                                        <div className='text-white absolute bottom-5 right-5'>
                                            {new Date(c.latest_time).toLocaleTimeString("id-ID").substring(0, 5)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>

            <div className="h-[calc(100vh-13.3rem)] rounded flex flex-col col-span-2 border border-oranye me-4">
                {!whosChat && 
                    <div className='w-full h-full flex items-center justify-center'>
                        <div className='w-1/2 text-center text-white text-6xl'>Select the Customer to Reply the Chat</div>
                    </div>
                }
                {whosChat && 
                    <>
                        <div className='h-[6rem] bg-abu-gelap border-b-2 border-oranye shadow-2xl w-full text-white text-4xl flex '>
                            <div className='flex ml-4 items-center px-3'>
                                <Avatar src={import.meta.env.VITE_BACKEND_GET_PICTURE_URL+whosChat?.profpict_sender} />
                                <span className='font-bold ms-6'>{whosChat?.name_sender}</span>
                            </div>
                        </div>
                        <div ref={ref} className='w-full h-[calc(100vh-24rem)] bg-neutral-200 p-2 overflow-y-auto no-scrollbar'>
                            {whosChat?.chatting?.map((c, index) => {
                            return (
                                <div className={'chat ' + (user?.email == c.sender?" chat-end" : " chat-start")} key={index} >
                                    {/* <div className='chat-header'>{c.sender}</div> */}
                                    <div className={'chat-bubble bg-abu-super-gelap break-words text-2xl'+(user?.email == c.sender?"" : " bg-oranye text-black")}>
                                        <div className='px-2 py-1'>{c.content}</div>
                                    </div>
                                    <div className='chat-footer text-lg font-bold'>{new Date(c.time).toLocaleTimeString("id-ID").substring(0, 5)}</div>
                                </div>
                            )
                        })}
                        </div>
                        <form onSubmit={handleSubmit(addChat)}>
                            <div className="h-[6rem] flex items-center justify-between px-10 border-t border-oranye">
                                <input className="text-white text-xl px-4 py-2 bg-abu-gelap border border-oranye w-full rounded-s-xl" placeholder='Type Here..' {...register('content')} />
                                <button type='submit' className='text-white text-lg border-y border-e bg-abu-gelap hover:bg-oranye transition duration-300 border-oranye px-4 py-2 rounded-e-xl'><SendIcon /></button>
                            </div>
                        </form>
                    </>
                }
            </div>
        </div>
    </div>)
}

export default ChatAdmin