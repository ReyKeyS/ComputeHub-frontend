import React from 'react'
import { useState, useEffect, forwardRef } from 'react'
import Select from 'react-select'
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
import { ThemeProvider, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import dashboardTheme from '../../../dashboardTheme';


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

const styleBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    bgcolor: 'primary.oranye',
    color: "primary.abu_super_gelap",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const optionBox = [
    { value: "Motherboard", label: "Motherboard" },
    { value: "Processor", label: "Processor" },
    { value: "VGA", label: "VGA" },
    { value: "RAM", label: "RAM" },
    { value: "PSU", label: "PSU" },
    { value: "HDD", label: "HDD" },
    { value: "SSD", label: "SSD" },
    { value: "Casing", label: "Casing" },
    { value: "Cooling", label: "Cooling" },
    { value: "Monitor", label: "Monitor" },
    { value: "Keyboard", label: "Keyboard" },
    { value: "Mouse", label: "Mouse" },
]

function MasterItem() {
    const navigate = useNavigate()
    const [listItems, setListItems] = useState([])
    const [newPicture, setNewPicture] = useState()
    const [selectedCate, setSelectedCate] = useState()
    const [nameitems, setNameitems] = useState()
    const [priceitems, setPriceitems] = useState()
    const [stockitems, setStockitems] = useState()
    const [branditems, setBranditems] = useState()
    const [categoryitems, setCategoryitems] = useState()

    const [open, setOpen] = useState(false)

    useEffect(() => {
        client.get("/items").then((res) => {
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
        brand: Joi.string().required().messages({
            "string.empty": "Brand is required",
        })
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: joiResolver(schema) })

    const addItem = (data) => {
        if (newPicture) {
            const formData = new FormData()
            formData.append("name", data.name)
            formData.append("description", data.description)
            formData.append("price", data.price)
            formData.append("stock", data.stock)
            formData.append("category", selectedCate)
            formData.append("brand", data.brand)
            formData.append("picture", newPicture[0])
            const addingItem = client.post('/items/add', formData, {
                headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") },
                body: "form/data"
            }).then((res) => {
                alert(res.data.message);
                navigate(0)
            }).catch((err) => {
                console.log(err);
            })
        } else {
            alert("Please input the item's picture!")
        }
    }

    const deleteItem = (id) => {
        client.delete(`/items/delete/${id}`, {
            headers: { "Authorization": "Bearer " + localStorage.getItem("user_token") },
        }).then((res) => {
            alert(res.data.message);
            navigate(0)
        }).catch((err) => {
            console.log(err);
        });
    }
    const updateItem = (data) => {
        console.log(data);
    }
    const getItem = (id) => {
        client.get(`items/${id}`).then((res) => {
            console.log(res.data);
            setNameitems(res.data.name)
            setPriceitems(res.data.price)
            setStockitems(res.data.stock)
            setBranditems(res.data.brand)
            setCategoryitems(res.data.category)
            // alert(res.data.message)
            // setOpen(true)
            document.getElementById('my_modal_2').showModal()
            // navigate(0)
        }).catch((err) => {
            console.log(err);
        })
    }

    return (<div className='w-full h-[calc(100vh-6rem)]'>
        <div className="judul text-white text-5xl font-bold ms-10 my-7">
            <h1>Master Item</h1>
        </div>
        <form onSubmit={handleSubmit(addItem)}>
            <div className="grid grid-cols-4">
                <div className="text-white text-2xl place-items-center mr-12 text-right">Name :</div>
                <div className="col-span-3 text-white">
                    <input type="text" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-1 px-3 py-1' placeholder={errors.name ? errors.name.message : ""} {...register('name')} />
                </div>

                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">Descriptions :</div>
                <div className="col-span-3 text-white ">
                    <textarea className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-3 px-3 py-1' cols="30" rows="5" placeholder={errors.description ? errors.description.message : ""} {...register('description')}></textarea>
                </div>

                <div className="text-white text-2xl place-items-center mt-4 mr-12 text-right">Price :</div>
                <div className="col-span-3 text-white">
                    <input type="number" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-4 px-3 py-1' placeholder={errors.price ? errors.price.message : ""} {...register('price')} />
                </div>

                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">Stock :</div>
                <div className="col-span-3 text-white">
                    <input type="number" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-3 px-3 py-1' placeholder={errors.stock ? errors.stock.message : ""} {...register('stock')} />
                </div>

                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">Brand :</div>
                <div className="col-span-3 text-white">
                    <input type="text" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-3 px-3 py-1' placeholder={errors.brand ? errors.brand.message : ""} {...register('brand')} />
                </div>

                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">Category :</div>
                <div className="col-span-3 text-white">
                    <Select
                        className='basic-single mt-3'
                        classNamePrefix='select'
                        isDisabled={false}
                        isLoading={false}
                        isClearable={false}
                        isRtl={false}
                        isSearchable={true}
                        name="Category"
                        options={optionBox}
                        styles={customStyles}
                        onChange={(e) => { setSelectedCate(e.value) }}
                    />

                    {/* Ini select HTML biasa */}
                    {/* <select className='w-[61rem] text-lg mt-3 px-3 py-2 bg-abu-gelap border border-oranye rounded option:py-2' placeholder={errors.category?errors.category.message:""} {...register('category')}>
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
                    </select> */}
                </div>

                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">Image :</div>
                <div className="col-span-3 pt-3 flex">
                    <ColorButton component="label" variant="contained" startIcon={<CloudUploadIcon />} >
                        <p className='font-bold'>Choose file</p>
                        <VisuallyHiddenInput type="file" onChange={(e) => { setNewPicture(e.target.files) }} />
                    </ColorButton>
                    {newPicture &&
                        <div className='mt-1 ms-4 text-white text-lg'>
                            {newPicture[0].name.substr(0, 10)}{newPicture[0].name.length > 10 && <span>...<span className='font-bold'>{newPicture[0].name.substr(newPicture[0].name.length - 4)}</span></span>}
                        </div>}
                </div>
                <br />

                <div className="col-span-4 text-right me-24">
                    <button type='submit' className='rounded-xl bg-oranye font-bold mt-5 w-48 h-10 text-xl hover:bg-hover-oranye transition duration-300'>Add Item</button>
                </div>
            </div>
        </form>
        <div className="judul text-white text-5xl font-bold ms-10 my-7">
            <h1>List Items</h1>
        </div>

        <div className="flex justify-center">
            <div className='w-full mx-10'>
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
                                    <StyledTableCell align="center" width={"12%"}>Rp {row.price.toLocaleString("id-ID")}</StyledTableCell>
                                    <StyledTableCell align="center">{row.stock}</StyledTableCell>
                                    <StyledTableCell align="center">{row.brand}</StyledTableCell>
                                    <StyledTableCell align="center">{row.category}</StyledTableCell>
                                    <StyledTableCell align="center" width={"20%"}>
                                        {/* <button className='w-20 px-4 py-2 rounded-xl bg-neutral-950 text-oranye me-5 hover:scale-110 hover:font-bold transition duration-300' onClick={()=>getItem(row._id)}>Edit</button> */}
                                        {/* <Modal
                                            open={open}
                                            onClose={() => setOpen(false)}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <ThemeProvider theme={dashboardTheme}>
                                                <Box sx={styleBox}>
                                                    <Typography id="modal-modal-title" variant="h4" component="h2">Edit</Typography>
                                                    <Typography id="modal-modal-description" sx={{ mt: 2 }} className='flex flex-col space-y-2'>
                                                        <input type="text" placeholder='name' className='border border-abu-abu rounded-lg'/>
                                                        <input type="text" placeholder='price' className='border border-abu-abu rounded-lg'/>
                                                        <input type="text" placeholder='stock' className='border border-abu-abu rounded-lg'/>
                                                        <input type="text" placeholder='brand' className='border border-abu-abu rounded-lg'/>
                                                        <input type="text" placeholder='category' className='border border-abu-abu rounded-lg'/>
                                                        <div className='flex'>
                                                            <button className='bg-abu-gelap text-putih px-5 py-2 ml-auto rounded-lg'>Ok</button>
                                                        </div>
                                                    </Typography>
                                                </Box>

                                            </ThemeProvider>
                                        </Modal> */}
                                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                                        <button className="w-20 px-4 py-2 rounded-xl bg-neutral-950 text-oranye me-5 hover:scale-110 hover:font-bold transition duration-300" onClick={() => getItem(row._id)}>open modal</button>
                                        <dialog id="my_modal_2" className="modal">
                                            <div className="modal-box bg-oranye">
                                                <h3 className="font-bold text-lg text-abu-super-gelap">Edit</h3>
                                                <div className='flex flex-col space-y-2'>
                                                    <input type="text" placeholder='name' className='border border-abu-abu rounded-lg' defaultValue={nameitems} />
                                                    <input type="text" placeholder='price' className='border border-abu-abu rounded-lg' defaultValue={priceitems} />
                                                    <input type="text" placeholder='stock' className='border border-abu-abu rounded-lg' defaultValue={stockitems} />
                                                    <input type="text" placeholder='brand' className='border border-abu-abu rounded-lg' defaultValue={branditems} />
                                                    <input type="text" placeholder='category' className='border border-abu-abu rounded-lg' defaultValue={categoryitems} />
                                                    <div className='flex'>
                                                        <button className='bg-abu-gelap text-putih px-5 py-2 ml-auto rounded-lg' >Ok</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <form method="dialog" className="modal-backdrop">
                                                <button>close</button>
                                            </form>
                                        </dialog>
                                        <button className='w-20 px-4 py-2 rounded-xl bg-neutral-950 text-oranye hover:scale-110 hover:font-bold transition duration-300' onClick={() => { deleteItem(row._id) }}>Delete</button>
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

export default MasterItem