import React from 'react'
import { useState, useEffect } from 'react'
import client from '../../services/client'
import { useNavigate } from 'react-router-dom'

// Material UI
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

  const [emailUser, setEmailUser]=useState('')
  const [nameUser, setNameUser] = useState('')
  const [addressUser, setAddressUser] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')


  useEffect(() => {
    client.get("/users", {
      headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") }
    }).then((res) => {
      setListUsers(res.data)
    }).catch((err) => {
      console.log(err.response.data.message);
    })
  }, [])

  const deleteUser = (email) => {
    client.delete(`/users/delete/${email}`, {
      headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") },
    }).then((res) => {
      alert(res.data.message);
      navigate(0)
    }).catch((err) => {
      console.log(err);
    })
  }

  const getUser = (email) => {
    console.log(email);
    client.get(`/users/get/${email}`, {
      headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") },
    }).then((res) => {
      console.log("res", res);
      setEmailUser(res.data.email)
      setNameUser(res.data.display_name)
      setAddressUser(res.data.address)
      setPhoneNumber(res.data.phone_number)

      document.getElementById('my_modal_2').showModal()
      // alert(res.data.message);
      // navigate(0)
    }).catch((err) => {
      console.log(err);
    })
  }

  const updateUser=(email) => {
    let isi={
      display_name:nameUser,
      address:addressUser,
      phone_number:phoneNumber
    }
    client.put(`/users/update/${emailUser}`, isi, {
      headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") }
    }).then((res) => {
      // setListUsers(res.data)
      alert(res.data.message)
      navigate(0)
    }).catch((err) => {
      console.log(err);
    })
  }

  return (<div className='w-full h-[calc(100vh-6rem)]'>
    <div className="judul text-white text-5xl font-bold ms-10 my-7">
      <h1>Customers</h1>
    </div>

    <div className="flex justify-center">
      <div className='w-full mx-10'>
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
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.display_name}</StyledTableCell>
                  <StyledTableCell align="center">{row.email}</StyledTableCell>
                  <StyledTableCell align="center">{row.address}</StyledTableCell>
                  <StyledTableCell align="center">{row.phone_number}</StyledTableCell>
                  <StyledTableCell align="center" width="13%"><span className={row.email_verified ? "text-green-500" : "text-red-500"}>{row.email_verified ? "V" : "X"}</span></StyledTableCell>
                  <StyledTableCell align="center" width={"20%"}>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className='w-20 px-4 py-2 rounded-xl bg-neutral-950 text-oranye me-5 hover:scale-110 hover:font-bold transition duration-300' onClick={() => getUser(row.email)}>Edit</button>
                    <dialog id="my_modal_2" className="modal">
                      <div className="modal-box bg-oranye text-abu-super-gelap">
                        <h3 className="font-bold text-lg">Edit</h3>
                        {/* <p className="py-4">Press ESC key or click outside to close</p> */}
                        <div className='flex flex-col space-y-2'>
                          <span className='text-start'>Name</span>
                          <input type="text" placeholder='name' className='px-4 py-2 border border-abu-abu rounded-lg' value={nameUser} onChange={(e) => setNameUser(e.target.value)} />
                          <span className='text-start'>Address</span>
                          <input type="text" placeholder='address' className='px-4 py-2 border border-abu-abu rounded-lg' value={addressUser} onChange={(e) => setAddressUser(e.target.value)} />
                          <span className='text-start'>Phone Number</span>
                          <input type="number" placeholder='phone number' className='px-4 py-2 border border-abu-abu rounded-lg' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                          <form method='dialog' className='flex'>
                            <button className='bg-abu-gelap text-putih px-5 py-2 ml-auto rounded-lg' onClick={()=>updateUser(row.email)}>Ok</button>
                          </form>
                        </div>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                    <button className='w-20 px-4 py-2 rounded-xl bg-neutral-950 text-oranye hover:scale-110 hover:font-bold transition duration-300' onClick={() => { deleteUser(row.email) }}>Delete</button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  </div>)
}

export default MasterUser