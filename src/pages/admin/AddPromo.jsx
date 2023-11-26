import React from 'react';
import Select from 'react-select'
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import Joi from "joi"
import { joiResolver } from "@hookform/resolvers/joi"
import { useNavigate } from 'react-router-dom';
import client from '../../services/client'

function AddPromo() {
    const navigate = useNavigate()
    const [listItems, setListItems] = useState([])
    const [options, setOptions] = useState([])

    useEffect(() => {
        client.get("/items").then((res) => {
            console.log(res.data);
            setListItems(res.data);

            // Combobox Item
            setOptions([])
            for (const i of res.data) {
                setOptions([...options, {
                    value: i._id,
                    label: i.name,
                }])
            }
        }).catch((err) => {
            console.log(err.response.data.message);
        })
    }, [])

    const schema = Joi.object({
        promo_name: Joi.string().required().messages({
            "any.required": "Promo Name is required",
        }),
        promo_price: Joi.number().required().messages({
            "any.required": "Promo Price is required",
        }),
        start_date: Joi.date().required().messages({
            "any.required": "Mulai is required",
        }),
        end_date: Joi.date().required().messages({
            "any.required": "{{label}} is required",
        }),
    })
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({resolver: joiResolver(schema)})

    return (<>
        <div className="judul text-white text-5xl font-bold ms-10 my-7">
            <h1>Add New Promo</h1>
        </div>
        <br />
        <form action="">
            <div className="grid grid-cols-4">
                <div className="text-white text-2xl place-items-center  mr-12 text-right">Item :</div>
                <div className="col-span-3 text-white">
                    {options!=null && 
                        <Select 
                            className='basic-single bg-abu-gelap'
                            classNamePrefix='select'
                            defaultValue={options[0]}
                            isDisabled={false}
                            isLoading={false}
                            isClearable={false}
                            isRtl={false}
                            isSearchable={true}
                            name="Item"
                            options={options}
                        />
                    }
                    {/* <input type="text" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-1' /> */}
                </div>

                <div className="text-white text-2xl place-items-center mt-3  mr-12 text-right">Promo Name :</div>
                <div className="col-span-3 text-white">
                    <input type="text" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-5' />
                </div>

                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">Promo Price :</div>
                <div className="col-span-3 text-white">
                    <input type="number" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-5' />
                </div>

                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">Start Date :</div>
                <div className="col-span-3 text-white">
                    <input type="date" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-5' />
                </div>

                <div className="text-white text-2xl place-items-center mt-3 mr-12 text-right">End Date :</div>
                <div className="col-span-3 text-white ">
                    <input type="date" className='bg-abu-gelap border border-oranye rounded w-11/12 place-items-center mt-5' />
                </div>

                <div className="col-span-4 text-right me-24">
                    <button type='submit' className='rounded-xl bg-oranye font-bold mt-5 w-48 h-10 text-xl hover:bg-hover-oranye transition duration-300'>Add Promo</button>
                </div>

            </div>
        </form>

        <div className="judul text-white text-5xl font-bold ms-10 my-7">
            <h1>List Items</h1>
        </div>

        <div className="tabel rounded-lg w-11/12 mt-4 mx-auto h-fit  border border-oranye bg-abu-gelap">
            <div className="header flex w-max text-oranye text-2xl">
                <div className=" w-10 ml-3">No</div>
                <div className=" w-20 ml-3">ID</div>
                <div className=" w-32 ml-3">Name</div>
                <div className=" w-48 ml-3">Discount</div>
                <div className=" w-52 ml-3">Barang</div>
                <div className=" w-80 ml-3">Duration</div>
                <div className=" w-16 ml-3">Action</div>
            </div>

            <hr className="bg-oranye"></hr>
            <div className="listdata flex  text-white h-16 place-items-center text-lg font-bold">
                <div className="text-align-center w-10 ml-3">1</div>
                <div className="text-align-center w-20 ml-3">MEGA01</div>
                <div className="text-align-center w-32 ml-3">Mega Sale</div>
                <div className="text-align-center w-48 ml-3">Rp 50.000</div>
                <div className="text-align-center w-52 ml-3">GTX 3080</div>
                <div className="text-align-center w-80 ml-3">10 Oktober 2022-10 November 2022</div>
                <div className="text-align-center w-16 ml-3">...</div>
                {/* kurang onclick */}
            </div>
            <hr className="border border-oranye w-11/12 mx-auto"></hr>

            <div className="listdata flex text-white h-16 place-items-center text-lg font-bold">
                <div className="text-align-center w-10 ml-3">2</div>
                <div className="text-align-center w-20 ml-3">HLW01</div>
                <div className="text-align-center w-32 ml-3">Halowen</div>
                <div className="text-align-center w-48 ml-3">RP 5.000</div>
                <div className="text-align-center w-52 ml-3">GTX 3090</div>
                <div className="text-align-center w-80 ml-3">15 Oktober 2022-10 Desember 2022</div>
                <div className="text-align-center w-16 ml-3">...</div>
                {/* kurang onclick */}
            </div>
            <hr className="border border-oranye w-11/12 mx-auto"></hr>


            <div className="listdata flex text-white h-16 place-items-center text-lg font-bold">
                <div className="text-align-center w-10 ml-3">3</div>
                <div className="text-align-center w-20 ml-3">DSC01</div>
                <div className="text-align-center w-32 ml-3">Dsicount3</div>
                <div className="text-align-center w-48 ml-3">RP 50.000</div>
                <div className="text-align-center w-52 ml-3">GTX 1090</div>
                <div className="text-align-center w-80 ml-3">15 January 2022-10 Desember 2022</div>
                <div className="text-align-center w-16 ml-3">...</div>
                {/* kurang onclick */}
            </div>
            <hr className="border border-oranye w-11/12 mx-auto"></hr>


        </div>
    </>)
}

export default AddPromo