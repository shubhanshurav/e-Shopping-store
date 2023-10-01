import React from 'react';
import Card from './Card';
import { FaAngleDoubleLeft , FaAngleDoubleRight } from "react-icons/fa";


const Shop = ({shopdata}) => {
 


  return (
  <div className='overflow-hidden'>

  <div className='relative ' id='imagesection'>  
         <img src="./assets/images/banner/b1.jpg" alt=""  className='w-[100%] h-[250px]'/>
  </div>

 <div className='relative -mt-44 '>  /

         <p className=' text-[40px] font-semibold  flex justify-center text-white  '> <span className='  text-red-700 '>#100%</span> Off On All Products</p>
         <p className=' flex justify-center font-semibold text-[20px] text-blue-300'  >Make your orders we will deliver..</p>
         
 </div>

<div className='flex w-[100vw] flex-wrap mt-[7%] '>{shopdata.map((item)=>{
  return<Card {...item}></Card>
})}</div>

    <div className='flex justify-center gap-2 text-green-400 cursor-pointer font-semibold ' >
           <a href="#imagesection" className='h-[30px] w-[30px] px-2 py-2 border border-slate-400	rounded-md '><FaAngleDoubleLeft/></a>
           <a href="#imagesection" className=' h-[30px] w-[30px] px-3 py-1 border border-slate-400 rounded-md '>1</a>
           <a href="#imagesection" className='h-[30px] w-[30px] px-3 py-1 border border-slate-400 rounded-md '>2</a>
           <a href="#imagesection" className='h-[30px] w-[30px] px-3 py-1 border border-slate-400 rounded-md  '>3</a>
           <a href="#imagesection" className='h-[30px] w-[30px] px-2 py-2 border border-slate-400 rounded-md  '><FaAngleDoubleRight/></a>
    </div>

 </div>
  )
}

export default Shop;