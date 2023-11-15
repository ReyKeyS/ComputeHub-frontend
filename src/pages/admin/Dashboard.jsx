import * as React from 'react';
import Header from '../../components/Header';
import NavbarAdmin from '../../components/NavbarAdmin';
import HeaderAdmin from '../../components/HeaderAdmin';


function Dashboard() {
    return (
        <>
      <div className="grid grid-cols-4">
        <NavbarAdmin />
        <div className="col-span-3 w-full h-screen bg-abu-gelap">
          <HeaderAdmin/>
          <div className="kananbawah">
            <div className="judul text-white text-4xl ms-9 mt-5">
              <div className='flex'>
                <h1>Welcome Back, </h1>
                <h1 className='text-oranye'> Admin</h1>
               </div>
            </div>
            <div className="headline text-white">
                <p> Here's What happening with your store today</p>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
    )
}

export default Dashboard