import React from 'react'
import ComputerIcon from '@mui/icons-material/Computer';


function MasterUser() {
  return (
    <>
        <div className="container flex">
            <div className="kiri w-1/4 h-screen bg-abu-super-gelap">
              <div className='bg-abu-super-gelap text-white shadow-lg rounded-lg text-4xl p-5 w-1/2 m-auto flex justify-center'>
                <ComputerIcon fontSize=''/>
                <div className='mx-2'>Compute</div>
                <a className='bg-oranye rounded-lg font-bold text-abu-super-gelap pb-1'>HUB</a>
              </div>
              
              <div className="listbutton">
                <div className="dashboard">
                  
                </div>
                <div className="dashboard">

                </div>
                <div className="dashboard">

                </div>

              </div>
              

            </div>
            <div className="kanan w-3/4 h-screen bg-abu-gelap">
              <div className='bg-abu-gelap border border-oranye shadow-lg w-full h-32 text-white text-4xl p-5 flex  m-auto justify-center'>
                <ComputerIcon fontSize=''/>
                <div className='mx-2'>Compute</div>
                <a className='bg-oranye rounded-lg font-bold text-abu-super-gelap pb-1'>HUB</a>
              </div>
              <div className="kananbawah">
                <div className="judul text-white text-4xl">
                  <h1>Customers</h1>
                </div>
                <div className="tabel w-3/4 mx-auto h-80 bg-oranye">
                  <div className="header flex w-max text-white text-2xl">
                    <div className="tulis1 ml-4">No</div>
                    <div className="tulis2 ml-6">ID</div>
                    <div className="tulis3 ml-8">Name</div>
                    <div className="tulis4 ml-9">Email</div>
                    <div className="tulis5 ml-9">Alamat</div>
                    <div className="tulis6 ml-4">Action</div>
                  </div>
                  <hr className='bg-oranye'></hr>
                  <div className="listdata flex">

                    <div className="tulis1 ml-4">No</div>
                    <div className="tulis2 ml-6">ID</div>
                    <div className="tulis3 ml-8">Name</div>
                    <div className="tulis4 ml-9">Email</div>
                    <div className="tulis5 ml-9">Alamat</div>
                    <div className="tulis6 ml-4">Action</div>

                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default MasterUser