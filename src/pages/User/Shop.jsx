import React from 'react';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import client from '../../services/client'
import { setSearch, setCategory } from '../../app/filterSlice'

import Footer from "../../components/Footer"
import Header from "../../components/Header"

// Material UI
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, ThemeProvider } from '@mui/material';
import dashboardTheme from '../../../dashboardTheme';
import CardBarang from '../../components/CardBarang';

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
        width: '100%',
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

const optionBox = [
    { value: "All", label: "Select Category..." },
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

function Shop(params) {
    const searchFilter = useSelector((state) => state.filter.search)
    const categoryFilter = useSelector((state) => state.filter.category)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [listItem, setListItem] = useState([])
    const [search, setSearch] = useState("")
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(999999999999999)

    useEffect(() => {
        client.get("/items", {
            params: {
                search: search,
                harga_min: minPrice,
                harga_max: maxPrice,
            }
        }
        ).then((res) => {
            setListItem(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [search, minPrice, maxPrice])

    return (
        <>
            <Header />
            <div className="py-10 px-20 grid grid-cols-3">
                <span className="font-bold text-5xl mb-8">All Product</span>
                <span className="col-start-3 ml-auto text-abu-abu font-bold text-2xl">Sort By : Price (Up)</span>
                <div className="w-1/2 h-fit bg-abu-gelap rounded-xl py-8 px-8">
                    <div className='text-center'>
                        <span className="text-putih text-4xl font-bold text-center">Filter</span>
                    </div>
                    <div className='my-3'>
                        <span className="text-putih text-xl font-bold my-2">Category</span>
                        <Select
                            className='basic-single mt-1'
                            classNamePrefix='select'
                            isDisabled={false}
                            isLoading={false}
                            isClearable={false}
                            isRtl={false}
                            isSearchable={true}
                            name="Category"
                            options={optionBox}
                            defaultInputValue={categoryFilter}
                            styles={customStyles}
                            onChange={(e) => { dispatch(setCategory(e.value)) }}
                        />
                    </div>
                    <div className='w-full'>
                        <span className="text-putih text-xl font-bold my-2">Harga (Rp)</span>
                        <input type="number" placeholder="Harga Minimum" className="border-2 border-oranye bg-abu-gelap text-white text-lg rounded-lg my-2 w-full px-3 py-1" step={1000} min={0} max={999999999999999} value={minPrice} onChange={(e) => { if (e.target.value != "") setMinPrice(e.target.value) }} />
                        <input type="number" placeholder="Harga Maximum" className="border-2 border-oranye bg-abu-gelap text-white text-lg rounded-lg mb-2 w-full px-3 py-1" step={1000} min={0} max={999999999999999} value={maxPrice} onChange={(e) => { if (e.target.value != "") setMaxPrice(e.target.value) }} />
                    </div>
                    <div>
                        <span className="text-putih">Rating</span>
                        <div className="flex justify-between place-items-center">
                            <input type="checkbox" className="w-5 h-5" />
                            <Stack spacing={1} className="bg-white h-max rounded-xl p-1">
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            </Stack>
                        </div>
                    </div>
                    <div className='flex justify-end mt-8'>
                        <div><button className='text-xl font-bold bg-oranye hover:bg-hover-oranye px-6 py-1 rounded-xl' onClick={()=>navigate(0)}>Reset</button></div>
                    </div>
                </div>
                <div className="col-span-2 grid grid-cols-4">

                    {listItem && listItem.map((item, index) => {
                        if ((categoryFilter == "All" || item.category == categoryFilter) && (searchFilter == "" || item.name.toLowerCase().includes(searchFilter)))
                            return (
                                <CardBarang key={index} item={item}/>
                            )
                    })}

                </div>
            </div>
            <Footer />
        </>
    )
}
export default Shop