import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import client from "../../services/client"

// Material UI
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

const EmailVerify = () => {
    const location = useLocation()
    const token = new URLSearchParams(location.search).get('token')
    const navigate = useNavigate()
    const [user, setUser] = useState()

    useEffect(() =>{
        if (token){
            let timeout;
            client.get(`/users/verifyemail/${token}`).then((res) => {
                timeout = setTimeout(() => {
                    navigate("/login")
                }, 3000);
            }).catch((err) => {
                console.log(err);
            })
    
            return () => {
                clearTimeout(timeout);
            }
        }
    }, [])

    return (<div className='w-screen h-screen bg-abu-super-gelap text-oranye flex justify-center items-center'>
        {token && 
            <div className='text-8xl text-center'>
                <div><MailOutlinedIcon sx={{fontSize: "20rem"}}/></div>
                <div className='w-2/3 mx-auto'>Thank you for your email verification</div>
            </div>
        }
        {!token && 
            <div className='text-8xl text-center'>
                <div><MailOutlinedIcon sx={{fontSize: "20rem"}}/></div>
                <div className='w-full mx-auto'>Please verify your email</div>
                <button className='text-3xl rounded-xl border border-oranye px-4 py-2 hover:bg-oranye hover:text-black transition duration-500' onClick={()=>navigate("/")}>Back to Home</button>
            </div>
        }
    </div>)
}

export default EmailVerify