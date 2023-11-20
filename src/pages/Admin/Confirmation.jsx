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
              <h1>Confirmation</h1>
            </div>
            <div className="tabel rounded rounded-lg w-11/12 mt-4 ml-9 h-52 text-white border border-oranye bg-abu-gelap">
                <div className="header flex w-max text-oranye text-2xl">
                    <div className=" w-10 ml-3">Pesanan Baru</div>
                    <div className=" w-20 ml-3">INV003</div>
                    <div className=" w-48 ml-3">BUDI AGUNG</div>
                    <div className=" w-72 ml-3">31 Agustus 2023, </div>
                    <div className=" w-96 ml-3">19:50 WIB</div>
                    {/* <div className=" w-16 ml-3">Action</div> */}
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default Confirmation