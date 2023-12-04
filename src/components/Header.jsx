    import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import client from '../services/client'
import { useNavigate } from 'react-router-dom'

// Material UI
import SearchIcon from '@mui/icons-material/Search';
import ComputerIcon from '@mui/icons-material/Computer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Avatar
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

function Header(){
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [profpict, setProfpict] = useState();
    
    // Avatar Handler
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const profile = () => {
        setAnchorEl(null);
        navigate("/profile")
    }

    const logout = () => {
        setAnchorEl(null);

        localStorage.removeItem('user_token')
        setUser(undefined);
        navigate('/login')
    }

    useEffect(() =>{
        if (localStorage.getItem('user_token')){
            client.get('/users/detail', {
                headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")},
            }).then((res) => {
                // Alert Verify Email
                // if (!res.data.email_verified) alert("Please check and verify your email")
                setUser(res.data)
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [])

    return(
        <nav className="grid grid-cols-7 bg-abu-super-gelap place-items-center h-[5rem]">
            <Link to="/">
                <div className="bg-abu-super-gelap text-white rounded-lg text-3xl p-2 flex justify-center"><ComputerIcon fontSize='large'/>&nbsp;Compute&nbsp;<span className="bg-oranye rounded-lg font-bold text-abu-super-gelap px-1">HUB</span></div>
            </Link>
            <Link to="/shop">
                <div className="text-white text-2xl">Shop</div>
            </Link>
            <Link to='/chat'>
                <div className="text-white text-2xl">Chat</div>
            </Link>
            <div className="text-white text-2xl col-span-2 ms-auto"><SearchIcon fontSize='large'/></div>
            <Link to="/cart">
                <div className="text-white text-2xl"><ShoppingCartIcon /> Cart</div>
            </Link>
            
            {!user && 
                <Link to="/login">
                    <div className="font-bold text-white text-2xl">Log in</div>
                </Link>
            }
            {user && 
                <>
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar src={import.meta.env.VITE_BACKEND_GET_PICTURE_URL+user?.profile_picture}/>
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                // MenuList
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                // Icon Avatar
                                '& .MuiAvatar-root': {
                                    width: 25,
                                    height: 25,
                                    ml: -0.5,
                                    mr: 1.8,
                                    bgcolor: "#ffffff",
                                    color: "black"
                                },
                                // Diamond
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 54,
                                    width: 10,
                                    height: 10,
                                    bgcolor: '#292929',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                                bgcolor: '#292929',
                                color: 'white',
                            },
                        }}
                        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={profile}>
                        <Avatar /> Profile
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={logout}>
                            <ListItemIcon>
                                <Logout fontSize="small" sx={{color: "white"}}/>
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </>
            }
        </nav>
    )
}
export default Header