import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ComputerIcon from '@mui/icons-material/Computer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import client from '../services/client'

function Header(){
    const [user, setUser] = useState({})

    useEffect(() =>{
        if (localStorage.getItem('user_token')){
            client.get('/users/detail', {
                headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")},
            }).then((res) => {
                console.log(res.data);
                setUser(res.data)
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [])

    return(
        <nav className="grid grid-cols-7 bg-abu-super-gelap place-items-center">
            <Link to="/">
                <div className="bg-abu-super-gelap text-white rounded-lg text-2xl p-2 flex justify-center"><ComputerIcon fontSize='large'/>Compute<a className="bg-oranye rounded-lg font-bold text-abu-super-gelap">HUB</a></div>
            </Link>
            <Link to="/shop">
                <div className="text-white text-xl">Shop</div>
            </Link>
            <div className="text-white text-xl">Chat</div>
            <div className="text-white text-xl col-span-2 ml-auto"><SearchIcon fontSize='large'/></div>
            <div className="text-white text-xl"><ShoppingCartIcon/>Cart</div>
            
            <Link to="/login">
                <div className="font-bold text-white text-xl">Log in</div>
            </Link>
        </nav>
    )
}
export default Header