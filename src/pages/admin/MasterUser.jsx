import React from 'react'
import { useState, useEffect } from 'react'
import client from '../../services/client'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function MasterUser() {
  const [listUsers, setListUsers] = useState([])

  useEffect(() => {
    client.get("/users", {
      headers: {"Authorization": "Bearer "+localStorage.getItem("user_token")}
    }).then((res)=>{
      setListUsers(res.data)
    }).catch((err) => {
      console.log(err.response.data.message);
    })
  }, [])

  return (
    <>
      <div className="judul text-white text-5xl ms-10 my-7">
        <h1>Customers</h1>
      </div>
      
      <div className='w-5/6'>
        <TableContainer component={Paper} className='mx-24'>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align='center' className=''>No</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>  
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Phone Number</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listUsers?.map((row, index) => {
                return (<>
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell components="th" scope="row">{index+1}</TableCell>
                    <TableCell>{row.display_name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell>{row.phone_number}</TableCell>
                    <TableCell className='flex justify-between'>
                      <button>Edit</button>
                      <button>Delete</button>
                    </TableCell>
                  </TableRow>
                </>)
              })}

              {/* {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* <div className="tabel rounded-lg w-11/12 mt-4 mx-auto h-fit  border border-oranye bg-abu-gelap">
        <div className="header flex w-max text-oranye text-2xl">
          <div className=" w-10 ml-3">No</div>
          <div className=" w-20 ml-3">ID</div>
          <div className=" w-48 ml-3">Name</div>
          <div className=" w-72 ml-3">Email</div>
          <div className=" w-96 ml-3">Alamat</div>
          <div className=" w-16 ml-3">Action</div>
        </div>
        <hr className="border border-oranye"></hr>
        <div className="listdata flex  text-white h-16 place-items-center text-lg font-bold">
          <div className="text-align-center w-10 ml-3">1</div>
          <div className="text-align-center w-20 ml-3">CST001</div>
          <div className="text-align-center w-48 ml-3">Ryan Kohans</div>
          <div className="text-align-center w-72 ml-3">ryankohans@gmail.com</div>
          <div className="text-align-center w-96 ml-3">Jl Arief Rachman Hakim 57</div>
          <div className="text-align-center w-16 ml-3">...</div> 
        </div>
        <hr className="border border-oranye w-11/12 mx-auto"></hr>
        <div className="listdata flex text-white h-16 place-items-center text-lg font-bold">
          <div className="text-align-center w-10 ml-3">2</div>
          <div className="text-align-center w-20 ml-3">CST002</div>
          <div className="text-align-center w-48 ml-3">Paddy Hermanito</div>
          <div className="text-align-center w-72 ml-3">paddyhermanito@gmail.com</div>
          <div className="text-align-center w-96 ml-3">Jl Rungkut Lor 90</div>
          <div className="text-align-center w-16 ml-3" >...</div>        
        </div>
        <hr className="border border-oranye w-11/12 mx-auto"></hr>

        <div className="listdata flex text-white h-16 place-items-center text-lg font-bold">
          <div className="text-align-center w-10 ml-3">3</div>
          <div className="text-align-center w-20 ml-3">CST003</div>
          <div className="text-align-center w-48 ml-3">Michael Lukas Tjanda</div>
          <div className="text-align-center w-72 ml-3">lukas@gmail.com</div>
          <div className="text-align-center w-96 ml-3">Jl Glorindo 69</div>
          <div className="text-align-center w-16 ml-3" >...</div>
        </div>
        <hr className="border border-oranye w-11/12 mx-auto"></hr>
        <div className="listdata flex text-white h-16 place-items-center text-lg font-bold">
          <div className="text-align-center w-10 ml-3">4</div>
          <div className="text-align-center w-20 ml-3">CST004</div>
          <div className="text-align-center w-48 ml-3">Gunawan</div>
          <div className="text-align-center w-72 ml-3">gun87@gmail.com</div>
          <div className="text-align-center w-96 ml-3">Jl Tunjungan 71</div>
          <div className="text-align-center w-16 ml-3" >...</div>
        </div>
        <hr className="border border-oranye w-11/12 mx-auto"></hr>
      </div> */}

    </>
  )
}

export default MasterUser