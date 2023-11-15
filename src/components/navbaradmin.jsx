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



function NavbarAdmin() {
    return (
        <div className="kiri w-full h-screen bg-abu-super-gelap">
            <div className='bg-abu-super-gelap text-white shadow-xl shadow-slate-800 rounded-lg text-4xl p-5 w-80 m-auto flex justify-center'>
                <ComputerIcon fontSize='' />
                <div className='mx-2'>Compute</div>
                <a className='bg-oranye rounded-lg font-bold text-abu-super-gelap pb-1'>HUB</a>
            </div>

            <div className="listbutton text-white mt-3">
                <div className="h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                    <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                        <div className='flex'>
                            <HomeIcon className="w-8 h-8 mr-2" />
                            <img></img>
                            <h2>Dashboard</h2>
                        </div>
                    </div>
                </div>

                <div className="h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                    <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                        <div className='flex'>
                            <AccountCircleIcon className="w-8 h-8 mr-2" />
                            <img></img>
                            <h2>Customers</h2>
                        </div>
                    </div>
                </div>
                <div className="h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                    <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                        <div className='flex'>
                            <InventoryIcon className="w-8 h-8 mr-2" />
                            <img></img>
                            <h2>Master Barang</h2>
                        </div>
                    </div>
                </div>

                <div className="h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                    <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                        <div className='flex'>
                            <SummarizeIcon className="w-8 h-8 mr-2" />
                            <img></img>
                            <h2>Report</h2>
                        </div>
                    </div>
                </div>

                <div className="h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                    <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                        <div className='flex'>
                            <DiscountIcon className="w-8 h-8 mr-2" />
                            <img></img>
                            <h2>Promo</h2>
                        </div>
                    </div>
                </div>

                <div className="h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                    <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                        <div className='flex'>
                            <CheckIcon className="w-8 h-8 mr-2" />
                            <img></img>
                            <h2>Confirm </h2>
                        </div>
                    </div>
                </div>

                <div className="h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                    <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                        <div className='flex'>
                            <SettingsIcon className="w-8 h-8 mr-2" />
                            <img></img>
                            <h2>Settings</h2>
                        </div>
                    </div>
                </div>

                <div className="h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                    <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                        <div className='flex'>
                            <LogoutIcon className="w-8 h-8 mr-2" />
                            <img></img>
                            <h2>Log Out</h2>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
export default NavbarAdmin