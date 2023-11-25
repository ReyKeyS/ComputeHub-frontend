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
        <div className="kiri w-full h-screen bg-abu-super-gelap">
            <div className='bg-abu-super-gelap text-white shadow-xl shadow-abu-gelap rounded-lg text-4xl p-5 w-80 m-auto flex justify-center'>
                <ComputerIcon fontSize='' />
                <div className='mx-2'>Compute</div>
                <a className='bg-oranye rounded-lg font-bold text-abu-super-gelap pb-1'>HUB</a>
            </div>

            <div className="listbutton text-white mt-3">
                <Link to="/admin">
                    <div className="h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                        <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                            <div className='flex'>
                                <HomeIcon className="w-8 h-8 mr-2" />
                                <img></img>
                                <h2>Dashboard</h2>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/admin/masteruser">
                    <div className="h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                        <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                            <div className='flex'>
                                <AccountCircleIcon className="w-8 h-8 mr-2" />
                                <img></img>
                                <h2>Customers</h2>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/admin/masterbarang">
                    <div className="h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                        <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                            <div className='flex'>
                                <InventoryIcon className="w-8 h-8 mr-2" />
                                <img></img>
                                <h2>Master Barang</h2>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/admin/report">
                    <div className="h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                        <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                            <div className='flex'>
                                <SummarizeIcon className="w-8 h-8 mr-2" />
                                <img></img>
                                <h2>Report</h2>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/admin/promo">
                    <div className="h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                        <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                            <div className='flex'>
                                <DiscountIcon className="w-8 h-8 mr-2" />
                                <img></img>
                                <h2>Promo</h2>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/admin/confirmation">
                    <div className="h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                        <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                            <div className='flex'>
                                <CheckIcon className="w-8 h-8 mr-2" />
                                <img></img>
                                <h2>Confirm </h2>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/admin/chat">
                    <div className="h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                        <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                            <div className='flex'>
                                <ChatBubbleIcon className="w-8 h-8 mr-2" />
                                <img></img>
                                <h2>Chat</h2>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/login">
                    <div className="h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                        <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                            <div className='flex'>
                                <LogoutIcon className="w-8 h-8 mr-2" />
                                <img></img>
                                <h2>Log Out</h2>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>


        </div>
    )
}
export default NavbarAdmin