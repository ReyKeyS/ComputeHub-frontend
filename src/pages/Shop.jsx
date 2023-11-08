import Footer from "../components/Footer"
import Header from "../components/Header"
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
function Shop(params) {
    return (
        <>
            <Header />
            <div className="p-20 grid grid-cols-3">
                <span className="font-bold text-5xl">All Product</span>
                <span className="col-start-3 ml-auto text-abu-abu font-bold text-2xl">Sort By : Price (Up)</span>
                <div className="w-1/2 h-96 bg-abu-super-gelap rounded-xl grid justify-center">
                    <span className="text-putih text-3xl font-bold text-center">Filter</span>
                    <span className="text-putih text-lg font-bold">Harga (Rp)</span>
                    <input type="text" placeholder="Harga Minimum" className="border rounded-lg w-3/4 h-1/2"/>
                    <input type="text" placeholder="Harga Maximum" className="border rounded-lg mt-5 w-3/4 h-1/2"/>
                    <span>Rating</span>
                    <Stack spacing={1}>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5}/>
                    </Stack>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Shop