import React from 'react'
import ComputerIcon from '@mui/icons-material/Computer';
import NavbarAdmin from '../../components/NavbarAdmin';
import HeaderAdmin from '../../components/HeaderAdmin';


function MasterUser() {
  return (
    <>
      <div className="grid grid-cols-4">
        <NavbarAdmin />
        <div className="col-span-3 w-full h-screen bg-abu-gelap">
          <HeaderAdmin/>
          <div className="kananbawah">
            <div className="judul text-white text-4xl ms-9">
              <h1>Customers</h1>
            </div>
            <div className="tabel rounded w-11/12 mt-4 mx-auto h-80 bg-oranye">
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