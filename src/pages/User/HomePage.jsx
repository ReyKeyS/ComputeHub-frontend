import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import client from '../../services/client'

import Header from '../../components/Header'
import Footer from '../../components/Footer';

// Material UI
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';

function HomePage() {
  const navigate = useNavigate();
  const [listItem, setListitem] = useState([])

  useEffect(() => {
    client.get("/items/promo/fetch").then((res)=>{
      setListitem(res.data)
      // console.log(listItem)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <>
      <Header />
      {/* <div className='h-[768px] flex flex-col-reverse bg-cover bg-no-repeat bg-fixed bg-[url(https://source.unsplash.com/1920x768/?tech)]'> */}
      <div className='h-[768px] grid grid-cols-2 px-20 bg-cover bg-no-repeat bg-fixed bg-[url("/img/banner_home_non_tulis.png")]'>
        {/* <div className='grid grid-rows-5 m-20'> */}
        <span className='row-start-3 text-white text-8xl font-bold'>One Stop Store for Computer Section</span>
        <span className='row-start-4 text-white font-semibold text-xl'>Browse, buy and Maintain everything your pc needs in one convenient place</span>
        {/* </div> */}
        <span className='row-start-5 col-span-2 w-1/4 h-10 mt-auto mx-auto bg-white text-center rounded-t-lg font-bold text-3xl'>
          Scroll Down
        </span>
      </div>
      <div className='font-black text-4xl mt-10 mx-20'>
        Category <WorkspacePremiumIcon fontSize='large' />
      </div>
      <div className="flex gap-4 snap-x mx-20">
        <div className='relative flex items-center justify-center overflow-hidden shadow-xl w-72 h-96 rounded-2xl'>
          <div className='hover:scale-125 bg-[url("/img/Motherboard_non_tulis.png")] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover grayscale hover:grayscale-0'></div>
          <a className='absolute text-xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-80'>MotherBoard</a>
        </div>
        <div className='relative flex items-center justify-center overflow-hidden shadow-xl w-72 h-96 rounded-2xl'>
          <div className='hover:scale-125 bg-[url("/img/processor.png")] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover grayscale hover:grayscale-0'></div>
          <a className='absolute text-xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-80'>Processor</a>
        </div>
        <div className='relative flex items-center justify-center overflow-hidden shadow-xl w-72 h-96 rounded-2xl'>
          <div className='hover:scale-125 bg-[url("/img/graphic_card.png")] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover grayscale hover:grayscale-0'></div>
          <a className='absolute text-xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-80'>Graphic Card</a>
        </div>
        <div className='relative flex items-center justify-center overflow-hidden shadow-xl w-72 h-96 rounded-2xl'>
          <div className='hover:scale-125 bg-[url("/img/ram.png")] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover grayscale hover:grayscale-0'></div>
          <a className='absolute text-xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-80'>RAM</a>
        </div>
        <div className='relative flex items-center justify-center overflow-hidden shadow-xl w-72 h-96 rounded-2xl'>
          <div className='hover:scale-125 bg-[url("/img/pccase.png")] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover grayscale hover:grayscale-0'></div>
          <a className='absolute text-xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-80'>PC Case</a>
        </div>
        <div className='relative flex items-center justify-center overflow-hidden shadow-xl w-72 h-96 rounded-2xl'>
          <div className='hover:scale-125 bg-[url("/img/psu.png")] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover grayscale hover:grayscale-0'></div>
          <a className='absolute text-xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-80'>PSU</a>
        </div>

        {/* <div className='bg-black w-72 h-96 text-white text-xl font-bold grid place-items-center rounded-2xl bg-[url("/img/Motherboard_non_tulis.png")] grayscale hover:grayscale-0 hover:duration-300 group'>
          <a className='group-hover:scale-110 group-hover:duration-300'>MotherBoard</a>
        </div>
        <div className='bg-black w-72 h-96 text-white text-xl font-bold grid place-items-center rounded-2xl bg-[url("/img/processor.png")] grayscale hover:grayscale-0 hover:duration-300 group'>
          <a className='group-hover:scale-110 group-hover:duration-300'>Processor</a>
        </div>
        <div className='bg-black w-72 h-96 text-white text-xl font-bold grid place-items-center rounded-2xl bg-[url("/img/graphic_card.png")] grayscale hover:grayscale-0 hover:duration-300 group'>
          <a className='group-hover:scale-110 group-hover:duration-300'>Graphic Card</a>
        </div>
        <div className='bg-black w-72 h-96 text-white text-xl font-bold grid place-items-center rounded-2xl bg-[url("/img/ram.png")] grayscale hover:grayscale-0 hover:duration-300 group'>
          <a className='group-hover:scale-110 group-hover:duration-300'>RAM</a>
        </div>
        <div className='bg-black w-72 h-96 text-white text-xl font-bold grid place-items-center rounded-2xl bg-[url("/img/pccase.png")] grayscale hover:grayscale-0 hover:duration-300 group'>
          <a className='group-hover:scale-110 group-hover:duration-300'>PC Case</a>
        </div>
        <div className='bg-black w-72 h-96 text-white text-xl font-bold grid place-items-center rounded-2xl bg-[url("/img/psu.png")] grayscale hover:grayscale-0 hover:duration-300 group'>
          <a className='group-hover:scale-110 group-hover:duration-300'>PSU</a>
        </div> */}
      </div>
      <div className='font-black text-4xl mt-10 mx-20'>
        Best Deals for you
      </div>
      <div className='flex mx-20'>
        {/* BUAT KOMPONEN */}
        {listItem?.map((item, index) => (
        <div className="" key={index}>
          <div className='bg-abu-gelap w-60 h-80 rounded-xl flex flex-col border-2 '>
            <div className='h-2/3 flex flex-col-reverse bg-white bg-[url("/img/graphic_card.png")]'>
              <div className='grid grid-cols-3 gap-1'>
                <div className='bg-oranye font-bold m-1 text-abu-super-gelap text-center rounded-lg'>PROMO!</div>
                <div className='col-start-3 font-white'>5<StarIcon sx={{ color: yellow[500] }} /></div>
              </div>
            </div>
            <div className='h-1/3 grid grid-cols-3'>
              <div className='col-span-2 grid grid-rows-4'>
                <div className='row-span-2 text-white font-bold text-xl'>{item.name}</div>
                <div className='text-oranye font-bold text-lg'>Rp 9.000.000</div>
                <div className='text-abu-abu line-through text-sm'>Rp 12.000.000</div>
              </div>
              <div className='grid place-content-center'>
                <div className='bg-oranye w-10 h-10 grid place-content-center rounded-lg'>
                  <AddIcon color='text-oranye' />

                </div>
              </div>
            </div>
          </div>

        </div>
        ))}

      </div>
      <Footer/>
      {/* <NavLink digunakan ketika ingin styling Navbar (active) /> */}
      {/* <NavLink
            className={({ isActive, isPending }) =>
                (isActive?'text-white':'text-black')} 
            to="/"
        >
            Home
        </NavLink> */}
    </>
  )
}

export default HomePage