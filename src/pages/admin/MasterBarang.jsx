import * as React from 'react';
import Header from '../../components/Header';
import NavbarAdmin from '../../components/NavbarAdmin';
import HeaderAdmin from '../../components/HeaderAdmin';


function MasterBarang() {
    return (
        <>
            <div className="grid grid-cols-4 h-screen overflow-hidden">
                <NavbarAdmin />
                <div className="col-span-3 w-full bg-abu-gelap">
                    <HeaderAdmin />
                    <div className="h-screen overflow-scroll">
                        <div className="judul text-white text-4xl ms-9 mt-5">
                            <h1>Add New Barang</h1>
                        </div> <br />
                        <div className="grid grid-cols-4">
                            <div className="text-white text-2xl place-items-center  mr-12 text-right">
                                Name:
                            </div>
                            <div className="col-span-3 text-white">
                                <input type="text" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-1'
                                    name="" id="nama" />
                            </div>

                            <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">
                                Description:
                            </div>
                            <div className="col-span-3 text-white ">
                                <textarea className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-5'
                                    name="" id="desc" cols="30" rows="5"></textarea>
                            </div>

                            <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">
                                Price:
                            </div>
                            <div className="col-span-3 text-white">
                                <input type="number" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-5'
                                    name="" id="harga" />
                            </div>

                            <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">
                                Stock:
                            </div>
                            <div className="col-span-3 text-white">
                                <input type="number" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-5'
                                    name="" id="stok" />
                            </div>

                            <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">
                                Brand:
                            </div>
                            <div className="col-span-3 text-white">
                                <input type="text" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-5'
                                    name="" id="brand" />
                            </div>

                            <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">
                                Category:
                            </div>
                            <div className="col-span-3 text-white">
                                <input type="text" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-5'
                                    name="" id="category" />
                            </div>

                            <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">
                                Image:
                            </div>
                            <div className="col-span-3 ">
                                <button className='rounded bg-oranye text-black mt-5 w-48 h-10 text-xl'>Choose File</button>
                            </div>
                            <br />

                            <div className="col-span-4 text-right mr-12">
                                <button className='rounded bg-oranye text-black mt-5 w-48 h-10 text-xl '>Add Item</button>
                            </div>

                        </div>
                        <div className="judul text-white text-4xl ms-9 mt-5">
                            <h1>List Products</h1>
                        </div> <br />

                        <div className="tabel rounded rounded-lg w-11/12 mt-4 mx-auto h-fit  border border-oranye bg-abu-gelap">
                            <div className="header flex w-max text-oranye text-2xl">
                                <div className=" w-10 ml-3">No</div>
                                <div className=" w-20 ml-3">ID</div>
                                <div className=" w-48 ml-3">Name</div>
                                <div className=" w-56 ml-3">Price</div>
                                <div className=" w-60 ml-3">Category</div>
                                <div className=" w-48 ml-3">Amount</div>
                                <div className=" w-16 ml-3">Action</div>
                            </div>

                            <hr className="bg-oranye"></hr>
                            <div className="listdata flex  text-white h-16 place-items-center text-lg font-bold">
                                <div className="text-align-center w-10 ml-3">1</div>
                                <div className="text-align-center w-20 ml-3">BRO001</div>
                                <div className="text-align-center w-48 ml-3">INTIL</div>
                                <div className="text-align-center w-56 ml-3">Rp 40.000</div>
                                <div className="text-align-center w-60 ml-3">Processor</div>
                                <div className="text-align-center w-48 ml-3">7</div>
                                <div className="text-align-center w-16 ml-3">...</div>
                                {/* kurang onclick */}
                            </div>
                            <hr className="border border-oranye w-11/12 mx-auto"></hr>

                            <div className="listdata flex text-white h-16 place-items-center text-lg font-bold">
                                <div className="text-align-center w-10 ml-3">2</div>
                                <div className="text-align-center w-20 ml-3">BRO002</div>
                                <div className="text-align-center w-48 ml-3">APASE</div>
                                <div className="text-align-center w-56 ml-3">Rp 500.000</div>
                                <div className="text-align-center w-60 ml-3">VGA</div>
                                <div className="text-align-center w-48 ml-3">11</div>
                                <div className="text-align-center w-16 ml-3">...</div>
                                {/* kurang onclick */}
                            </div>
                            <hr className="border border-oranye w-11/12 mx-auto"></hr>


                            <div className="listdata flex text-white h-16 place-items-center text-lg font-bold">
                                <div className="text-align-center w-10 ml-3">3</div>
                                <div className="text-align-center w-20 ml-3">BRO003</div>
                                <div className="text-align-center w-48 ml-3">PRODUK3</div>
                                <div className="text-align-center w-56 ml-3">Rp 1.240.000</div>
                                <div className="text-align-center w-60 ml-3">HDD</div>
                                <div className="text-align-center w-48 ml-3">80</div>
                                <div className="text-align-center w-16 ml-3">...</div>
                                {/* kurang onclick */}
                            </div>
                            <hr className="border border-oranye w-11/12 mx-auto"></hr>

                            <div className="listdata flex text-white h-16 place-items-center text-lg font-bold">
                                <div className="text-align-center w-10 ml-3">4</div>
                                <div className="text-align-center w-20 ml-3">BRO004</div>
                                <div className="text-align-center w-48 ml-3">Produk4</div>
                                <div className="text-align-center w-56 ml-3">Rp 10.400.000</div>
                                <div className="text-align-center w-60 ml-3">VGA</div>
                                <div className="text-align-center w-48 ml-3">2</div>
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

export default MasterBarang