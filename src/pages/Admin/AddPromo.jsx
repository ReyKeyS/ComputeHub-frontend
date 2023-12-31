import React from 'react';
import { useState, useEffect } from 'react'
import Select from 'react-select'
import { useForm } from "react-hook-form";
import Joi from "joi"
import { joiResolver } from "@hookform/resolvers/joi"
import { useNavigate } from 'react-router-dom';
import client from '../../services/client'

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
  
// Custom Style React-Select
const customStyles = {
    control: (base, { isFocused }) => ({
        ...base,
        borderColor: isFocused ? '#d17e00' : '#ffa31a',
        backgroundColor: '#292929',
    }),
    option: (base, { isFocused }) => ({
        ...base,
        backgroundColor: isFocused ? '#292929' : "#1b1b1b",
        color: 'white',
        alignItems: 'center',
        paddingLeft: '15px',
    }),
    singleValue: (base) => ({
        ...base,
        color: "white",
    }),
    container: (base) => ({
        ...base,        
        width: '92%',
    }),
    menuList: (base) => ({
        ...base, 
        backgroundColor: "#292929",
    }),
    input: (base) => ({
        ...base,
        color: "white",
    })
};

function AddPromo() {
    const navigate = useNavigate()
    const [listItems, setListItems] = useState([])
    const [optionBox, setOptionBox] = useState([])
    const [selectedItem, setSelectedItem] = useState()
    const [listDisc, setListDisc] = useState([])

    useEffect(() => {
        client.get("/items").then((res) => {
            setListItems(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    useEffect(() => {
        let discount = []
        for (const i of listItems) {
            if (i.discount)
                discount.push(i)
        }
        setListDisc(discount)
    }, [listItems])

    useEffect(() => {
        let newerOption = []
        listItems.forEach(i => {
            newerOption.push({
                value: i._id,
                label: i.name+ ' -- Rp ' + (i.price).toLocaleString("id-ID"),
            })
        });
        setOptionBox(newerOption)
    }, [listItems]);

    const schema = Joi.object({
        promo_name: Joi.string().required().messages({
            "any.required": "Promo Name is required",
        }),
        promo_price: Joi.number().required().messages({
            "any.required": "Promo Price is required",
        }),
    })
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({resolver: joiResolver(schema)})

    const addPromo = (data) => {
        client.put(`/items/promo/add/${selectedItem}`, {
            promo_name: data.promo_name,
            promo_price: data.promo_price
        },{
            headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")},
        }).then((res) => {  
            alert(res.data.message)
            navigate(0)
        }).catch((err) => {
            console.log(err);
        });
    }

    const deletePromo = (id) => {
        client.delete(`/items/promo/delete/${id}`, {
            headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")},
        }).then((res)=>{    
            alert(res.data.message);
            navigate(0)
        }).catch((err) => {
            console.log(err);
        });
    }

    return (<div className='w-full h-[calc(100vh-6rem)]'>
        <div className="judul text-white text-5xl font-bold ms-10 my-7">
            <h1>Add New Promo</h1>
        </div>
        <form onSubmit={handleSubmit(addPromo)}>
            <div className="grid grid-cols-4">
                <div className="text-white text-2xl place-items-center  mr-12 text-right">Item :</div>
                <div className="col-span-3 text-white">
                    {optionBox && 
                        <Select 
                            id='filter-promo'
                            className='basic-single'
                            classNamePrefix='select'
                            isDisabled={false}
                            isLoading={false}
                            isClearable={false}
                            isRtl={false}
                            isSearchable={true}
                            name="Item"
                            options={optionBox}
                            styles={customStyles}
                            onChange={(e)=>{setSelectedItem(e.value)}}
                        />
                    }
                </div>
                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">Promo Name :</div>
                <div className="col-span-3 text-white">
                    <input type="text" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-4 py-1 px-3' {...register("promo_name")}/>
                </div>

                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">Promo Price :</div>
                <div className="col-span-3 text-white">
                    <input type="number" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-4 py-1 px-3' {...register("promo_price")}/>
                </div>

                <div className="col-span-4 text-right me-24">
                    <button name='addpromo' id='addpromo' type='submit' className='rounded-xl bg-oranye font-bold mt-5 w-48 h-10 text-xl hover:bg-hover-oranye transition duration-300'>Add Promo</button>
                </div>
            </div>
        </form>

        <div className="judul text-white text-5xl font-bold ms-10 my-7">
            <h1>List Items</h1>
        </div>

        <div className="flex justify-center">
        <div className='w-5/6'>
          <TableContainer className='border-2 border-oranye rounded-2xl mb-36'>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead className='border-b-2 border-oranye'>
                <TableRow>
                  <StyledTableCell align='center'>No</StyledTableCell>
                  <StyledTableCell align="center">Promo Name</StyledTableCell>
                  <StyledTableCell align="center">Item Name</StyledTableCell>
                  <StyledTableCell align="center">Promo Price</StyledTableCell>
                  <StyledTableCell align="center">Real Price</StyledTableCell>
                  <StyledTableCell align="center">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listDisc?.map((row, index) => (
                  <StyledTableRow key={index} id={`${row.discount.promo_name}`}>
                    <StyledTableCell component="th" scope="row" align='center'>
                      {index+1}
                    </StyledTableCell>
                    <StyledTableCell id='promo-name' align="center">{row.discount.promo_name}</StyledTableCell>
                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                    <StyledTableCell align="center"><span className='text-green-400'>Rp {(row.discount.promo_price).toLocaleString("id-ID")}</span></StyledTableCell>
                    <StyledTableCell align="center">Rp {(row.price).toLocaleString("id-ID")}</StyledTableCell>
                    <StyledTableCell align="center" width={"20%"}>
                      <button id='promo-delete' className='w-20 px-4 py-2 rounded-xl bg-neutral-950 text-oranye hover:scale-110 hover:font-bold transition duration-300' onClick={()=>{deletePromo(row._id)}}>Delete</button>
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

export default AddPromo