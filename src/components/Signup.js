import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

const [formData , setFormData] = useState({email:"" ,Password:"", RePassword:""});



function submitHandler(event){
  event.preventDefault();

  console.log(formData);
}

function changeHandler(event){
setFormData(prevFormData =>{
       return{
        ...prevFormData,
       [event.target.name]:event.target.value  

  }
}
)
}

  return (
   <div className='m-10 bg-slate-200 p-10  '>

  <form onSubmit={submitHandler} className='flex  flex-col  bg-slate-50 m-auto  place-content-center rounded-xl  items-center w-[350px]  border-slate-200
  border-2  '>

<div className='m-5'><img  src='./assets/Login img.jpg' className='text-[43px]  text-black font-semibold w-[100px] ' alt="logo"/>
<p className='text-[15px] text-slate-500 font-thin' >Welcome back....</p>
</div >


<input  className='text-[16px] border outline-none border-slate-400 m-5 rounded-md p-1 w-[250px]' type="email"  
placeholder='Enter Your Email'
name='email'
onChange={changeHandler}
/>

 <input className='text-[16px] border outline-none border-slate-400 type="text" rounded-md p-1 m-5 w-[250px]' 
placeholder='Enter Your Password' 
name='Password'
onChange={changeHandler}
 />
  <input className='text-[16px] border outline-none border-slate-400 type="text" m-5 rounded-md p-1 w-[250px]' 
placeholder='Re-enter Your Password' 
name='RePassword'
onChange={changeHandler}
 />

<div className='flex flex-col m-auto'>
       
          <div className='flex flex-row mr-5 justify-between gap-10 mt-5'>
            <p> Have an account?</p>
          <Link to="/Login">
            <p className="text-[15px] font-semibold text-green-500 ">
            Login
            </p>
          </Link>
          </div>
        </div>

<button className='w-[230px] py-1 border  mb-12 mt-8 bg-green-500 text-black font-bold rounded-md hover:bg-slate-200 hover:text-black text-[18px]'>Signup</button>
  </form>
  </div>
  )
}

export default Signup