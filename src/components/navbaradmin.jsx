import { Link } from 'react-router-dom'
import ComputerIcon from '@mui/icons-material/Computer';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import SummarizeIcon from '@mui/icons-material/Summarize';
import DiscountIcon from '@mui/icons-material/Discount';
import CheckIcon from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

//jika ada chat baru (pake usestate)
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';



function NavbarAdmin() {
    return (
        <div className='h-screen flex bg-abu-super-gelap'>
            <div className="kiri w-full h-auto">
                <div className='bg-abu-super-gelap text-white shadow-lg border border-neutral-800 shadow-abu-gelap rounded-lg text-5xl p-5 w-5/6 h-auto m-auto flex justify-center'>
                    <ComputerIcon fontSize='' />
                    <div className='mx-2'>Compute</div>
                    <a className='bg-oranye rounded-lg font-bold text-abu-super-gelap pb-1 px-2'>HUB</a>
                </div>

                <div className="listbutton text-white mt-14">
                    <Link to="/admin">
                        <div className="h-24 grid place-items-center justify-items-center hover:border-s-4 hover:border-e-4 border-oranye">
                            <div className="h-24 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                                <div className='flex'>
                                    <HomeIcon fontSize='large' className="me-3"/>
                                    <img></img>
                                    <p className='text-3xl'>Dashboard</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/admin/masteruser">
                        <div className="h-24 grid place-items-center justify-items-center hover:border-l-4 hover:border-e-4 border-oranye">
                            <div className="h-24 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                                <div className='flex'>
                                    <AccountCircleIcon fontSize='large' className="me-3"/>
                                    <img></img>
                                    <p className='text-3xl'>Customers</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/admin/masteritem">
                        <div className="h-24 grid place-items-center justify-items-center hover:border-l-4 hover:border-e-4 border-oranye">
                            <div className="h-24 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                                <div className='flex'>
                                    <InventoryIcon fontSize='large' className="me-3"/>
                                    <img></img>
                                    <p className='text-3xl'>Master Item</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/admin/report">
                        <div className="h-24 grid place-items-center justify-items-center hover:border-l-4 hover:border-e-4 border-oranye">
                            <div className="h-24 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                                <div className='flex'>
                                    <SummarizeIcon fontSize='large' className="me-3"/>
                                    <img></img>
                                    <p className='text-3xl'>Report</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/admin/promo">
                        <div className="h-24 grid place-items-center justify-items-center hover:border-l-4 hover:border-e-4 border-oranye">
                            <div className="h-24 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                                <div className='flex'>
                                    <DiscountIcon fontSize='large' className="me-3"/>
                                    <img></img>
                                    <p className='text-3xl'>Promo</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/admin/confirmation">
                        <div className="h-24 grid place-items-center justify-items-center hover:border-l-4 hover:border-e-4 border-oranye">
                            <div className="h-24 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                                <div className='flex'>
                                    <CheckIcon fontSize='large' className="me-3"/>
                                    <img></img>
                                    <p className='text-3xl'>Confirm </p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/admin/chat">
                        <div className="h-24 grid place-items-center justify-items-center hover:border-l-4 hover:border-e-4 border-oranye">
                            <div className="h-24 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                                <div className='flex'>
                                    <ChatBubbleIcon fontSize='large' className="me-3" />
                                    <img></img>
                                    <p className='text-3xl'>Chat</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/login" onClick={()=>{localStorage.removeItem('user_token')}}>
                        <div className="h-24 grid place-items-center justify-items-center hover:border-l-4 hover:border-e-4 border-oranye">
                            <div className="h-24 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                                <div className='flex'>
                                    <LogoutIcon fontSize='large' className="me-3"/>
                                    <img></img>
                                    <p className='text-3xl'>Log Out</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default NavbarAdmin