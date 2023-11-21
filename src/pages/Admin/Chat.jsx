import * as React from 'react';
import Header from '../../components/Header';
import NavbarAdmin from '../../components/NavbarAdmin';
import HeaderAdmin from '../../components/HeaderAdmin';
import SearchIcon from '@mui/icons-material/Search';


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
            <div className="grid grid-cols-3 gap-2 mt-5">
                <div className="rounded col-span-1 h-screen border border-oranye">
                    <div className="flex ml-5 mr-3 mt-5 text-oranye">
                        <button className="w-20 h-10 border border-oranye rounded-l-lg">
                            <SearchIcon></SearchIcon>
                        </button>
                        <input className= "w-96 h-10 text-white bg-abu-gelap border border-oranye rounded-r-lg" type="search" name="" id="" />
                    </div>

            <div className="kiri w-full h-screen bg-abu-super-gelap">

                <div className="listbutton text-white mt-3">
                    <div className="mt-7 h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                        <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                            <div className='flex'>
                                <img className="bg-white w-14 h-14 mr-16 rounded rounded-full"></img>
                                <div className="text-white mr-10">
                                    <h2 className="text-xl">My Son</h2>
                                    <p>Cocok buat oek hantam</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-7 h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                        <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                            <div className='flex'>
                                <img className="bg-white w-14 h-14 mr-16 rounded rounded-full"></img>
                                <div className="text-white mr-10">
                                    <h2 className="text-xl">My Son</h2>
                                    <p>Cocok buat oek hantam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 h-16 grid place-items-center justify-items-center hover:border-l-4 border-oranye">
                        <div className="h-16 w-full grid place-items-center justify-items-center hover:bg-abu-gelap  ">
                            <div className='flex'>
                                <img className="bg-white w-14 h-14 mr-16 rounded rounded-full"></img>
                                <div className="text-white mr-10">
                                    <h2 className="text-xl">My Son</h2>
                                    <p>Cocok buat oek hantam</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>


        </div>
                </div>
                <div className="rounded flex flex-col col-span-2 h-full border border-oranye">
                    <div className='bg-abu-gelap border-b-2 border-oranye shadow-2xl w-full text-white text-4xl h-24 flex '>
                        <div className='flex ml-4 items-center'>
                            <img src="/img/istts_bg.png" alt="" className='w-10 h-10'/>
                            <span className='font-bold ml-3'>My Son</span>
                        </div>
                    </div>
                    <div className="h-full flex">
                        <input className="text-white text-xl h-12 bg-abu-gelap border border-oranye w-5/6 mx-auto rounded mb-5 self-end"
                         type="text" name="" placeholder='Type Here..' id="" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default Confirmation