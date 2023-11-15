import Footer from "../../components/Footer"
import Header from "../../components/Header"
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';
function LihatBarang() {
    return (
        <>
            <Header />
            <div className="w-3/4 mx-auto">
                <span className="text-4xl font-bold">
                    Detail
                </span>
                <div className="grid grid-cols-2 bg-abu-super-gelap rounded-lg p-10 justify-items-center">
                    <img src="/img/graphic_card.png" alt="" />
                    <div className="flex flex-col text-putih">
                        <span className="text-6xl font-extrabold">ROG RTX 3090</span>
                        <span className="text-5xl font-extrabold text-oranye">Rp. 9.000.000</span>
                        <span className="text-2xl font-extrabold">Category: Graphic Card</span>
                        <span className="text-2xl font-extrabold">Stok : 5</span>
                        <span>RTX 3090 OC 24GB GDDR6X</span>
                        <span>Graphic Engine NVIDIA&reg; GeForce RTX&trade; 3090</span>
                        <span>Bus Standard</span>
                        <span>PCI Express 4.0</span>
                        <span>OpenGL</span>
                        <span>OpenGL&reg; 4.6</span>
                        <span>Video Memory</span>
                        <span>GDDR6X 24GB</span>
                        <span>Engine Clock</span>
                        <span>OC Mode-1890 MHz (Boost Clock)</span>
                        <span>Gaming Mode-1860 MHz (Boost Clock)</span>
                        <span>CUDA Core</span>
                        <div className="flex gap-3 justify-center">
                            <span className="text-oranye">Amount:</span>
                            <input type="text" className="rounded-lg" />
                            <button className="bg-oranye text-abu-super-gelap px-3 py-2 font-bold rounded-lg">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <span className="text-4xl font-bold">
                    Other items
                </span>
                <div className="flex snap-x my-8 gap-8">
                    {/* 1 */}
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
                    {/* 2 */}
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
                </div>
            </div>
            <Footer />
        </>
    )
}
export default LihatBarang