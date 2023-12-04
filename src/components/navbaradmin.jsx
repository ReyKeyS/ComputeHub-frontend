import { Link, NavLink } from 'react-router-dom'
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
                    <NavLink to="/admin/" className={(state) => `h-24 flex items-center justify-center justify-items-center hover:border-x-4 hover:bg-abu-gelap border-oranye ${state.isActive ? "bg-abu-gelap border-x-4 border-oranye" : ""}`}>
                        <HomeIcon fontSize='large' className="me-3" />
                        <p className='text-3xl'>Dashboard</p>
                    </NavLink>

                    <NavLink to="/admin/masteruser" className={(state) => `h-24 flex items-center justify-center justify-items-center hover:border-x-4 hover:bg-abu-gelap border-oranye ${state.isActive ? "bg-abu-gelap border-x-4 border-oranye" : ""}`}>
                        <AccountCircleIcon fontSize='large' className="me-3" />
                        <p className='text-3xl'>Customers</p>
                    </NavLink>

                    <NavLink to="/admin/masteritem" className={(state) => `h-24 flex items-center justify-center justify-items-center hover:border-x-4 hover:bg-abu-gelap border-oranye ${state.isActive ? "bg-abu-gelap border-x-4 border-oranye" : ""}`}>
                        <InventoryIcon fontSize='large' className="me-3" />
                        <p className='text-3xl'>Master Item</p>
                    </NavLink>

                    <NavLink to="/admin/report" className={(state) => `h-24 flex items-center justify-center justify-items-center hover:border-x-4 hover:bg-abu-gelap border-oranye ${state.isActive ? "bg-abu-gelap border-x-4 border-oranye" : ""}`}>
                        <SummarizeIcon fontSize='large' className="me-3" />
                        <p className='text-3xl'>Report</p>
                    </NavLink>

                    <NavLink to="/admin/promo" className={(state) => `h-24 flex items-center justify-center justify-items-center hover:border-x-4 hover:bg-abu-gelap border-oranye ${state.isActive ? "bg-abu-gelap border-x-4 border-oranye" : ""}`}>
                        <DiscountIcon fontSize='large' className="me-3" />
                        <p className='text-3xl'>Promo</p>
                    </NavLink>

                    <NavLink to="/admin/confirmation" className={(state) => `h-24 flex items-center justify-center justify-items-center hover:border-x-4 hover:bg-abu-gelap border-oranye ${state.isActive ? "bg-abu-gelap border-x-4 border-oranye" : ""}`}>
                        <CheckIcon fontSize='large' className="me-3" />
                        <p className='text-3xl'>Confirmation</p>
                    </NavLink>

                    <NavLink to="/admin/chat" className={(state) => `h-24 flex items-center justify-center justify-items-center hover:border-x-4 hover:bg-abu-gelap border-oranye ${state.isActive ? "bg-abu-gelap border-x-4 border-oranye" : ""}`}>
                        <ChatBubbleIcon fontSize='large' className="me-3" />
                        <p className='text-3xl'>Chat</p>
                    </NavLink>

                    <NavLink to="/login" onClick={()=>{localStorage.removeItem('user_token')}} className={(state) => `h-24 flex items-center justify-center justify-items-center hover:border-x-4 hover:bg-abu-gelap border-oranye ${state.isActive ? "bg-abu-gelap border-x-4 border-oranye" : ""}`}>
                        <LogoutIcon fontSize='large' className="me-3" />
                        <p className='text-3xl'>Logout</p>
                    </NavLink>

                </div>
            </div>
        </div>
    )
}
export default NavbarAdmin