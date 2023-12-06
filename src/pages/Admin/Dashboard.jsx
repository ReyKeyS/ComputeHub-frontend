import * as React from 'react';
import Header from '../../components/Header';
import NavbarAdmin from '../../components/NavbarAdmin';
import HeaderAdmin from '../../components/HeaderAdmin';

function Dashboard() {
    return (
        <>
          <div className="judul text-white text-4xl ms-9 mt-5 ">
            <div className='flex'>
              <h1>Welcome Back, </h1>
              <h1 className='text-oranye'>&nbsp;Admin</h1>
              </div>
          </div>
          <div className="headline text-white text-xl ml-9 mt-2">
              <p> Here's What happening with your store today</p>
          </div>
          <div className="flex mt-5 gap-8 mx-9">
            <div className="box-border rounded-md border-oranye h-64 w-80 p-4 border-2">

            </div>
            <div className="box-border rounded-md border-oranye h-64 w-80 p-4 border-2">

            </div>
            <div className="box-border rounded-md border-oranye h-64 w-80 p-4 border-2">

            </div>

          </div>

          <div className="text-3xl text-white ml-9 mt-5">
            Recent Messages
          </div>
          <div className="tabel rounded-lg w-11/12 mt-4 ml-9 h-fit text-white border-oranye bg-abu-gelap">
              <p>halo bang rempah rempah ready??</p>

              <p>halo bang rempah rempah ready??</p>
              <p>halo bang rempah rempah ready??</p>
              <p>halo bang rempah rempah ready??</p>
              <p>halo bang rempah rempah ready??</p>
          </div>


          <br />
          
    </>
    )
}

export default Dashboard