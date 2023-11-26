import React from 'react'
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import Joi from "joi"
import { joiResolver } from "@hookform/resolvers/joi"
import { useNavigate } from 'react-router-dom';
import client from '../../services/client'

// Material UI
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Customized Button Upload
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: "#ffffff",
    backgroundColor: "#ffa31a",
    '&:hover': {
        backgroundColor: "#d17e00",
    },
}));

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

function MasterBarang() {
    const navigate = useNavigate()
    const [listItems, setListItems] = useState([])
    const [newPicture, setNewPicture] = useState()

    useEffect(() => {
        client.get("/items").then((res) => {
            console.log(res.data);
            setListItems(res.data)
        }).catch((err) => {
            console.log(err.response.data.message);
        })
    }, [])

    const schema = Joi.object({
        name: Joi.string().required().messages({
            "string.empty": "Name is required",
        }),
        description: Joi.string().required().messages({
            "string.empty": "Description is required",
        }),
        price: Joi.number().required().messages({
            "number.base": "Price must be number",
            "number.empty": "Price is required",
        }),
        stock: Joi.number().required().messages({
            "number.base": "Stock must be number",
            "number.empty": "Stock is required",
        }),
        category: Joi.string().required().messages({
            "string.empty": "Category is required",
        }),
        brand: Joi.string().required().messages({
            "string.empty": "Brand is required",
        })
    })
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({resolver: joiResolver(schema)})

    const addItem = (data) => {
        console.log(newPicture);
        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", data.price)
        formData.append("stock", data.stock)
        formData.append("category", data.category)
        formData.append("brand", data.brand)
        formData.append("picture", newPicture[0])
        const addingItem = client.post('/items/add', formData, {
            headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")},
            body: "form/data"
        }).then((res) => {
            alert(res.data.message);
            navigate(0)
        }).catch((err) => {
            console.log(err);
        })
    }

    const deleteItem = (id) => {
        client.delete(`/items/delete/${id}`, {
            headers: {"Authorization": "Bearer " + localStorage.getItem("user_token")},
        }).then((res)=>{    
            alert(res.data.message);
            navigate(0)
        }).catch((err) => {
            console.log(err);
        });
    }

    return (<>
        <div className="judul text-white text-5xl font-bold ms-10 my-7">
            <h1>Master Barang</h1>
        </div>
        <form onSubmit={handleSubmit(addItem)}>
            <div className="grid grid-cols-4">
                <div className="text-white text-2xl place-items-center mr-12 text-right">Name :</div>
                <div className="col-span-3 text-white">
                    <input type="text" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-1 px-3 py-1' placeholder={errors.name?errors.name.message:""} {...register('name')}/>
                </div>

                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">Description :</div>
                <div className="col-span-3 text-white ">
                    <textarea className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-3 px-3 py-1' cols="30" rows="5" placeholder={errors.description?errors.description.message:""} {...register('description')}></textarea>
                </div>

                <div className="text-white text-2xl place-items-center mt-4 mr-12 text-right">Price :</div>
                <div className="col-span-3 text-white">
                    <input type="number" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-4 px-3 py-1' placeholder={errors.price?errors.price.message:""} {...register('price')}/>
                </div>

                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">Stock :</div>
                <div className="col-span-3 text-white">
                    <input type="number" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-3 px-3 py-1' placeholder={errors.stock?errors.stock.message:""} {...register('stock')}/>
                </div>

                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">Brand :</div>
                <div className="col-span-3 text-white">
                    <input type="text" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-3 px-3 py-1' placeholder={errors.brand?errors.brand.message:""} {...register('brand')}/>
                </div>

                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">Category :</div>
                <div className="col-span-3 text-white">                    
                    <select className='w-[61rem] text-lg mt-3 px-3 py-2 bg-abu-gelap border border-oranye rounded option:py-2' placeholder={errors.category?errors.category.message:""} {...register('category')}>
                        <option className='py-2' value="Motherboard">Motherboard</option>
                        <option className='py-2' value="Processor">Processor</option>
                        <option className='py-2' value="VGA">VGA</option>   
                        <option className='py-2' value="RAM">RAM</option>
                        <option className='py-2' value="PSU">PSU</option>
                        <option className='py-2' value="HDD">HDD</option>
                        <option className='py-2' value="SSD">SSD</option>
                        <option className='py-2' value="Casing">Casing</option>
                        <option className='py-2' value="Cooling">Cooling</option>
                        <option className='py-2' value="Monitor">Monitor</option>
                        <option className='py-2' value="Keyboard">Keyboard</option>
                        <option className='py-2' value="Mouse">Mouse</option>
                    </select>
                    {/* <input type="text" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-4 px-3 py-1' placeholder={errors.category?errors.category.message:""} {...register('category')}/> */}
                </div>

                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">Image :</div>
                <div className="col-span-3 pt-3 flex">
                    <ColorButton component="label" variant="contained" startIcon={<CloudUploadIcon />} >
                        <p className='font-bold'>Choose file</p>
                        <VisuallyHiddenInput type="file" onChange={(e)=>{setNewPicture(e.target.files)}}/>
                    </ColorButton>
                    {newPicture && 
                        <div className='mt-1 ms-4 text-white text-lg'>
                            {newPicture[0].name.substr(0, 10)}{newPicture[0].name.length>10 && <span>...<span className='font-bold'>{newPicture[0].name.substr(newPicture[0].name.length-4)}</span></span>}
                        </div>}
                </div>
                <br /> 

                <div className="col-span-4 text-right me-24">
                    <button type='submit' className='rounded-xl bg-oranye font-bold mt-5 w-48 h-10 text-xl hover:bg-hover-oranye transition duration-300'>Add Item</button>
                </div>
            </div>
        </form>
        <div className="judul text-white text-5xl font-bold ms-10 my-7">
            <h1>List Product</h1>
        </div>

        <div className="flex justify-center">
            <div className='w-5/6'>
                <TableContainer className='border-2 border-oranye rounded-2xl mb-36'>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead className='border-b-2 border-oranye'>
                            <TableRow>
                                <StyledTableCell align='center'>No</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">Price</StyledTableCell>
                                <StyledTableCell align="center">Stock</StyledTableCell>
                                <StyledTableCell align="center">Brand</StyledTableCell>
                                <StyledTableCell align="center">Category</StyledTableCell>
                                <StyledTableCell align="center">Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listItems?.map((row, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell component="th" scope="row" align='center'>{index + 1}</StyledTableCell>
                                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                                    <StyledTableCell align="center">Rp {row.price.toLocaleString("id-ID")}</StyledTableCell>
                                    <StyledTableCell align="center">{row.stock}</StyledTableCell>
                                    <StyledTableCell align="center">{row.category}</StyledTableCell>
                                    <StyledTableCell align="center">{row.brand}</StyledTableCell>
                                    <StyledTableCell align="center" width={"20%"}>
                                        <button className='w-20 px-4 py-2 rounded-xl bg-neutral-950 text-oranye me-5 hover:scale-110 hover:font-bold transition duration-300'>Edit</button>
                                        <button className='w-20 px-4 py-2 rounded-xl bg-neutral-950 text-oranye hover:scale-110 hover:font-bold transition duration-300' onClick={()=>{deleteItem(row._id)}}>Delete</button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    </>)
}

export default MasterBarang