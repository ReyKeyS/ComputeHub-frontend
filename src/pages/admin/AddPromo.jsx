import * as React from 'react';
import Header from '../../components/Header';
import NavbarAdmin from '../../components/NavbarAdmin';
import HeaderAdmin from '../../components/HeaderAdmin';


function AddPromo() {
    return (
        <>
      <div className="grid grid-cols-4">
        <NavbarAdmin />
        <div className="col-span-3 w-full h-screen bg-abu-gelap">
          <HeaderAdmin/>
          <div className="kananbawah">
            <div className="judul text-white text-4xl ms-9 mt-5">
              <h1>Add New Promo</h1>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default AddPromo