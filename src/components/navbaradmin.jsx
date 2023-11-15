import { Link } from 'react-router-dom'
import ComputerIcon from '@mui/icons-material/Computer';


function navbar(){
    <div className="kiri w-full h-screen bg-abu-super-gelap">
        <div className='bg-abu-super-gelap text-white shadow-lg rounded-lg text-4xl p-5 w-1/2 m-auto flex justify-center'>
            <ComputerIcon fontSize=''/>
            <div className='mx-2'>Compute</div>
            <a className='bg-oranye rounded-lg font-bold text-abu-super-gelap pb-1'>HUB</a>
        </div>
        
        <div className="listbutton text-white mt-3">
            <div className="dashboard h-16 grid place-items-center justify-items-center hover:bg-abu-gelap">
                <div className='flex'>
                <img></img>
                <h2>Dashboard</h2>
            </div>
        </div>

        <div className="h-16 grid place-items-center justify-items-center hover:bg-abu-gelap">
            <div className='flex'>
            <img></img>
            <h2>Customers</h2>
            </div>
        </div>

        <div className="h-16 grid place-items-center justify-items-center hover:bg-abu-gelap">
            <div className='flex'>
            <img></img>
            <h2>Master Barang</h2>
            </div>
        </div>

        <div className="dashboard h-16 grid place-items-center justify-items-center hover:bg-abu-gelap">
            <div className='flex'>
            <img></img>
            <h2>Report</h2>
            </div>
        </div>

        <div className="h-16 grid place-items-center justify-items-center hover:bg-abu-gelap">
            <div className='flex'>
            <img></img>
            <h2>Promo</h2>
            </div>
        </div>

        <div className="h-16 grid place-items-center justify-items-center hover:bg-abu-gelap">
            <div className='flex'>
            <img></img>
            <h2>Confirm </h2>
            </div>
        </div>

        <div className="h-16 grid place-items-center justify-items-center hover:bg-abu-gelap">
            <div className='flex'>
            <img></img>
            <h2>Settings</h2>
            </div>
        </div>

        <div className="h-16 grid place-items-center justify-items-center hover:bg-abu-gelap">
            <div className='flex'>
            <img></img>
            <h2>Log Out</h2>
            </div>
        </div>

        </div>
        

    </div>

}
export default navbar