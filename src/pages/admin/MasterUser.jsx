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
          <div className="h-fit">
            <div className="judul text-white text-4xl ms-9 mt-5">
              <h1>Customers</h1>
            </div>
            <div className="tabel rounded rounded-lg w-11/12 mt-4 mx-auto h-fit  border border-oranye bg-abu-gelap">
              <div className="header flex w-max text-oranye text-2xl">
                <div className=" w-10 ml-3">No</div>
                <div className=" w-20 ml-3">ID</div>
                <div className=" w-48 ml-3">Name</div>
                <div className=" w-72 ml-3">Email</div>
                <div className=" w-96 ml-3">Alamat</div>
                <div className=" w-16 ml-3">Action</div>
              </div>

              <hr className="bg-oranye"></hr>
              <div className="listdata flex  text-white h-16 place-items-center text-lg font-bold">
                <div className="text-align-center w-10 ml-3">1</div>
                <div className="text-align-center w-20 ml-3">CST001</div>
                <div className="text-align-center w-48 ml-3">Ryan Kohans</div>
                <div className="text-align-center w-72 ml-3">ryankohans@gmail.com</div>
                <div className="text-align-center w-96 ml-3">Jl Arief Rachman Hakim 57</div>
                <div className="text-align-center w-16 ml-3">...</div> 
                {/* kurang onclick */}
              </div>
              <hr className="border border-oranye w-11/12 mx-auto"></hr>

              <div className="listdata flex text-white h-16 place-items-center text-lg font-bold">
                <div className="text-align-center w-10 ml-3">2</div>
                <div className="text-align-center w-20 ml-3">CST002</div>
                <div className="text-align-center w-48 ml-3">Paddy Hermanito</div>
                <div className="text-align-center w-72 ml-3">paddyhermanito@gmail.com</div>
                <div className="text-align-center w-96 ml-3">Jl Rungkut Lor 90</div>
                <div className="text-align-center w-16 ml-3" >...</div>
                {/* kurang onclick */}
              </div>
              <hr className="border border-oranye w-11/12 mx-auto"></hr>


              <div className="listdata flex text-white h-16 place-items-center text-lg font-bold">
                <div className="text-align-center w-10 ml-3">3</div>
                <div className="text-align-center w-20 ml-3">CST003</div>
                <div className="text-align-center w-48 ml-3">Michael Lukas Tjanda</div>
                <div className="text-align-center w-72 ml-3">lukas@gmail.com</div>
                <div className="text-align-center w-96 ml-3">Jl Glorindo 69</div>
                <div className="text-align-center w-16 ml-3" >...</div>
                {/* kurang onclick */}
              </div>
              <hr className="border border-oranye w-11/12 mx-auto"></hr>

              <div className="listdata flex text-white h-16 place-items-center text-lg font-bold">
                <div className="text-align-center w-10 ml-3">4</div>
                <div className="text-align-center w-20 ml-3">CST004</div>
                <div className="text-align-center w-48 ml-3">Gunawan</div>
                <div className="text-align-center w-72 ml-3">gun87@gmail.com</div>
                <div className="text-align-center w-96 ml-3">Jl Tunjungan 71</div>
                <div className="text-align-center w-16 ml-3" >...</div>
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

export default MasterUser