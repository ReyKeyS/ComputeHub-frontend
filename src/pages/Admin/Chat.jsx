import * as React from 'react';
import Header from '../../components/Header';
import NavbarAdmin from '../../components/NavbarAdmin';
import HeaderAdmin from '../../components/HeaderAdmin';


function Confirmation() {
    return (
        <>
      <div className="grid grid-cols-4 overflow-hidden">
        <NavbarAdmin />
        <div className="col-span-3 w-full h-screen bg-abu-gelap">
          <HeaderAdmin/>
          <div className="kananbawah h-screen overflow-scroll">
            <div className="judul text-white text-4xl ms-9 mt-5">
              <h1>Chat</h1>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default Confirmation