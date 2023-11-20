import * as React from 'react';
import Header from '../../components/Header';
import NavbarAdmin from '../../components/NavbarAdmin';
import HeaderAdmin from '../../components/HeaderAdmin';


function AddPromo() {
    return (
        <>
      <div className="grid grid-cols-4 overflow-hidden">
        <NavbarAdmin />
        <div className="col-span-3 w-full h-screen bg-abu-gelap">
          <HeaderAdmin/>
          <div className="h-screen overflow-scroll">
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

                <div className="col-span-4 text-right mr-12">
                    <button className='rounded bg-oranye text-black mt-5 w-48 h-10 text-xl '>Add Promo</button>
                </div>

            </div>

            <div className="judul text-white text-4xl ms-9 mt-5">
                <h1>List Products</h1>
            </div> <br />

            <div className="tabel rounded rounded-lg w-11/12 mt-4 mx-auto h-fit  border border-oranye bg-abu-gelap">
                <div className="header flex w-max text-oranye text-2xl">
                    <div className=" w-10 ml-3">No</div>
                    <div className=" w-20 ml-3">ID</div>
                    <div className=" w-32 ml-3">Name</div>
                    <div className=" w-48 ml-3">Discount</div>
                    <div className=" w-52 ml-3">Barang</div>
                    <div className=" w-80 ml-3">Duration</div>
                    <div className=" w-16 ml-3">Action</div>
                </div>

                <hr className="bg-oranye"></hr>
                <div className="listdata flex  text-white h-16 place-items-center text-lg font-bold">
                    <div className="text-align-center w-10 ml-3">1</div>
                    <div className="text-align-center w-20 ml-3">MEGA01</div>
                    <div className="text-align-center w-32 ml-3">Mega Sale</div>
                    <div className="text-align-center w-48 ml-3">50 %</div>
                    <div className="text-align-center w-52 ml-3">GTX 3080</div>
                    <div className="text-align-center w-80 ml-3">10 Oktober 2022-10 November 2022</div>
                    <div className="text-align-center w-16 ml-3">...</div>
                    {/* kurang onclick */}
                </div>
                <hr className="border border-oranye w-11/12 mx-auto"></hr>

                <div className="listdata flex text-white h-16 place-items-center text-lg font-bold">
                    <div className="text-align-center w-10 ml-3">2</div>
                    <div className="text-align-center w-20 ml-3">HLW01</div>
                    <div className="text-align-center w-32 ml-3">Halowen</div>
                    <div className="text-align-center w-48 ml-3">RP 5.000</div>
                    <div className="text-align-center w-52 ml-3">GTX 3090</div>
                    <div className="text-align-center w-80 ml-3">15 Oktober 2022-10 Desember 2022</div>
                    <div className="text-align-center w-16 ml-3">...</div>
                    {/* kurang onclick */}
                </div>
                <hr className="border border-oranye w-11/12 mx-auto"></hr>


                <div className="listdata flex text-white h-16 place-items-center text-lg font-bold">
                    <div className="text-align-center w-10 ml-3">3</div>
                    <div className="text-align-center w-20 ml-3">DSC01</div>
                    <div className="text-align-center w-32 ml-3">Dsicount3</div>
                    <div className="text-align-center w-48 ml-3">RP 50.000</div>
                    <div className="text-align-center w-52 ml-3">GTX 1090</div>
                    <div className="text-align-center w-80 ml-3">15 January 2022-10 Desember 2022</div>
                    <div className="text-align-center w-16 ml-3">...</div>
                    {/* kurang onclick */}
                </div>
                <hr className="border border-oranye w-11/12 mx-auto"></hr>


                </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default AddPromo