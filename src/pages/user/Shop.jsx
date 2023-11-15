import Footer from "../../components/Footer"
import Header from "../../components/Header"
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';
function Shop(params) {
    return (
        <>
            <Header />
            <div className="p-20 grid grid-cols-3">
                <span className="font-bold text-5xl">All Product</span>
                <span className="col-start-3 ml-auto text-abu-abu font-bold text-2xl">Sort By : Price (Up)</span>
                <div className="w-1/2 h-96 bg-abu-gelap rounded-xl grid justify-center">
                    <span className="text-putih text-3xl font-bold text-center">Filter</span>
                    <span className="text-putih text-lg font-bold">Harga (Rp)</span>
                    <input type="text" placeholder="Harga Minimum" className="border rounded-lg w-3/4 h-1/2" />
                    <input type="text" placeholder="Harga Maximum" className="border rounded-lg mt-5 w-3/4 h-1/2" />
                    <span className="text-putih">Rating</span>
                    <div className="flex justify-between place-items-center">
                        <input type="checkbox" className="w-5 h-5"/>
                        <Stack spacing={1} className="bg-white h-max rounded-xl p-1">
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        </Stack>
                    </div>
                </div>
                <div className="col-span-2 grid grid-cols-4">
                    {/* BUAT KOMPONEN */}
                    <div className='bg-abu-gelap w-48 h-60 rounded-xl flex flex-col border-2 '>
                        <div className='h-2/3 flex flex-col-reverse rounded-xl bg-white bg-[url("/img/graphic_card.png")] bg-center'>
                            <div className='grid grid-cols-3 gap-1'>
                                <div className='col-start-3 font-black'>5<StarIcon sx={{ color: yellow[500] }} /></div>
                            </div>
                        </div>
                        <div className='h-1/3'>
                            <div className='grid grid-rows-4'>
                                <div className='row-span-2 text-white font-bold text-xl'>VGA ASUS ROG</div>
                                <div className='text-oranye font-bold text-lg'>Rp 9.000.000</div>
                            </div>
                        </div>
                    </div>
                    {/* INI BERULANG */}
                    <div className='bg-abu-gelap w-48 h-60 rounded-xl flex flex-col border-2 '>
                        <div className='h-2/3 flex flex-col-reverse rounded-xl bg-white bg-[url("/img/graphic_card.png")] bg-center'>
                            <div className='grid grid-cols-3 gap-1'>
                                <div className='col-start-3 font-black'>5<StarIcon sx={{ color: yellow[500] }} /></div>
                            </div>
                        </div>
                        <div className='h-1/3'>
                            <div className='grid grid-rows-4'>
                                <div className='row-span-2 text-white font-bold text-xl'>VGA ASUS ROG</div>
                                <div className='text-oranye font-bold text-lg'>Rp 9.000.000</div>
                            </div>
                        </div>
                    </div>
                    {/* INI BERULANG */}
                    <div className='bg-abu-gelap w-48 h-60 rounded-xl flex flex-col border-2 '>
                        <div className='h-2/3 flex flex-col-reverse rounded-xl bg-white bg-[url("/img/graphic_card.png")] bg-center'>
                            <div className='grid grid-cols-3 gap-1'>
                                <div className='col-start-3 font-black'>5<StarIcon sx={{ color: yellow[500] }} /></div>
                            </div>
                        </div>
                        <div className='h-1/3'>
                            <div className='grid grid-rows-4'>
                                <div className='row-span-2 text-white font-bold text-xl'>VGA ASUS ROG</div>
                                <div className='text-oranye font-bold text-lg'>Rp 9.000.000</div>
                            </div>
                        </div>
                    </div>
                    {/* INI BERULANG */}
                    <div className='bg-abu-gelap w-48 h-60 rounded-xl flex flex-col border-2 '>
                        <div className='h-2/3 flex flex-col-reverse rounded-xl bg-white bg-[url("/img/graphic_card.png")] bg-center'>
                            <div className='grid grid-cols-3 gap-1'>
                                <div className='col-start-3 font-black'>5<StarIcon sx={{ color: yellow[500] }} /></div>
                            </div>
                        </div>
                        <div className='h-1/3'>
                            <div className='grid grid-rows-4'>
                                <div className='row-span-2 text-white font-bold text-xl'>VGA ASUS ROG</div>
                                <div className='text-oranye font-bold text-lg'>Rp 9.000.000</div>
                            </div>
                        </div>
                    </div>
                    {/* INI BERULANG */}
                    <div className='bg-abu-gelap w-48 h-60 rounded-xl flex flex-col border-2 '>
                        <div className='h-2/3 flex flex-col-reverse rounded-xl bg-white bg-[url("/img/graphic_card.png")] bg-center'>
                            <div className='grid grid-cols-3 gap-1'>
                                <div className='col-start-3 font-black'>5<StarIcon sx={{ color: yellow[500] }} /></div>
                            </div>
                        </div>
                        <div className='h-1/3'>
                            <div className='grid grid-rows-4'>
                                <div className='row-span-2 text-white font-bold text-xl'>VGA ASUS ROG</div>
                                <div className='text-oranye font-bold text-lg'>Rp 9.000.000</div>
                            </div>
                        </div>
                    </div>
                    {/* INI BERULANG */}
                    <div className='bg-abu-gelap w-48 h-60 rounded-xl flex flex-col border-2 '>
                        <div className='h-2/3 flex flex-col-reverse rounded-xl bg-white bg-[url("/img/graphic_card.png")] bg-center'>
                            <div className='grid grid-cols-3 gap-1'>
                                <div className='col-start-3 font-black'>5<StarIcon sx={{ color: yellow[500] }} /></div>
                            </div>
                        </div>
                        <div className='h-1/3'>
                            <div className='grid grid-rows-4'>
                                <div className='row-span-2 text-white font-bold text-xl'>VGA ASUS ROG</div>
                                <div className='text-oranye font-bold text-lg'>Rp 9.000.000</div>
                            </div>
                        </div>
                    </div>
                    {/* INI BERULANG */}
                    <div className='bg-abu-gelap w-48 h-60 rounded-xl flex flex-col border-2 '>
                        <div className='h-2/3 flex flex-col-reverse rounded-xl bg-white bg-[url("/img/graphic_card.png")] bg-center'>
                            <div className='grid grid-cols-3 gap-1'>
                                <div className='col-start-3 font-black'>5<StarIcon sx={{ color: yellow[500] }} /></div>
                            </div>
                        </div>
                        <div className='h-1/3'>
                            <div className='grid grid-rows-4'>
                                <div className='row-span-2 text-white font-bold text-xl'>VGA ASUS ROG</div>
                                <div className='text-oranye font-bold text-lg'>Rp 9.000.000</div>
                            </div>
                        </div>
                    </div>
                    {/* INI BERULANG */}
                    <div className='bg-abu-gelap w-48 h-60 rounded-xl flex flex-col border-2 '>
                        <div className='h-2/3 flex flex-col-reverse rounded-xl bg-white bg-[url("/img/graphic_card.png")] bg-center'>
                            <div className='grid grid-cols-3 gap-1'>
                                <div className='col-start-3 font-black'>5<StarIcon sx={{ color: yellow[500] }} /></div>
                            </div>
                        </div>
                        <div className='h-1/3'>
                            <div className='grid grid-rows-4'>
                                <div className='row-span-2 text-white font-bold text-xl'>VGA ASUS ROG</div>
                                <div className='text-oranye font-bold text-lg'>Rp 9.000.000</div>
                            </div>
                        </div>
                    </div>
                    {/* INI BERULANG */}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Shop