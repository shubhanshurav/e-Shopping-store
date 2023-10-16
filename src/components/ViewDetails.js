import React, { useState } from 'react'
// import {useFetch} from "../../hooks"
import {  useNavigate, useParams } from 'react-router-dom'

import shopData from '../Data';

const ViewDetails = () => {

   const [olddata , SetOlddata] = useState(shopData);
  const {id} = useParams(); 

  // sambhal ke

  const clickedData = olddata.filter(some=>some.id == id);
  // console.log(clickedData)
   
  //  const  nw = clickedData[0].image
  //  console.log(nw);

  const navigate = useNavigate();
   
  return (
   <div className=' flex gap-x-14  m-10  '>

     <div className=' -z-10 '> 
            <img src={clickedData[0].image} alt="Details" loading='lazy' className='  w-[500px] h-[500px]  cursor-pointer  hover:scale-105 transition-all  ' />
     </div>
    <div className='flex flex-col justify-center '>
             <p className='text-[35px] text-slate-500 font-semibold '>{clickedData[0].Heading}</p> 
             <p className='text-[20px] font-semibold py-2'>{clickedData[0].company}</p> 
             <p className='text-[15px] font-thin border-2 w-[100px] flex justify-center py-1'>1.3k Rating</p> 
             <hr className='m-1 w-[100vh]'/>
             <p className='text-[20px] font-semibold opacity-70 py-4 -z-10'>${clickedData[0].price} MRP <s >$99</s> <span className='text-orange-600 '>(55% OFF)</span>  </p> 
            
      <div className=' cursor-pointer  '>  
            <p className='text-[20px] font-semibold '>MORE COLORS</p>
            <div className='flex  gap-x-4 py-5'>
             <div className='w-[40px] h-[40px] bg-slate-600'></div>
             <div className='w-[40px] h-[40px] bg-red-600'></div>
             <div className='w-[40px] h-[40px] bg-yellow-600'></div>
           </div>
      </div> 
           <div className='flex justify-center gap-10'>
                   <button className= '  text-white font-bold border-2 w-[300px] py-2 rounded-xl mt-10 bg-orange-700'>Add To Cart</button> 
                   <button className=' text-white font-bold border-2 w-[300px]  py-4 rounded-xl mt-10 bg-green-700 ' onClick={()=>navigate("/shop")} >Back to Shop</button>
           </div>
          
    </div>
</div>
)
}

export default ViewDetails