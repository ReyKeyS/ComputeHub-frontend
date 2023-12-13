import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import client from '../../services/client'
import { setSearch, setCategory } from '../../app/filterSlice'

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
import CardBarang from '../../components/CardBarang'

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [listItem, setListitem] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let timeout;
    client.get("/items/promo/fetch").then((res)=>{
      setListitem(res.data)
      timeout = setTimeout(() => {
        setLoading(false) 
      }, 250)
    }).catch((err) => {
      console.log(err);
    })

    return () => {
      clearTimeout(timeout)
    }
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
      <div className='font-black text-4xl mt-10 mx-20 mb-8'>
        Category <WorkspacePremiumIcon fontSize='large' />
      </div>
      <div className="w-full overflow-x-scroll flex gap-10 snap-x px-20 no-scrollbar">
        <div className='snap-center'>
          <div className='relative group flex items-center justify-center overflow-hidden shadow-xl w-72 h-96 rounded-2xl hover:cursor-pointer' onClick={()=>{dispatch(setCategory("Motherboard")); navigate("/shop")}} >
            <div className='group-hover:scale-125 bg-[url("/img/Motherboard_non_tulis.png")] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover grayscale group-hover:grayscale-0'></div>
            <a className='absolute text-xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-80 group-hover:opacity-100'>Motherboard</a>
          </div>
        </div>
        <div className='snap-center'>
          <div className='relative group flex items-center justify-center overflow-hidden shadow-xl w-72 h-96 rounded-2xl hover:cursor-pointer' onClick={()=>{dispatch(setCategory("Processor")); navigate("/shop")}} >
            <div className='group-hover:scale-125 bg-[url("/img/processor.png")] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover grayscale group-hover:grayscale-0'></div>
            <a className='absolute text-xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-80 group-hover:opacity-100'>Processor</a>
          </div>
        </div>
        <div className='snap-center'>
          <div className='relative group flex items-center justify-center overflow-hidden shadow-xl w-72 h-96 rounded-2xl hover:cursor-pointer' onClick={()=>{dispatch(setCategory("VGA")); navigate("/shop")}} >
            <div className='group-hover:scale-125 bg-[url("/img/graphic_card.png")] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover grayscale group-hover:grayscale-0'></div>
            <a className='absolute text-xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-80 group-hover:opacity-100'>Graphic Card</a>
          </div>
        </div>
        <div className='snap-center'>
          <div className='relative group flex items-center justify-center overflow-hidden shadow-xl w-72 h-96 rounded-2xl hover:cursor-pointer' onClick={()=>{dispatch(setCategory("RAM")); navigate("/shop")}} >
            <div className='group-hover:scale-125 bg-[url("/img/ram.png")] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover grayscale group-hover:grayscale-0'></div>
            <a className='absolute text-xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-80 group-hover:opacity-100'>RAM</a>
          </div>
        </div>
        <div className='snap-center'>
          <div className='relative group flex items-center justify-center overflow-hidden shadow-xl w-72 h-96 rounded-2xl hover:cursor-pointer' onClick={()=>{dispatch(setCategory("PSU")); navigate("/shop")}} >
            <div className='group-hover:scale-125 bg-[url("/img/psu.png")] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover grayscale group-hover:grayscale-0'></div>
            <a className='absolute text-xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-80 group-hover:opacity-100'>Power Supply</a>
          </div>
        </div>
        <div className='snap-center'>
          <div className='relative group flex items-center justify-center overflow-hidden shadow-xl w-72 h-96 rounded-2xl hover:cursor-pointer' onClick={()=>{dispatch(setCategory("Casing")); navigate("/shop")}} >
            <div className='group-hover:scale-125 bg-[url("/img/pccase.png")] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover grayscale group-hover:grayscale-0'></div>
            <a className='absolute text-xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-80 group-hover:opacity-100'>PC Case</a>
          </div>
        </div>
        <div className='snap-center'>
          <div className='relative group flex items-center justify-center overflow-hidden shadow-xl w-72 h-96 rounded-2xl hover:cursor-pointer' onClick={()=>{dispatch(setCategory("HDD")); navigate("/shop")}} >
            <div className='group-hover:scale-125 bg-[url("/img/hdd.png.jpg")] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover grayscale group-hover:grayscale-0'></div>
            <a className='absolute text-xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-80 group-hover:opacity-100'>HDD</a>
          </div>
        </div>
        <div className='snap-center'>
          <div className='relative group flex items-center justify-center overflow-hidden shadow-xl w-72 h-96 rounded-2xl hover:cursor-pointer' onClick={()=>{dispatch(setCategory("SSD")); navigate("/shop")}} >
            <div className='group-hover:scale-125 bg-[url("/img/ssd.png.jpg")] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover grayscale group-hover:grayscale-0'></div>
            <a className='absolute text-xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-80 group-hover:opacity-100'>SSD</a>
          </div>
        </div>
        <div className='snap-center'>
          <div className='relative group flex items-center justify-center overflow-hidden shadow-xl w-72 h-96 rounded-2xl hover:cursor-pointer' onClick={()=>{dispatch(setCategory("Cooling")); navigate("/shop")}} >
            <div className='group-hover:scale-125 bg-[url("/img/cooling.png.jpg")] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover grayscale group-hover:grayscale-0'></div>
            <a className='absolute text-xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-80 group-hover:opacity-100'>Cooling</a>
          </div>
        </div>
        <div className='snap-center'>
          <div className='relative group flex items-center justify-center overflow-hidden shadow-xl w-72 h-96 rounded-2xl hover:cursor-pointer' onClick={()=>{dispatch(setCategory("Monitor")); navigate("/shop")}} >
            <div className='group-hover:scale-125 bg-[url("/img/monitor.png.jpg")] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover grayscale group-hover:grayscale-0'></div>
            <a className='absolute text-xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-80 group-hover:opacity-100'>Monitor</a>
          </div>
        </div>
        <div className='snap-center'>
          <div className='relative group flex items-center justify-center overflow-hidden shadow-xl w-72 h-96 rounded-2xl hover:cursor-pointer' onClick={()=>{dispatch(setCategory("Keyboard")); navigate("/shop")}} >
            <div className='group-hover:scale-125 bg-[url("/img/kb.png.jpg")] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover grayscale group-hover:grayscale-0'></div>
            <a className='absolute text-xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-80 group-hover:opacity-100'>Keyboard</a>
          </div>
        </div>
        <div className='snap-center'>
          <div className='relative group flex items-center justify-center overflow-hidden shadow-xl w-72 h-96 rounded-2xl hover:cursor-pointer' onClick={()=>{dispatch(setCategory("Mouse")); navigate("/shop")}} >
            <div className='group-hover:scale-125 bg-[url("/img/mouse.png.jpg")] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover grayscale group-hover:grayscale-0'></div>
            <a className='absolute text-xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-80 group-hover:opacity-100'>Mouse</a>
          </div>
        </div>
      </div>
      <div className="flex gap-5 snap-x mx-20 mt-10">
      </div>
      <div className='font-black text-4xl mb-6 mx-20'>
        Best Deals for you
      </div>
      <div className='w-full snap-x flex px-20 overflow-x-scroll no-scrollbar'>
        {loading && 
          <div className='w-full h-[28rem] flex justify-center items-center'>
            <div className='scale-[5]'><span className="loading loading-infinity text-oranye loading-lg"></span></div>
          </div>
        }

        {!loading && listItem?.map((item, index) => {
          return(<div className='snap-center'>
            <CardBarang key={index} item={item}/>
          </div>)
        })}

      </div>
      <Footer/>
    </>
  )
}

export default HomePage