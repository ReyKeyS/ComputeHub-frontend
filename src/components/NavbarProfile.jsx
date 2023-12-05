import { Avatar } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import client from "../services/client";

function NavbarProfile(params) {
    const [user, setUser] = useState()

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
    },[])

    return (
        <div className="grid grid-rows-2 place-items-center border border-oranye rounded-3xl bg-abu-super-gelap text-putih">
            <div className="flex flex-col text-4xl text-center space-y-4">
                <Avatar sx={{ width: 150, height: 150 }} src={import.meta.env.VITE_BACKEND_GET_PICTURE_URL+user?.profile_picture}/>
                <span className="font-bold text-oranye">{user?.display_name}</span>
                <span className="text-2xl">{user?.phone_number}</span>
            </div>
            <div className="flex flex-col place-self-start w-full h-full text-4xl">
                <NavLink to={"/profile/"} className={(state) => `flex justify-center items-center h-1/4 hover:bg-abu-gelap hover:border-x-8 border-oranye mt-10 space-x-3 ${state.isActive ? "bg-abu-gelap border-x-8 border-oranye" : ""}`}>
                    <HomeIcon fontSize='large' />
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to={"/profile/edit"} className={(state) => `flex justify-center items-center h-1/4 hover:bg-abu-gelap hover:border-x-8 border-oranye space-x-3 ${state.isActive ? "bg-abu-gelap border-x-8 border-oranye" : ""}`}>
                    <AccountCircleIcon fontSize="" />
                    <span>Edit Profile</span>
                </NavLink>
                <NavLink className={(state) => `flex justify-center items-center h-1/4 hover:bg-abu-gelap hover:border-x-8 border-oranye space-x-3 ${state.isActive ? "bg-abu-gelap border-x-8 border-oranye" : ""}`}>
                    <span>History</span>
                </NavLink>
            </div>
        </div>
    )
}
export default NavbarProfile