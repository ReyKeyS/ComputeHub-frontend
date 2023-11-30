import * as React from 'react';
import Header from '../../components/Header';
import NavbarAdmin from '../../components/NavbarAdmin';
import HeaderAdmin from '../../components/HeaderAdmin';

// Material UI
import { Avatar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';

function ChatAdmin() {
    return (<div className='w-full h-[calc(100vh-6rem)]'>
        <div className="judul text-white text-4xl ms-12 py-5">
            <h1>Chat</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 ms-4">
            <div className="h-[calc(100vh-12rem)] rounded col-span-1 border border-oranye">
                <div className="h-[6rem] w-full flex items-center justify-center text-oranye border-b border-oranye">
                    <input className= "w-5/6 px-4 py-2 text-white text-xl bg-abu-gelap border border-oranye rounded-xl" placeholder="Search.." />
                </div>

                <div className="w-full h-[calc(100vh-18.1rem)]">

                    <div className="w-full h-[calc(100vh-18.1rem)] bg-abu-super-gelap text-white file:overflow-y-auto no-scrollbar">
                        
                        <div className="h-24 grid place-items-center justify-items-center hover:border-x-4 border-oranye">
                            <div className="h-24 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                                <div className='flex'>
                                    <img className="bg-white w-14 h-14 mr-16 rounded-full"></img>
                                    <div className="text-white mr-10">
                                        <h2 className="text-xl">My Son</h2>
                                        <p>Cocok buat oek hantam</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="h-[calc(100vh-12rem)] rounded flex flex-col col-span-2 border border-oranye me-4">
                <div className='h-[6rem] bg-abu-gelap border-b-2 border-oranye shadow-2xl w-full text-white text-4xl flex '>
                    <div className='flex ml-4 items-center px-3'>
                        <Avatar src={import.meta.env.VITE_BACKEND_GET_PICTURE_URL+"/profile_default.png"} />
                        <span className='font-bold ms-6'>My Son</span>
                    </div>
                </div>
                <div className='h-[calc(100vh-24rem)]'>
                    
                </div>
                <div className="h-[6rem] flex items-center justify-between px-10 border-t border-oranye">
                    <input className="text-white text-xl px-4 py-2 bg-abu-gelap border border-oranye w-full rounded-s-xl" placeholder='Type Here..' />
                    <button className='text-white text-lg border-y border-e bg-abu-gelap border-oranye px-4 py-2 rounded-e-xl'><SendIcon /></button>
                </div>
            </div>
        </div>
    </div>)
}

export default ChatAdmin