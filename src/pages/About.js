import React from 'react';
import CardCustomer from '../components/CardCustomer';
import Creators from './Creators';


const About = ({datacustomer}) => {

  return (

    <div className='w-[100%] font-chakra-petch'>

   <div className=' relative flex flex-col items-center m-10 -z-10'>
       <img src="./assets/about/banner.png"  loading='lazy' className='h-[300px] w-[100vw] rounded-md' alt="banner" />
       <p className='absolute text-[40px] text-yellow-400 font-bold top-[50px]'>#Know Us</p>
       <p className=' absolute text-[25px] top-[100px] text-orange-200 font-semibold '>Get to know us more</p>
    </div>
     
     <div className=' w-[100%] middlepart flex mt-32 items-center justify-evenly '>
          <img src="./assets/about/a6.jpg" alt="" loading='lazy  ' className='h-[400px] w-[600px] rounded-md'/>

          <div className='max-w-[500px]'> 
                 <p className='flex justify-center mb-10 text-[45px] text-slate-800 font-bold'>Who are we?</p>
                 <p className='text-[20px] text-gray-900 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quia modi beatae repellendus amet dignissimos quaerat quod hic, alias dolorem magnam vero, repellat tempora ut quis, voluptas maiores nobis voluptate!</p>
    </div>

</div>

    <div className='flex justify-center m-20'>
             <p className='text-[40px] text-green-600 font-semibold'>Download our <span className='text-[40px] text-black font-semibold'>App</span></p>
    </div>
    <div className='Addvediosection flex justify-center'>
             <video autoPlay   src ="./assets/about/1.mp4" className=' max-w-[800px] max-h-[700px] rounded-xl'></video>
     </div>

<div className='customerSection flex flex-col items-center mt-16 '>
       <p className='text-[45px] text-orange-300 font-semibold '>What our customers say...</p>
       <p className='m-3'>Our customers never miss a bit on providing feedback</p>
</div>

{/* data passing only one card for one data */}

<div className='w-[100%] flex flex-wrap justify-center'>
{
  datacustomer.map((one)=>{
    return<CardCustomer {...one}></CardCustomer>})
}
</div>

<div className='SliderMain'>
   <div className="flex flex-row m-auto p-10 Slide" >

        <div className="  p-2 m-5 SliderDiv -z-10 ">
           <img className='w-20' src='/assets/icons/icon1.png' alt="icons" />
           <p className="text-center">Fast Orders</p>
        </div>

        <div  className="  p-2 m-5  SliderDiv -z-10 ">
           <img className='w-20' src='/assets/icons/icon2.png' alt="icons" />
           <p className="text-center">Quick Shipping</p>
        </div>

        <div  className="  p-2 m-5 SliderDiv -z-10 ">
           <img className='w-20' src='/assets/icons/icon3.png' alt="icons" />
           <p>High Saves</p>
        </div>

        <div  className="  p-2 m-5  SliderDiv -z-10 ">
           <img className='w-20' src='/assets/icons/icon4.png' alt="icons" />
           <p>24/7 Support</p>
        </div>

        <div  className=" p-2 m-5 SliderDiv -z-10  ">
           <img className='w-20' src='/assets/icons/icon5.png' alt="icons" />
           <p>Online Orders</p>
        </div>

 </div>

</div>

{/* Creators */}
      <div>
         <Creators />
      </div>
           
</div> 
  )
}

export default About;

