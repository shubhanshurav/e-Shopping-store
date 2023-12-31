import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const [formdata , setFormdata] = useState({email:"",Password:""});

  function submitHandler(event){
    event.preventDefault();
    console.log(formdata)
  }

  function changeHandler(event){

    setFormdata(prevFormdata=>{
      return{
        ...prevFormdata,
        [event.target.name]:event.target.value
      }
    })
  }

  return (
<div className='m-10 bg-slate-200 p-10  '>

  <form onSubmit={submitHandler} className='flex  flex-col  bg-slate-50 m-auto  place-content-center rounded-xl  items-center w-[350px]  border-slate-200
  border-2  '>

<div className='m-5'><img  src='./assets/Login img.jpg' className='text-[43px]  text-black font-semibold w-[100px] ' alt="logo"/>
<p className='text-[15px] text-slate-500 font-thin' >Welcome back....</p>
</div >

        <input
          className="text-[16px] border border-slate-700 m-5 rounded-md p-1 w-[250px]"
          type="email"
          placeholder="Enter Your Email"
          name="email"
        />

 <input className='text-[16px] border outline-none border-slate-400 type="text" rounded-md p-1 w-[250px]' 
placeholder='Enter Your Password' 
name='Password'
onChange={changeHandler}
 />

<div className='flex flex-col m-auto'>
        <Link
          to="/ForgetPassword"
          className="text-[13px] flex mr-1 p-2  text-red-500 font-semibold"
        >
          Forget Password {""}
        </Link>
          <div className='flex flex-row mr-5 justify-between gap-7'>
            <p>Dont have an account?</p>
          <Link to="/Signup">
            <p className="text-[15px] font-semibold text-green-500">
              Sign-up
            </p>
          </Link>
          </div>
        </div>

<button className='w-[230px] py-1 border  mb-12 mt-8 bg-green-500 text-black font-bold rounded-md hover:bg-slate-200 hover:text-black text-[18px]'>Login</button>
  </form>
  </div>
  )
}

export default Login;
