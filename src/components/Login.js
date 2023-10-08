import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
<div className='m-10 bg-slate-200 p-10 '>

  <form action="" className='flex  flex-col  bg-slate-50 m-auto  place-content-center rounded-xl  items-center w-[25%]  border-slate-200
  border-2  '>

<div className='m-10'><img  src='./assets/Login img.jpg' className='text-[43px]  text-black font-semibold w-[100px] ' alt="logo"/>
{/* <p className='text-[15px] text-slate-500 font-thin' >Welcome back....</p> */}
</div >


<input  className='text-[16px] border border-slate-700 m-5 rounded-md p-1 w-[250px]' type="email"  
placeholder='Enter Your Email'
name='email'
/>

 <input className='text-[16px] border border-slate-700 type="text" rounded-md p-1 w-[250px]' 
placeholder='Enter Your Password' 
name='Password'
 />
<Link to="/ForgetPassword" className='text-[13px] flex  gap-[95px] p-2 text-red-500 font-semibold '>Forget Password <Link to="/Signup"><span className='text-[15px] font-semibold text-green-500'>Sign-up</span></Link></Link>

<button className='w-[100px] py-1 border  mb-12 mt-8 bg-slate-400 text-green-200 font-semibold rounded-md hover:bg-slate-200 hover:text-black'>Login</button>
  </form>
  </div>
  )
}

export default Login;