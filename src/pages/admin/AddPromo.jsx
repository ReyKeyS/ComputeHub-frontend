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
            <br />
            <div className="grid grid-cols-4">
                <div className="text-white text-2xl place-items-center  mr-12 text-right">
                    Barang:
                </div>
                <div className="col-span-3 text-white">
                    <input type="text" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-1' 
                    name="" id="barang" />
                </div>
                <div className="text-white text-2xl place-items-center mt-3  mr-12 text-right">
                    Nama:
                </div>
                <div className="col-span-3 text-white">
                    <input type="text" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-5' 
                    name="" id="nama" />
                </div>

                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">
                    Tipe:
                </div>
                <div className="col-span-3 text-white">
                    <input type="text" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-5' 
                    name="" id="tipe" />
                </div>

                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">
                    Discount:
                </div>
                <div className="col-span-3 text-white">
                    <input type="number" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-5'
                     name="" id="discount" />
                </div>

                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">
                    Mulai:
                </div>
                <div className="col-span-3 text-white">
                    <input type="date" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-5' 
                    name="" id="mulai" />
                </div>

                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">
                    Selesai:
                </div>
                <div className="col-span-3 text-white ">
                    <input type="date" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-5' 
                    name="" id="selesai" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default AddPromo