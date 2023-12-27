    import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'
import client from '../services/client'
import { setSearch } from '../app/filterSlice';

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
    const searchFilter = useSelector((state) => state.filter.search)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [profpict, setProfpict] = useState();
    
    const { register, reset, handleSubmit } = useForm({});

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
        navigate("/profile/")
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
                setUser(res.data)
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [])

    const searching = (data) => {
        dispatch(setSearch(data.search))
        navigate("/shop")
    }

    return(
        <nav className="grid grid-cols-8 bg-abu-super-gelap place-items-center h-[5rem]">
            <NavLink to="/" id='logo'>
                <div className="bg-abu-super-gelap text-white rounded-lg text-2xl p-2 ms-10 flex justify-center"><ComputerIcon fontSize='large'/>&nbsp;Compute&nbsp;<span className="bg-oranye rounded-lg font-bold text-abu-super-gelap px-1">HUB</span></div>
            </NavLink>
            <NavLink to="/shop" className={(state)=>`text-white text-2xl ${state.isActive ? "font-bold text-3xl" : ""}`}>
                Shop
            </NavLink>
            <NavLink to={"/build"} className={(state)=>`text-white text-2xl ${state.isActive ? "font-bold text-3xl" : ""}`}>
                Build
            </NavLink>
            {/* <div className='flex items-center'> */}
                <form onSubmit={handleSubmit(searching)} className='flex items-center col-span-2 w-full'>
                    <input type="text" name='searchItem' id='searchItem' className='w-full rounded-xl px-4 py-2' placeholder='Search Product..' defaultValue={searchFilter} {...register("search")}/>
                    <button name='searchButton' id='searchButton' className="text-white text-2xl col-span-2 ms-2"><SearchIcon fontSize='large'/></button>
                </form>
            {/* </div> */}
            {/* <div className='flex items-center'>
                <form onSubmit={handleSubmit(searching)}>
                    <input type="text" className='w-[14rem] rounded-xl px-4 py-2' placeholder='Search Product..' defaultValue={searchFilter} {...register("search")}/>
                </form>
                <div className="text-white text-2xl col-span-2 ms-2"><SearchIcon fontSize='large'/></div>
            </div> */}
            
            <NavLink to="/cart" className={(state)=>`text-white text-2xl ${state.isActive ? "font-bold text-3xl" : ""}`}>
                Cart
            </NavLink>
            <NavLink to='/chat' className={(state)=>`text-white text-2xl ${state.isActive ? "font-bold text-3xl" : ""}`} id='chat'>
                {!user && <p>Chat</p>}
                {user && user?.chats?.length == 0 ? <p>Chat</p> : user?.chats?.length > 0 && user?.chats[0].is_read ? <p>Chat</p> : user?.chats?.length > 0 && !user?.chats[0].is_read ?
                    <div className="indicator">
                        <div className="indicator-item badge badge-xs badge-error mt-2 z-0 opacity-80"></div> 
                        <div className="z-10">Chat</div>
                    </div> : ""
                }
            </NavLink>
            
            {!user && 
                <NavLink to="/login" id='login'>
                    <div className="font-bold text-white text-2xl">Log in</div>
                </NavLink>
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