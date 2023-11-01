import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../component/Header'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';

function HomePage() {
  return (
    <>
      <Header />
      <div className='w-screen h-[768px] flex flex-col-reverse bg-cover bg-no-repeat bg-fixed bg-[url(https://source.unsplash.com/1920x768/?tech)]'>
        <div className='w-1/4 h-10 mx-auto bg-white text-center rounded-t-lg font-bold text-3xl'>
          Scroll Down
        </div>
      </div>
      <div className='font-black text-4xl mt-10'>
        Category <WorkspacePremiumIcon fontSize='large' />
      </div>
      <div className="flex gap-4">
        <div className='bg-black w-44 h-60 text-white text-xl font-bold grid place-items-center rounded-2xl bg-[url(https://source.unsplash.com/176x240/?tech)]'>
          <a>MotherBoard</a>
        </div>
        <div className='bg-black w-44 h-60 text-white text-xl font-bold grid place-items-center rounded-2xl bg-[url(https://source.unsplash.com/176x240/?tech)]'>
          <a>Processor</a>
        </div>
        <div className='bg-black w-44 h-60 text-white text-xl font-bold grid place-items-center rounded-2xl bg-[url(https://source.unsplash.com/176x240/?tech)]'>
          <a>Graphic Card</a>
        </div>
        <div className='bg-black w-44 h-60 text-white text-xl font-bold grid place-items-center rounded-2xl bg-[url(https://source.unsplash.com/176x240/?tech)]'>
          <a>RAM</a>
        </div>
        <div className='bg-black w-44 h-60 text-white text-xl font-bold grid place-items-center rounded-2xl bg-[url(https://source.unsplash.com/176x240/?tech)]'>
          <a>PC Case</a>
        </div>
        <div className='bg-black w-44 h-60 text-white text-xl font-bold grid place-items-center rounded-2xl bg-[url(https://source.unsplash.com/176x240/?tech)]'>
          <a>PSU</a>
        </div>
      </div>
      <div className='font-black text-4xl mt-10'>
        Best Deals for you
      </div>
      <div className='flex'>
        <div className='bg-abu-gelap w-60 h-80 rounded-xl flex flex-col border-2 '>
          <div className='h-2/3 flex flex-col-reverse bg-white bg-[url(https://source.unsplash.com/200x400/?tech)]'>
            <div className='grid grid-cols-3 gap-1'>
              <div className='bg-oranye font-bold m-1 text-abu-super-gelap text-center rounded-lg'>PROMO!</div>
              <div className='col-start-3 font-black'>5<StarIcon sx={{color: yellow[500]}}/></div>
            </div>
          </div>
          <div className='h-1/3 grid grid-cols-3'>
            <div className='col-span-2 grid grid-rows-4'>
              <div className='row-span-2 text-white font-bold text-xl'>VGA ASUS ROG</div>
              <div className='text-oranye font-bold text-lg'>Rp 9.000.000</div>
              <div className='text-abu-abu line-through text-sm'>Rp 12.000.000</div>
            </div>
            <div className='grid place-content-center'>
              <div className='bg-oranye w-10 h-10 grid place-content-center rounded-lg'>
                <AddIcon color='text-oranye'/>

              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='bg-abu-super-gelap text-white flex flex-col p-5 gap-8'>
        <div className='text-6xl text-center'>Compute<a className='font-bold bg-oranye text-abu-super-gelap rounded-lg'>HUB</a></div>
        <div className='text-center text-3xl'>Contact us!</div>
        <div className='text-3xl text-center'>
          <EmailIcon sx={{fontSize:50}}/>
          <InstagramIcon sx={{fontSize:50}}/>
          <WhatsAppIcon sx={{fontSize:50}}/>
        </div>
      </footer>
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