import * as React from 'react';
import Header from '../../components/Header';
import NavbarAdmin from '../../components/NavbarAdmin';
import HeaderAdmin from '../../components/HeaderAdmin';

function Confirmation() {
    return (
        <>
        <div className="judul text-white text-4xl ms-9 mt-5">
            <h1>Confirmation</h1>
        </div>

        <div className="tabel rounded-lg w-11/12 mt-4 ml-9 h-80 text-white border border-oranye bg-abu-gelap">
            <div className="header flex w-max e text-2xl">
                <div className=" w-48 ml-3 text-oranye">Pesanan Baru</div>
                <div className=" w-32 ml-3 text-oranye">INV003</div>
                <div className=" w-44 ml-3 text-white">BUDI AGUNG</div>
                <div className=" w-64 ml-3 text-white">31 Agustus 2023 </div>
                <div className=" w-32 text-align-left text-white">19:50 WIB</div>
                {/* <div className=" w-16 ml-3">Action</div> */}
            </div>

            <hr className="border border-oranye"></hr>
            <div className="listdata flex text-white h-40 place-items-center text-lg font-bold">
                <div className="text-align-center bg-oranye w-40 h-32 mt-5 ml-8 rounded">
                    <img src="" alt="" />
                </div>
                <div className="text-align-center w-52 h-32 mt-5 ml-8">
                    <div className="ml-3 mt-3 text-2xl text-white">RTX 4090 TI</div>
                    <div className="ml-3 mt-3 text-xl text-white">1 x Rp. 40.000.000</div>
                </div>
                <div className="text-align-center w-64 h-32 mt-5 ml-10">
                    <div className="ml-3 mt-3 text-2xl text-white">Address</div>
                    <div className="ml-3 mt-3  text-white">Jl Tongkrongan sok asik 87, Surabaya</div>
                </div>

            </div>
            <div className="flex mt-10 ml-7">
                <div className="text-2xl flex">
                    <div className="text-white">
                        Transaction Amount : 
                    </div>
                    <div className="text-oranye ml-3">
                        Rp. 40.000.000 
                    </div>
                </div>
                <div className="flex justify-end ml-auto">
                    <div className="col-span-4 text-right mr-12">
                        <button className='rounded bg-oranye text-black mt-5 w-48 h-10 text-xl '>Batal</button>
                    </div>
                    <div className="col-span-4 text-right mr-12">
                        <button className='rounded bg-oranye text-black mt-5 w-48 h-10 text-xl '>Terima</button>
                    </div>
                </div>
            </div>
        </div>

        {/* ulangi terus */}
    </>
    )
}

export default Confirmation