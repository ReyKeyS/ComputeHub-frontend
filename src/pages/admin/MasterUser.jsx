import React from 'react'
import { useState, useEffect } from 'react'
import client from '../../services/client'
import { useNavigate } from 'react-router-dom'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Customized Table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#292929",
    color: "#ffa31a",
    fontSize: 18,
    fontWeight: "bold"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    color: "white"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#1b1b1b",
  },
  '&:nth-of-type(even)': {
    backgroundColor: "#292929",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function MasterUser() {
  const navigate = useNavigate();
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

  const deleteUser = (email) => {
    client.delete(`/users/delete/${email}`, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")},
    }).then((res) => {
      alert(res.data.message);
      navigate(0)
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <div className="judul text-white text-5xl font-bold ms-10 my-7">
        <h1>Customers</h1>
      </div>
      
      <div className="flex justify-center">
        <div className='w-5/6'>
        <TableContainer className='border-2 border-oranye rounded-2xl mb-36'>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead className='border-b-2 border-oranye'>
              <TableRow>
                <StyledTableCell align='center'>No</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Address</StyledTableCell>
                <StyledTableCell align="center">Phone Number</StyledTableCell>
                <StyledTableCell align="center">Email Verified</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listUsers?.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row" align='center'>
                    {index+1}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.display_name}</StyledTableCell>
                  <StyledTableCell align="center">{row.email}</StyledTableCell>
                  <StyledTableCell align="center">{row.address}</StyledTableCell>
                  <StyledTableCell align="center">{row.phone_number}</StyledTableCell>
                  <StyledTableCell align="center" width="13%"><span className={row.email_verified?"text-green-500":"text-red-500"}>{row.email_verified?"V":"X"}</span></StyledTableCell>
                  <StyledTableCell align="center" width={"20%"}>
                    <button className='w-20 px-4 py-2 rounded-xl bg-neutral-950 text-oranye me-5 hover:scale-110 hover:font-bold transition duration-300'>Edit</button>
                    <button className='w-20 px-4 py-2 rounded-xl bg-neutral-950 text-oranye hover:scale-110 hover:font-bold transition duration-300' onClick={()=>{deleteUser(row.email)}}>Delete</button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      </div>
    </>
  )
}

export default MasterUser