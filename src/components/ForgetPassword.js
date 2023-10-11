import React, { useState } from 'react'


const ForgetPassword = () => {

const [infoShow , setInfoShow] = useState(false);  


  return (
   <div className='m-10 bg-slate-200 p-10 overflow-hidden '>

  <form action="" className='flex  flex-col  bg-slate-50 m-auto  place-content-center rounded-xl  items-center w-[370px]  border-slate-200
  border-2  '>

<div className='m-5'>
<p  className='text-[25px]  text-green-400   font-semibold flex justify-center m-5  '> Forget Password  </p>
<p className='text-[15px] text-green-400 font-thin ' >Enter Your Email Address for Reset the Password</p>
</div >



<input onChange={e=>{}} className=' text-[16px] border outline-none border-slate-400 m-5 rounded-md p-1 w-[300px]'
type="email" 
placeholder='Enter Your Email'
name='email'
id='name'
/>


<p type="button" onClick={()=>setInfoShow(true)} className=' px-20 py-2 mb-4  bg-green-500 text-black font-bold rounded-md hover:cursor-pointer '>send</p>

{
      infoShow?( <p className='text-green-500 mb-4 font-semibold '>Send Reset information Successfully.....</p>):(null)
}




  </form>
  </div>

  )
}

export default ForgetPassword;